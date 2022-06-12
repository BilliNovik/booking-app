import React from 'react'
import './options.scss'

const Options = ({ initialOptions, updateOptions }) => {
    React.useEffect(() => {
        setOptions(initialOptions)
    }, [])

    const [options, setOptions] = React.useState({
        adults: 2,
        children: 0,
        room: 1
    });

    React.useEffect(() => {
        updateOptions(options)
    }, [options])

    const handleChanges = (e) => {
        setOptions({
            ...options,
            [e.target.name]: e.target.dataset.count === 'inc' ? options[e.target.name] + 1 : options[e.target.name] - 1
        })
    }

    return (
        <div className="options">
            <div className="options__item">
                <span className="options__text">Adults</span>
                <div className="counter">
                    <button className="counter__button" name="adults" disabled={options.adults < 2} onClick={handleChanges}>-</button>
                    <span className="counter__number">{options.adults}</span>
                    <button className="counter__button" name="adults" data-count="inc" onClick={handleChanges}>+</button>
                </div>
            </div>
            <div className="options__item">
                <span className="options__text">Children
                    <span className="options__sub">Ages 0 – 17</span>
                </span>
                <div className="counter">
                    <button className="counter__button" name="children" disabled={options.children < 1} onClick={handleChanges}>-</button>
                    <span className="counter__number">{options.children}</span>
                    <button className="counter__button" name="children" data-count="inc" onClick={handleChanges}>+</button>
                </div>
            </div>
            <div className="options__item">
                <span className="options__text">Rooms</span>
                <div className="counter">
                    <button className="counter__button" name="room" disabled={options.room < 2} onClick={handleChanges}>-</button>
                    <span className="counter__number">{options.room}</span>
                    <button className="counter__button" name="room" data-count="inc" onClick={handleChanges}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Options