import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container footer__container">
                <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
                <div className="footer__list">
                    <div className="footer__item">
                        <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" alt="" />
                    </div>
                    <div className="footer__item">
                        <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" alt="" />
                    </div>
                    <div className="footer__item">
                        <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" alt="" />
                    </div>
                    <div className="footer__item">
                        <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" alt="" />
                    </div>
                    <div className="footer__item">
                        <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" alt="" />
                    </div>
                    <div className="footer__item">
                        <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer