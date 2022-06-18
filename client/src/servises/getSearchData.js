const getItemAndParse = (name) => JSON.parse(localStorage.getItem(name))

const data = {
    //search
    search: localStorage.getItem('to') || '',

    // date
    startDate: localStorage.getItem('date') === null ? new Date() : new Date(getItemAndParse('date')[0].startDate),
    endDate: localStorage.getItem('date') === null ? new Date() : new Date(getItemAndParse('date')[0].endDate),

    // options
    adults: localStorage.getItem('people') === null ? 2 : getItemAndParse('people').adults,
    children: localStorage.getItem('people') === null ? 0 : getItemAndParse('people').children,
    room: localStorage.getItem('people') === null ? 1 : getItemAndParse('people').room,
}

export default data
