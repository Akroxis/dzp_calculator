export const numberWithSpaces = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const sumRound = (value) => Math.round(value/1000)*1000;

export const timeRound = (value) => Math.round(value);

export const getCorrectDeclension = (value, words) => {
    value = Math.abs(value) % 100;
    const num = value % 10;
    if(value > 10 && value < 20) return words[2];
    if(num > 1 && num < 5) return words[1];
    if(num === 1) return words[0];
    return words[2];
}

const daysWithDeclension = ['день', 'дня', 'дней'];
const monthsWithDeclension = ['месяц', 'месяца', 'месяцев'];

export const formattedPeriod = (value, isDaysPeriod) => {
    if(isDaysPeriod) {
        return getCorrectDeclension(value, daysWithDeclension);
    }
    return getCorrectDeclension(value, monthsWithDeclension);
}

export const getFormattedDate = (today) => {
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();
    if(day < 10) {
        day = `0${day}`;
    }
    if(month < 10) {
        month = `0${month}`
    }
    return `${year}-${month}-${day}`;
}