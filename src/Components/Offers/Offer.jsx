import React from 'react'
import './Offer.css'
import exclusive_image from "../Assets/exclusive_image.png"
const Offer = () => {
    return (
        <div className='offers'>

            <div className="offers-left">
                <h1>Exlusive</h1>
                <h1>Offer For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="Exclusive Offer" />
            </div>
        </div>
    )
}

export default Offer