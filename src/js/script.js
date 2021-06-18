import EventObserver from "./observer";
import { numberWithSpaces, sumRound, timeRound, formattedPeriod } from "./helper";
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

const inputContainers = document.querySelectorAll('.input-container');

// Моки для текстовых инпутов
const loanSumMock = document.getElementById('loanSumMock');
const loanTimeMock = document.getElementById('loanTimeMock');

// Инпуты суммы займа
const loanSumRangeDays = document.getElementById('loanSumRange');
const loanSumRangeMonths = document.getElementById('loanSumRangeMonths');
const loanSumText = document.getElementById('loanSumValue');

// Инпуты времени займа
const loanTimeRangeDays = document.getElementById('loanTimeRange');
const loanTimeRangeMonths = document.getElementById('loanTimeRangeMonths');
const loanTimeText = document.getElementById('loanTimeValue');

// Кнопка получения суммы
const confirmButton = document.getElementById('getLoanButton');

const loanTimeLabel = document.getElementById('loanTimeLabel');

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
loanSumRangeDays.style.opacity = '1';
loanSumRangeMonths.style.opacity = '0';
loanTimeRangeDays.style.opacity = '1';
loanTimeRangeMonths.style.opacity = '0';
loanSumMock.innerText = `${formattedMinLoanAmount} ₽`;
const today = new Date();


const isMonthRangeActive = () => loanSumRangeDays.style.opacity === '0';
const isDaysRangeActive = () => loanSumRangeMonths.style.opacity === '0';

loanTimeMock.innerText = `${MIN_LOAN_TIME} ${formattedPeriod(MIN_LOAN_TIME, true)}`;

// Логика скрытия мока и отображения инпута
loanSumMock.onclick = () => {
    const inputLength = loanSumText.value.length;
    loanSumMock.style.display = 'none';
    loanSumText.focus();
    loanSumText.setSelectionRange(inputLength, inputLength);
};
loanTimeMock.onclick = () => {
    const inputLength = loanTimeText.value.length;
    loanTimeMock.style.display = 'none';
    loanTimeText.focus();
    loanTimeText.setSelectionRange(inputLength, inputLength);
}

// Запись значений инпутов (для корректной смены рендж-инпутов)
loanSumText.onfocus = () => {
    loanSumMock.style.display = 'none';
};

loanSumText.onblur = () => {
    loanSumMock.style.display = 'block';
}

loanTimeText.onfocus = () => {
    loanTimeMock.style.display = 'none';
}

loanTimeText.onblur = () => {
    loanTimeMock.style.display = 'block';
}


// Изменение текста кнопки
const setButtonText = (value) => {
    confirmButton.innerText = `ПОЛУЧИТЬ ${numberWithSpaces(value)} ₽`;
};

// Изменение текста мока суммы
const setSumText = (value) => {
    loanSumMock.innerText = `${numberWithSpaces(value)} ₽`;
    loanSumText.value = value;
    setButtonText(value);
};

// Изменение текста мока времени
const setTimeText = (value) => {
    loanTimeMock.innerText = `${value} ${formattedPeriod(value, Number(isDaysRangeActive()))}`;
    loanTimeText.value = value;
    if(isDaysRangeActive()) {
        loanTimeLabel.innerText = 'Срок займа';
        loanTimeLabel.style.width = '80px';
    } else {
        loanTimeLabel.innerText = 'Срок займа в месяцах'
        loanTimeLabel.style.width = '160px';
    }
}

const setLeftInputsActive = () => {
    loanSumRangeDays.style.opacity = '1';
    loanSumRangeMonths.style.opacity = '0';
    loanTimeRangeDays.style.opacity = '1';
    loanTimeRangeMonths.style.opacity = '0';
    inputContainers.forEach(container => {
        container.style.borderBottom = '1px solid #D6D6D6';
    })
}

const setRightInputsActive = () => {
    loanSumRangeDays.style.opacity = '0';
    loanSumRangeMonths.style.opacity = '1';
    loanTimeRangeDays.style.opacity = '0';
    loanTimeRangeMonths.style.opacity = '1';
    inputContainers.forEach(container => {
        container.style.borderBottom = '2px solid #ffc800';
    })
}

const setLeftInputValues = (value) => {
    loanSumRangeDays.value = value;
    loanSumRangeMonths.value = 21000;
    loanTimeRangeDays.value = 30;
    loanTimeRangeMonths.value = 2;
    console.log('triggered lEFT');
}

const setRightInputValues = (value) => {
    loanSumRangeMonths.value = value;
    loanSumRangeDays.value = 2000;
    loanTimeRangeDays.value = 30;
    loanTimeRangeMonths.value = 2;
    console.log('triggered RIGHT');
}

const setDaysRanges = (value) => {
    loanSumRangeDays.focus();
    loanSumRangeMonths.blur();
    setLeftInputsActive();
    setLeftInputValues(value);
    setSumText(loanSumRangeDays.value);
    setTimeText(30);
}

