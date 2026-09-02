import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

/* Default Cart */
const getDefaultCart = () => {

    let cart = {};

    for (let item of all_product) {
        cart[item.id] = 0;
    }

    return cart;
};

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    /* Add To Cart */
    const addToCart = (itemId) => {

        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));

    };

    /* Remove From Cart */
    const removeFromCart = (itemId) => {

        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0
        }));

    };

    useEffect(() => {

    }, [cartItems]);

    /* Total Cart Amount */
    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for (const item in cartItems) {

            if (cartItems[item] > 0) {

                let itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );

                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }

        return totalAmount;
    };

    const contextValue = {
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;