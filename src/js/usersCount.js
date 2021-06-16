import { getCorrectDeclension } from "./helper";

const usersCountSpan = document.getElementById('users_count');

const userWithDeclension = ['клиент', 'клиента', 'клиентов'];

const getCount = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const currentHour = today.getHours();

    const commonValue = currentYear * (currentMonth / 10) + currentDay;

    if(currentHour === 0 || currentHour === 1) {
        return Math.round(commonValue * 0.1);
    }
    if(currentHour > 10) {
        Math.round(commonValue * currentHour / 10)
    }
    return Math.round(commonValue * currentHour / (currentHour - 1));
};

window.onload = () => {
    if(usersCountSpan) {
        usersCountSpan.innerText = `${getCount()} ${getCorrectDeclension(getCount(), userWithDeclension)}`;
    }
};

