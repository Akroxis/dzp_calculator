import EventObserver from "./observer";
import { numberWithSpaces, sumRound, timeRound, formattedDays } from "./helper";
import {
    MIN_LOAN_AMOUNT,
    MAX_LOAN_AMOUNT,
    MIN_LOAN_TIME,
    MAX_LOAN_TIME,
    TIME_RIGHT_CORNER_VALUE,
    TIME_LEFT_CORNER_VALUE,
    AMOUNT_RIGHT_CORNER_VALUE,
    AMOUNT_LEFT_CORNER_VALUE
} from './constants';

// Моки для текстовых инпутов
const loanSumMock = document.getElementById('loanSumMock');
const loanTimeMock = document.getElementById('loanTimeMock');

// Инпуты суммы займа
const loanSumRange = document.getElementById('loanSumRange');
const loanSumText = document.getElementById('loanSumValue');

// Инпуты срока займа
const loanTimeRange = document.getElementById('loanTimeRange');
const loanTimeText = document.getElementById('loanTimeValue');

// Кнопка получения суммы
const confirmButton = document.getElementById('getLoanButton');

// Табы
const firstTab = document.getElementById('firstTab');
const secondTab = document.getElementById('secondTab');


// Обсерверы
const firstTabObserver = new EventObserver();
const secondTabObserver = new EventObserver();
const loanSumObserver = new EventObserver();
const loanTimeObserver = new EventObserver();

// INIT-значения
const formattedMinLoanAmount = numberWithSpaces(MIN_LOAN_AMOUNT);
confirmButton.innerText = `ПОЛУЧИТЬ ${formattedMinLoanAmount} ₽`;
firstTab.classList.add('little-loan');
loanSumMock.innerText = `${formattedMinLoanAmount} ₽`;
loanTimeMock.innerText = `${MIN_LOAN_TIME} ${formattedDays(MIN_LOAN_TIME)}`;

// Переменные для хранения текущих значений инпутов перед новым вводом
let currentLoanSum = MIN_LOAN_AMOUNT;
let currentLoanTime = MIN_LOAN_TIME;

// Логика скрытия мока и отображения инпута
loanSumMock.onclick = () => {
    const inputLength = loanSumText.value.length;
    loanSumMock.style.display = 'none';
    loanSumText.focus();
    loanSumText.setSelectionRange(inputLength, inputLength);
};
loanTimeMock.onclick = () => {
    const inputLength = loanTimeText.value.length
    loanTimeMock.style.display = 'block';
    loanTimeText.focus();
    loanTimeText.setSelectionRange(inputLength, inputLength);
}

// Запись значений инпутов (для корректной смены рендж-инпутов)
loanSumText.onfocus = (event) => {
    currentLoanSum = event.target.value;
    loanSumMock.style.display = 'none';
};
loanTimeText.onfocus = (event) => {
    currentLoanTime = event.target.value;
    loanTimeMock.style.display = 'none';
};
loanSumRange.onfocus = (event) => {
    currentLoanSum = event.target.value;
};
loanTimeRange.onfocus = (event) => {
    currentLoanTime = event.target.value;
};


// Изменение текста кнопки
const setButtonText = (value) => {
    confirmButton.innerText = `ПОЛУЧИТЬ ${numberWithSpaces(value)} ₽`;
};

// Изменение текста мока суммы
const setSumMockText = (value) => {
    loanSumMock.innerText = `${numberWithSpaces(value)} ₽`;
};

// Изменение текста мока времени
const setTimeMockText = (value) => {
    loanTimeMock.innerText = `${value} ${formattedDays(value)}`
}

// Переключение табов
const setFirstTabActive = () => {
    firstTab.classList.add('little-loan');
    secondTab.classList.remove('large-loan');
    confirmButton.classList.remove('large-loan');
    loanSumRange.classList.remove('large-loan');
    loanTimeRange.classList.remove('large-loan');
};
const setSecondTabActive = () => {
    firstTab.classList.remove('little-loan');
    secondTab.classList.add('large-loan');
    confirmButton.classList.add('large-loan');
    loanSumRange.classList.add('large-loan');
    loanTimeRange.classList.add('large-loan');
};

