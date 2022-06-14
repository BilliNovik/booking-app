import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar__container">
                    <Link to='/'>
                        <span className="logo">clonebooking</span>
                    </Link>
                    <div className="navbar__items">
                        <button className="navbar__button">Register</button>
                        <button className="navbar__button">Login</button>
                    </div>
                </div>
                <div className="navbar__list">
                    <div className="navbar__item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="navbar__item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="navbar__item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>
                    <div className="navbar__item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Attractions</span>
                    </div>
                    <div className="navbar__item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar