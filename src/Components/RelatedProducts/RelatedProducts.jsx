import React from 'react';
import './RelatedProducts.css';
import data_products from '../Assets/data';   // তোমার data ফাইল যেখানে আছে
import Item from '../Item/Item';              // Item কম্পোনেন্ট import করো

const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {data_products.map((item, i) => (
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
        </div>
    );
};

export default RelatedProducts;