// Выставление левых границ суммы/срока займа
const setLeftCornerValues = () => {
    loanSumText.value = AMOUNT_LEFT_CORNER_VALUE;
    loanSumRange.value = AMOUNT_LEFT_CORNER_VALUE;
    loanTimeText.value = TIME_LEFT_CORNER_VALUE;
    loanTimeRange.value = TIME_LEFT_CORNER_VALUE;
    setButtonText(AMOUNT_LEFT_CORNER_VALUE);
    setSumMockText(AMOUNT_LEFT_CORNER_VALUE);
    setTimeMockText(TIME_LEFT_CORNER_VALUE);
};

// Выставление правых границ суммы/срока займа
const setRightCornerValues = () => {
    loanSumText.value = AMOUNT_RIGHT_CORNER_VALUE;
    loanSumRange.value = AMOUNT_RIGHT_CORNER_VALUE;
    loanTimeText.value = TIME_RIGHT_CORNER_VALUE;
    loanTimeRange.value = TIME_RIGHT_CORNER_VALUE;
    setButtonText(AMOUNT_RIGHT_CORNER_VALUE);
    setSumMockText(AMOUNT_RIGHT_CORNER_VALUE);
    setTimeMockText(TIME_RIGHT_CORNER_VALUE);
};

// Прослушка действий с первым табом
firstTabObserver.subscribe(() => {
    setFirstTabActive();
    setLeftCornerValues();
});
firstTab.onclick = (event) => {
    event.stopPropagation();
    firstTabObserver.broadcast();
};

// Прослушка действий с вторым табом
secondTabObserver.subscribe(() => {
    setSecondTabActive();
    setRightCornerValues();
});
secondTab.onclick = (event) => {
    event.stopPropagation();
    secondTabObserver.broadcast();
};

// Установка суммы займа
const setLoanSumValues = (value) => {
    loanSumText.value = value;
    loanSumRange.value = value;
    setButtonText(value);
    setSumMockText(value);
};

// Установка времени займа
const setLoanTimeValues = (value) => {
    loanTimeText.value = value;
    loanTimeRange.value = value;
    setTimeMockText(value);
};

// Проверка того, что предыдущее и новое значения суммы/времени находятся по разную сторону левой и правой границ всего ренджа
const validateSumsForRange = () => (currentLoanSum <= AMOUNT_LEFT_CORNER_VALUE && loanSumText.value >= AMOUNT_RIGHT_CORNER_VALUE) ||
    (currentLoanSum <= AMOUNT_LEFT_CORNER_VALUE && loanSumRange.value >= AMOUNT_RIGHT_CORNER_VALUE) ||
    (currentLoanSum >= AMOUNT_RIGHT_CORNER_VALUE && loanSumText.value <= AMOUNT_LEFT_CORNER_VALUE) ||
    (currentLoanSum >= AMOUNT_RIGHT_CORNER_VALUE && loanSumRange.value <= AMOUNT_LEFT_CORNER_VALUE);
const validateTimesForRange = () => (currentLoanTime <= TIME_LEFT_CORNER_VALUE && loanTimeText.value >= TIME_RIGHT_CORNER_VALUE) ||
    (currentLoanTime <= TIME_LEFT_CORNER_VALUE && loanTimeRange.value >= TIME_RIGHT_CORNER_VALUE) ||
    (currentLoanTime >= TIME_RIGHT_CORNER_VALUE && loanTimeText.value <= TIME_LEFT_CORNER_VALUE) ||
    (currentLoanTime >= TIME_RIGHT_CORNER_VALUE && loanTimeRange.value <= TIME_LEFT_CORNER_VALUE);

// Смена рендж-инпута времени в зависимости от суммы, сопутствующая смена текста кнопки/табов
const setActualLoanTime = (value) => {
    if (value < AMOUNT_RIGHT_CORNER_VALUE) {
        loanTimeRange.value = TIME_LEFT_CORNER_VALUE;
        loanTimeText.value = TIME_LEFT_CORNER_VALUE;
        setFirstTabActive();
    }
    if(value >= AMOUNT_RIGHT_CORNER_VALUE) {
        loanTimeRange.value = TIME_RIGHT_CORNER_VALUE;
        loanTimeText.value = TIME_RIGHT_CORNER_VALUE;
        setSecondTabActive();
    }
    setSumMockText(value);
    setTimeMockText(loanTimeText.value);
    setButtonText(value);
};

