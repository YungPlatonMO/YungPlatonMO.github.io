function getSecondsToday() {
    let dataDay = new Date();
    return dataDay.getHours() * 3600 + dataDay.getMinutes() * 60 + dataDay.getSeconds();
}
console.log(getSecondsToday())

function formatDate(date) {

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let mes = date.getMonth() + 1;
    if (mes < 10) mes = '0' + mes;

    let year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    return day + '.' + mes + '.' + year;
}
d = new Date(2022, 9, 25);
console.log(formatDate(d))