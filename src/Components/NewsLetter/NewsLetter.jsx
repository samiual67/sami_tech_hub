import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newsletter and get 10% off your first purchase!</p>
        <div>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter