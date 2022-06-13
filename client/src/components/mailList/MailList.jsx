import React from 'react'
import './mailList.scss'

const MailList = () => {
    return (
        <div className='mail'>
            <div className="container mail__container">
                <h1 className="mail__title">Save time, save money!</h1>
                <p className="mail__desc">Sign up and we'll send the best deals to you</p>
                <div className="mail__input-container">
                    <input type="text" placeholder='Your email' />
                    <button>Subscribe</button>
                </div>
                <div className="mail__input-agreement">
                    <input type="checkbox" />
                    <p>Send me a link to get the FREE Booking.com app!</p>
                </div>
            </div>
        </div>
    )
}

export default MailList