import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPerson, faXmark } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

import './search.scss'
import './dateRange.scss'
import Options from '../options/Options';

const Search = () => {
    const [openDate, setOpenDate] = React.useState(false)
    const [searchInput, setSearchInput] = React.useState('')
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

    const handleChange = (e) => {
        if (e.target.dataset.type === 'date') {
            setOpenDate(!openDate)
            setOpenOptions(false)
        } else {
            setOpenOptions(!openOptions)
            setOpenDate(false)
        }
    }

    return (
        <>
            <div className='search'>
                <div className="search__item">
                    <FontAwesomeIcon icon={faBed} className="search__icon" />
                    <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Where are you going?' className="search__input" />
                    {
                        searchInput && <FontAwesomeIcon icon={faXmark} onClick={() => setSearchInput('')} className='search__input-button' />
                    }
                </div>
                <div className="search__item">
                    <FontAwesomeIcon icon={faCalendar} className="search__icon" />
                    {/* <span type="text" className="search__text" >Check-in - Check-out</span> */}

                    <span type="text" data-type="date" className="search__text" onClick={handleChange}
                    >{`${format(date[0].startDate, 'EEE, MMM d')} - ${format(date[0].endDate, 'EEE, MMM d')} `}</span>

                </div>
                <div className="search__item">
                    <FontAwesomeIcon icon={faPerson} className="search__icon" />

                    <span type="text" data-type="options" className="search__text" onClick={handleChange}
                    >{`${options.adults} adults  ·  ${options.children} children  ·  ${options.room} room`}</span>

                </div>
                <div className="search__item">
                    <button className="search__button header__button">Search</button>
                </div>
            </div>
            {
                openOptions && <div className="search__options">
                    <Options
                        initialOptions={{
                            adults: options.adults,
                            children: options.children,
                            room: options.room
                        }}
                        updateOptions={updateOptions}
                    />
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
                    monthDisplayFormat="MMMM yyyy"
                    weekdayDisplayFormat="EEEEEE"
                />}
        </>
    )
}

export default Search