const setMonthsRanges = (value) => {
    loanSumRangeDays.blur();
    loanSumRangeMonths.focus();
    setRightInputsActive();
    setRightInputValues(value);
    setSumText(loanSumRangeMonths.value);
    setTimeText(2);
}

// Переключение табов
const setFirstTabActive = (value) => {
    firstTab.classList.add('little-loan');
    secondTab.classList.remove('large-loan');
    confirmButton.classList.remove('large-loan');
    setDaysRanges(value);
};
const setSecondTabActive = (value) => {
    firstTab.classList.remove('little-loan');
    secondTab.classList.add('large-loan');
    confirmButton.classList.add('large-loan');
    setMonthsRanges(value);
};


// Прослушка действий с первым табом
firstTabObserver.subscribe(() => {
    setFirstTabActive(20000);
});
firstTab.onclick = (event) => {
    event.stopPropagation();
    firstTabObserver.broadcast();
};

// Прослушка действий с вторым табом
secondTabObserver.subscribe(() => {
    setSecondTabActive(21000);
});
secondTab.onclick = (event) => {
    event.stopPropagation();
    secondTabObserver.broadcast();
};

// Подписка на изменения суммы
loanSumObserver.subscribe(value => {
    setSumText(value);
});

const validateLoanSum = (currentValue) => {
    if(currentValue < 2000 || isNaN(currentValue)) {
        currentValue = 2000;
    } else if(currentValue > 100000) {
        currentValue = 100000;
    } else {
        if(currentValue % 1000 !== 0) {
            currentValue = sumRound(currentValue);
        }
    }
    return currentValue;
};



loanSumText.onchange = (event) => {
    const currentValue = event.target.value;
    const validatedSum = validateLoanSum(currentValue);
    if(currentValue > 20000) {
        setSecondTabActive(validatedSum);
    } else {
        setFirstTabActive(validatedSum);
    }
}

loanSumRangeDays.oninput = (event) => {
    const currentValue = event.target.value;
    if(isMonthRangeActive()) {
        setFirstTabActive(currentValue);
    }
    if(currentValue > 20000) {
        console.log('WORKED')
        setSecondTabActive(currentValue);
        console.log(document.activeElement);
    }
    loanSumObserver.broadcast(currentValue);
}

loanSumRangeMonths.oninput = (event) => {
    const currentValue = event.target.value;
    if(isDaysRangeActive()) {
        setSecondTabActive(currentValue);
    }
    if(currentValue <= 20000) {
        setFirstTabActive(currentValue);
        loanSumRangeDays.focus();
    }
    loanSumObserver.broadcast(currentValue);
}


// Подписка на время займа
loanTimeObserver.subscribe(value => {
    setTimeText(value);
});

loanTimeRangeDays.oninput = (event) => {
    const currentValue = event.target.value;
    if(isMonthRangeActive()) {
        setFirstTabActive(20000);
    }
    if(currentValue >= 31) {
        setSecondTabActive(21000);
    }

    loanTimeObserver.broadcast(currentValue);
}

loanTimeRangeMonths.oninput = (event) => {
    const currentValue = event.target.value;
    if(isDaysRangeActive()) {
        setSecondTabActive(21000);
    }
    if(currentValue <= 1 && isMonthRangeActive()) {
        setFirstTabActive(20000);
    }
    loanTimeObserver.broadcast(currentValue);
}


const validateLoanTime = (currentValue) => {
    if(isDaysRangeActive()) {
        if(currentValue < 7 || isNaN(currentValue)) {
            currentValue = 7;
        } else if(currentValue > 30) {
            setSecondTabActive(21000);
            currentValue = 2;
        }
    }
    if(isMonthRangeActive()) {
        if(currentValue < 2) {
            setFirstTabActive(20000);
            currentValue = 30;
        } else if(currentValue > 12 || isNaN(currentValue)) {
            currentValue = 12;
        }
    }
    return timeRound(currentValue);
}

loanTimeText.onchange = (event) => {
    const currentValue = event.target.value;
    const validatedTime = validateLoanTime(currentValue);
    loanTimeObserver.broadcast(validatedTime);
}

// confirmButton.onclick = () => {
//     const tariffId = loanTimeText.value >= TIME_RIGHT_CORNER_VALUE ? 3 : 2;
//     const utm = window.location.search.replace(/^\?/, '');
//     const amount = loanSumText.value;
//     const totalDays = loanTimeText.value;
//     const period = loanTimeText.value;
//     window.location.href = `my.dozarplati.com/take-loan?c_period=${period}&c_amount=${amount}&c_days=${totalDays}&c_tariff=${tariffId}&${utm}`;
// };
confirmButton.onclick = () => {
    console.log(loanTimeText.value, loanSumText.value);
}
