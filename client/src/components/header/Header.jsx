import React from 'react'

import './header.scss'
import Search from '../search/Search'

const Header = () => {
    return (
        <div className='header'>
            <div className="container header__container">
                <h1 className='header__title'>
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="header__desc">
                    Get rewarded for your travels – unlock instant savings of 10% or
                    more with a free <b>clonebooking</b> account
                </p>
                <button className="header__button">
                    Sign in / Register
                </button>
                <div className="header__search container">
                    <Search />
                </div>
            </div>
        </div >
    )
}

export default Header