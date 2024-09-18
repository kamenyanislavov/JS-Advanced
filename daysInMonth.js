function daysInMonth(month, year) {

    let startDay = new Date(year, month - 1);
    let endDay = new Date(year, month);

    let days = (endDay - startDay) / (1000 * 60 * 60 * 24);

    return days;

}

daysInMonth(1, 2012);
console.log('----------------');
daysInMonth(2, 2021);