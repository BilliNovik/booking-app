import React from 'react'
import './featured.scss'

const Featured = () => {
    return (
        <div className='featured container'>
            <div className="featured__item">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/689394.webp?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=" alt="" className="featured__img" />
                <div className="featured__titles">
                    <h1 className="featured__general">San Francisco, United States</h1>
                    <h2 className="featured__sub">372 properties</h2>
                </div>
            </div>
            <div className="featured__item">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/619746.webp?k=ff577d4b01bf1332a711e09ad9b320b516b4cbfca9122d20d9dfc6a6e3fab9d2&o=" alt="" className="featured__img" />
                <div className="featured__titles">
                    <h1 className="featured__general">Tokyo, Japan</h1>
                    <h2 className="featured__sub">5,652 properties</h2>
                </div>
            </div>
            <div className="featured__item">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/682535.webp?k=5a668b67965282725185c1ae8ba566c1a5edb7b72ae7d1e203b00a36d7eb6b96&o=" alt="" className="featured__img" />
                <div className="featured__titles">
                    <h1 className="featured__general">Sydney, Australia</h1>
                    <h2 className="featured__sub">3,624 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured