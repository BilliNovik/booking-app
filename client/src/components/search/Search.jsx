import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

import './search.scss'
import Options from '../options/Options';

const Search = () => {
    const [openDate, setOpenDate] = React.useState(false)
    const [openOptions, setOpenOptions] = React.useState(false)
    const [date, setDate] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [options, setOptions] = React.useState({
        adults: 2,
        children: 0,
        room: 1
    });

    const updateOptions = (value) => {
        setOptions(value)
    }

    return (
        <>
            <div className='search'>
                <div className="search__item">
                    <FontAwesomeIcon icon={faBed} className="search__icon" />
                    <input type="text" placeholder='Where are you going?' className="search__input" />
                </div>
                <div className="search__item">
                    <FontAwesomeIcon icon={faCalendar} className="search__icon" />
                    {/* <span type="text" className="search__text" >Check-in - Check-out</span> */}

                    <span type="text" className="search__text" onClick={() => setOpenDate(!openDate)}
                    >{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')} `}</span>

                </div>
                <div className="search__item">
                    <FontAwesomeIcon icon={faPerson} className="search__icon" />

                    <span type="text" className="search__text" onClick={() => setOpenOptions(!openOptions)}
                    >{`${options.adults} adults  ·  ${options.children} children  ·  ${options.room} room`}</span>

                </div>
                <div className="search__item">
                    <button className="search__button header__button">Search</button>
                </div>
            </div>
            {
                openOptions && <div className="search__options">
                    <Options initialOptions={{
                        adults: options.adults,
                        children: options.children,
                        room: options.room
                    }} updateOptions={updateOptions} />
                </div>
            }
            {
                openDate && <DateRange
                    editableDateInputs={false}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    showSelectionPreview={false}
                    showMonthAndYearPickers={false}
                    direction="horizontal"
                    className='date'
                    ranges={date}
                />}
        </>
    )
}

export default Search