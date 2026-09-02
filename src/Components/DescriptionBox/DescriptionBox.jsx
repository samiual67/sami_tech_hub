import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>

            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>
                    Sami Live Fashion is a reliable online shopping platform designed to make your everyday
                    purchases easier. From clothing and accessories to lifestyle essentials, we bring
                    everything together in one place. Our mission is to provide quality products at
                    affordable prices with a smooth shopping experience. With secure payments and fast
                    delivery, you can shop with confidence. Customer satisfaction is always our top
                    priority, and we strive to make every order a pleasant experience.
                </p>
            </div>

        </div>
    );
};

export default DescriptionBox