// Подписка на изменения суммы
loanSumObserver.subscribe(value => {
    const validationResult = validateSumsForRange();
    setLoanSumValues(value);
    if(validationResult) {
        setActualLoanTime(value);
    }
});

// Валидация инпута суммы: соответствие диапазону, округление до ближайшей тысячи, проверка на NaN
const setCorrectLoanSum = (currentValue) => {
    if(currentValue < MIN_LOAN_AMOUNT || isNaN(currentValue)) {
        currentValue = MIN_LOAN_AMOUNT;
    } else if(currentValue > MAX_LOAN_AMOUNT) {
        currentValue = MAX_LOAN_AMOUNT;
    } else {
        if(currentValue % 1000 !== 0) {
            currentValue = sumRound(currentValue);
        }
    }
    loanSumObserver.broadcast(currentValue);
};

// Прослушка действий с суммой займа
// Валидация суммы займа по завершению ввода
loanSumText.oninput = (event) => {
    loanSumObserver.broadcast(event.target.value)
};
loanSumText.onchange = (event) => {
    let currentValue = event.target.value;
    setCorrectLoanSum(currentValue);
};
loanSumText.onblur = (event) => {
    let currentValue = event.target.value;
    loanSumMock.style.display = 'block';
    setCorrectLoanSum(currentValue);
};
loanSumRange.onchange = (event) => {
    loanSumObserver.broadcast(event.target.value)
};
loanSumRange.oninput = (event) => {
    loanSumObserver.broadcast(event.target.value)
};


// Смена рендж-инпута суммы в зависимости от времени, сопутствующая смена текста кнопки/табов
const setActualLoanSum = (value) => {
    if(value >= TIME_RIGHT_CORNER_VALUE) {
        loanSumText.value = AMOUNT_RIGHT_CORNER_VALUE;
        loanSumRange.value = AMOUNT_RIGHT_CORNER_VALUE;
        setSumMockText(AMOUNT_RIGHT_CORNER_VALUE);
        setSecondTabActive();
    }
    if(value <= TIME_LEFT_CORNER_VALUE) {
        loanSumText.value = AMOUNT_LEFT_CORNER_VALUE;
        loanSumRange.value = AMOUNT_LEFT_CORNER_VALUE;
        setSumMockText(AMOUNT_LEFT_CORNER_VALUE);
        setFirstTabActive();
    }
    setTimeMockText(value);
    setButtonText(loanSumText.value);
};

// Подписка на время займа
loanTimeObserver.subscribe(value => {
    const validationResult = validateTimesForRange();
    setLoanTimeValues(value);
    if(validationResult) {
        setActualLoanSum(value)
    }
});


// Валидация инпута времени: соответствие диапазону, округление до ближайшего целого, проверка на NaN
const setCorrectLoanTime = (currentValue) => {
    if(currentValue < MIN_LOAN_TIME || isNaN(currentValue)) {
        currentValue = MIN_LOAN_TIME;
    }
    if(currentValue > MAX_LOAN_TIME) {
        currentValue = MAX_LOAN_TIME;
    }
    loanTimeObserver.broadcast(timeRound(currentValue))
};

// Прослушка действий с временем займа
loanTimeText.oninput = (event) => {
    loanTimeObserver.broadcast(event.target.value)
};
loanTimeText.onchange = (event) => {
    let currentValue = event.target.value;
    setCorrectLoanTime(currentValue);
};
loanTimeText.onblur = (event) => {
    let currentValue = event.target.value;
    loanTimeMock.style.display = 'block';
    setCorrectLoanTime(currentValue);
    setButtonText(loanSumText.value);
};
loanTimeRange.onchange = (event) => {
    loanTimeObserver.broadcast(event.target.value);
};
loanTimeRange.oninput = (event) => {
    loanTimeObserver.broadcast(event.target.value);
};


confirmButton.onclick = () => {
    const tariffId = loanTimeText.value >= TIME_RIGHT_CORNER_VALUE ? 3 : 2;
    const utm = window.location.search.replace(/^\?/, '');
    const amount = loanSumText.value;
    const totalDays = loanTimeText.value;
    const period = loanTimeText.value;
    window.location.href = `my.dozarplati.com/take-loan?c_period=${period}&c_amount=${amount}&c_days=${totalDays}&c_tariff=${tariffId}&${utm}`;
};
