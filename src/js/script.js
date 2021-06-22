import EventObserver from "./observer";
import {numberWithSpaces, sumRound, timeRound, formattedPeriod, getFormattedDate} from "./helper";
import {
    MIN_LOAN_AMOUNT,
    MAX_LOAN_AMOUNT,
    MIN_LOAN_DAYS_TIME,
    MAX_LOAN_DAYS_TIME,
    MIN_LOAN_MONTHS_TIME,
    MAX_LOAN_MONTHS_TIME,
    MAX_LOAN_AMOUNT_BY_DAYS,
    MIN_LOAN_AMOUNT_BY_MONTHS
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

const datePicker = document.getElementById('datePicker');

const today = new Date();
const firstPeriod = new Date(today.setDate(today.getDate() + 7));
const minDatePickerValue = firstPeriod;
const lastPeriod = new Date(today.setDate(today.getDate() + 30));
const maxDatePickerValue = lastPeriod;
datePicker.setAttribute('min', getFormattedDate(minDatePickerValue));
console.log(getFormattedDate(maxDatePickerValue));
datePicker.setAttribute('max', getFormattedDate(maxDatePickerValue));

datePicker.setAttribute('value', getFormattedDate(today))

datePicker.onchange = (event) => {
    console.log(new Date(event.target.value), today);
}


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


const isMonthRangeActive = () => loanSumRangeDays.style.opacity === '0';
const isDaysRangeActive = () => loanSumRangeMonths.style.opacity === '0';

loanTimeMock.innerText = `${MIN_LOAN_DAYS_TIME} ${formattedPeriod(MIN_LOAN_DAYS_TIME, true)}`;

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
        const dd = new Date();
        const dateForSelect = new Date(dd.setDate(dd.getDate() + Number(loanTimeText.value)));
        datePicker.setAttribute('value', getFormattedDate(dateForSelect));
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
    loanSumRangeMonths.value = MIN_LOAN_AMOUNT_BY_MONTHS;
    loanTimeRangeDays.value = MAX_LOAN_DAYS_TIME;
    loanTimeRangeMonths.value = MIN_LOAN_MONTHS_TIME;
}

const setRightInputValues = (value) => {
    loanSumRangeMonths.value = value;
    loanSumRangeDays.value = MIN_LOAN_AMOUNT;
    loanTimeRangeDays.value = MAX_LOAN_DAYS_TIME;
    loanTimeRangeMonths.value = MIN_LOAN_MONTHS_TIME;
}

const setDaysRanges = (value) => {
    loanSumRangeDays.focus();
    loanSumRangeMonths.blur();
    setLeftInputsActive();
    setLeftInputValues(value);
    setSumText(loanSumRangeDays.value);
    setTimeText(MAX_LOAN_DAYS_TIME);
}

const setMonthsRanges = (value) => {
    loanSumRangeDays.blur();
    loanSumRangeMonths.focus();
    setRightInputsActive();
    setRightInputValues(value);
    setSumText(loanSumRangeMonths.value);
    setTimeText(MIN_LOAN_MONTHS_TIME);
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
    setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS );
});
firstTab.onclick = (event) => {
    event.stopPropagation();
    firstTabObserver.broadcast();
};

// Прослушка действий с вторым табом
secondTabObserver.subscribe(() => {
    setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS);
});
secondTab.onclick = (event) => {
    event.stopPropagation();
    secondTabObserver.broadcast();
};

// Подписка на изменения суммы
loanSumObserver.subscribe(value => {
    setSumText(value);
});

// Валидация вводимой суммы
const validateLoanSum = (currentValue) => {
    if(currentValue < MIN_LOAN_AMOUNT || isNaN(currentValue)) {
        currentValue = MIN_LOAN_AMOUNT;
    } else if(currentValue > MAX_LOAN_AMOUNT) {
        currentValue = MAX_LOAN_AMOUNT;
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
    if(currentValue > MAX_LOAN_AMOUNT_BY_DAYS ) {
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
    if(currentValue > MAX_LOAN_AMOUNT_BY_DAYS ) {
        setSecondTabActive(currentValue);
    }
    loanSumObserver.broadcast(currentValue);
}

loanSumRangeMonths.oninput = (event) => {
    const currentValue = event.target.value;
    if(isDaysRangeActive()) {
        setSecondTabActive(currentValue);
    }
    if(currentValue <= MAX_LOAN_AMOUNT_BY_DAYS ) {
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
        setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS );
    }
    if(currentValue > MAX_LOAN_DAYS_TIME) {
        setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS);
    }

    loanTimeObserver.broadcast(currentValue);
}

loanTimeRangeMonths.oninput = (event) => {
    const currentValue = event.target.value;
    if(isDaysRangeActive()) {
        setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS);
    }
    if(currentValue <= 1 && isMonthRangeActive()) {
        setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS );
    }
    loanTimeObserver.broadcast(currentValue);
}

// Валидация вводимого времени
const validateLoanTime = (currentValue) => {
    if(isDaysRangeActive()) {
        if(currentValue < MIN_LOAN_DAYS_TIME || isNaN(currentValue)) {
            currentValue = MIN_LOAN_DAYS_TIME;
        } else if(currentValue > MAX_LOAN_DAYS_TIME) {
            setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS);
            currentValue = MIN_LOAN_MONTHS_TIME;
        }
    }
    if(isMonthRangeActive()) {
        if(currentValue < MIN_LOAN_MONTHS_TIME) {
            setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS );
            currentValue = MAX_LOAN_DAYS_TIME;
        } else if(currentValue > MAX_LOAN_MONTHS_TIME || isNaN(currentValue)) {
            currentValue = MAX_LOAN_MONTHS_TIME;
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
//     const tariffId = loanTimeText.value >= TIME_RIGHT_CORNER_VALUE ? 3 : MIN_LOAN_MONTHS_TIME;
//     const utm = window.location.search.replace(/^\?/, '');
//     const amount = loanSumText.value;
//     const totalDays = loanTimeText.value;
//     const period = loanTimeText.value;
//     window.location.href = `my.dozarplati.com/take-loan?c_period=${period}&c_amount=${amount}&c_days=${totalDays}&c_tariff=${tariffId}&${utm}`;
// };
confirmButton.onclick = () => {
    console.log(loanTimeText.value, loanSumText.value);
}
