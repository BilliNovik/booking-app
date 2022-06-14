const getItemAndParse = (name) => JSON.parse(localStorage.getItem(name))

const data = {
    //search
    search: localStorage.getItem('to') || '',

    // date
    startDate: localStorage.getItem('date') === null ? new Date() : new Date(getItemAndParse('date')[0].startDate),
    endDate: localStorage.getItem('date') === null ? new Date() : new Date(getItemAndParse('date')[0].endDate),

    // options
    adults: localStorage.getItem('people') === null ? 2 : new Date(getItemAndParse('people').adults),
    children: localStorage.getItem('people') === null ? 0 : new Date(getItemAndParse('people').children),
    room: localStorage.getItem('people') === null ? 1 : new Date(getItemAndParse('people').room),
}

export default data