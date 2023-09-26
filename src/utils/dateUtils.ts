const YearMonth = (date?:Date) =>{
    if(!date) return ""
    return new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short"})
}

const MonthYear = (date?:Date) =>{
    if(!date) return ""
    return new Date(date).toLocaleDateString('en-us', { month:"short", year:"numeric"})
}

export default {YearMonth, MonthYear}