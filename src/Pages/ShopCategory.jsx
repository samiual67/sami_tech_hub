import React, { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const SORT_OPTIONS = [
  { key: "default", label: "Default" },
  { key: "price-low-high", label: "Price: Low to High" },
  { key: "price-high-low", label: "Price: High to Low" },
  { key: "best-selling", label: "Best Selling" },
];

const PRODUCTS_PER_PAGE = 8;

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("default");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset visible count when category or sort changes
  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [props.category, sortBy]);

  const categoryProducts = all_product.filter(
    (item) => props.category === item.category
  );

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    if (sortBy === "price-low-high") return a.new_price - b.new_price;
    if (sortBy === "price-high-low") return b.new_price - a.new_price;
    if (sortBy === "best-selling") return (b.sold || 0) - (a.sold || 0);
    return 0;
  });

  const visibleProducts = sortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProducts.length;

  const currentSortLabel =
    SORT_OPTIONS.find((opt) => opt.key === sortBy)?.label || "Default";

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-intexSort">
        <p>
          <span>
            Showing 1-{visibleProducts.length}
          </span>  out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort" ref={sortRef} onClick={() => setIsSortOpen((prev) => !prev)}>
          sort by: {currentSortLabel} <img src={dropdown_icon} alt="" />
          {isSortOpen && (
            <div className="shopcategory-sort-dropdown">
              {SORT_OPTIONS.map((opt) => (
                <div
                  key={opt.key}
                  className={`shopcategory-sort-option ${sortBy === opt.key ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortBy(opt.key);
                    setIsSortOpen(false);
                  }}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {visibleProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {hasMore && (
        <div
          className="shopcategory-loadmore"
          onClick={() => setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE)}
        >
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;