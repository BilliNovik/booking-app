import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCalendar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import searchData from '../../servises/getSearchData'
import './list.scss'

const List = () => {
    const [searchInput, setSearchInput] = React.useState(searchData.search)

    const [date, setDate] = React.useState([
        {
            startDate: searchData.startDate,
            endDate: searchData.endDate,
            key: 'selection'
        }
    ]);

    const [options, setOptions] = React.useState({
        adults: searchData.adults,
        children: searchData.children,
        room: searchData.room
    });

    return (
        <div className='list'>
            <div className="container list__container">
                <div className="list__wrapper">
                    <div className="list__search search-block">
                        <h1 className="search-block__title">Search</h1>
                        <div className="search-block__container">
                            <p>Destination/property name:</p>
                            <button className="search-block__button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-block__icon" />
                                <input className='search-block__text search-block__input' placeholder='Where are you going?'
                                    onChange={e => setSearchInput(e.target.value)} value={searchInput} type="text" />
                            </button>
                        </div>
                        <div className="search-block__container">
                            <p>Check-in date</p>
                            <button className="search-block__button" >
                                <FontAwesomeIcon icon={faCalendar} className="search-block__icon" />
                                <span className='search-block__icon-text'>33</span>
                                <span className='search-block__text'>MMKK Ranchi, Ranchi Ring Road, Jhiri, Jharkhand</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                        </div>
                        <div className="search-block__container">
                            <p>Check-out date</p>
                            <button className="search-block__button" >
                                <FontAwesomeIcon icon={faCalendar} className="search-block__icon" />
                                <span className='search-block__icon-text'>33</span>
                                <span className='search-block__text'>MMKK Ranchi, Ranchi Ring Road, Jhiri, Jharkhand</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                            <p className='search-block__period'>8-night stay</p>
                        </div>
                        <div className="search-block__container">
                            <button className="search-block__button">
                                <span className='search-block__text'>2 adults · 0 children · 1 room</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                        </div>
                        <div className="search-block__container search-block__align">
                            <input type="checkbox" />
                            <span>I'm traveling for work</span>
                        </div>
                        <button className='search-block__general-button'>Search</button>
                    </div>
                    {/* <div className="list__result list-block">
                        <h1 className="list-block__title">MMKK Ranchi, Ranchi Ring Road</h1>
                        <div className="list-block__card">
                            <div className="list-block__img">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/317978085.webp?k=cf131c1c389623ed172122bf8ca3e0ebbbde859774431352911a709b929bbf98&o=&s=1" alt="" />
                            </div>
                            <div className="list-block__info">

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default List