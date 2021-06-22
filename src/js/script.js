import EventObserver from './observer'
import datepicker from 'js-datepicker/src/datepicker'
import {
  numberWithSpaces,
  sumRound,
  timeRound,
  formattedPeriod,
  getFormattedDate,
  addDays,
  addMonths,
  subtractDates, getFirstPickerDay, getLastPickerDay
} from './helper'
import {
  MIN_LOAN_AMOUNT,
  MAX_LOAN_AMOUNT,
  MIN_LOAN_DAYS_TIME,
  MAX_LOAN_DAYS_TIME,
  MIN_LOAN_MONTHS_TIME,
  MAX_LOAN_MONTHS_TIME,
  MAX_LOAN_AMOUNT_BY_DAYS,
  MIN_LOAN_AMOUNT_BY_MONTHS,
  LOAN_TIME_DAYS_LABEL_TEXT,
  LOAN_TIME_MONTHS_LABEL_TEXT,
  LOAN_TIME_DAYS_LABEL_WIDTH,
  LOAN_TIME_MONTHS_LABEL_WIDTH,
  LITTLE_LOAN_CLASS_NAME,
  LARGE_LOAN_CLASS_NAME
} from './constants'

const inputContainers = document.querySelectorAll('.calculator-input')

// Моки для текстовых инпутов
const loanSumMock = document.getElementById('loanSumMock')
const loanTimeMock = document.getElementById('loanTimeMock')

// Инпуты суммы займа
const loanSumRangeDays = document.getElementById('loanSumRange')
const loanSumRangeMonths = document.getElementById('loanSumRangeMonths')
const loanSumText = document.getElementById('loanSumValue')

// Инпуты времени займа
const loanTimeRangeDays = document.getElementById('loanTimeRange')
const loanTimeRangeMonths = document.getElementById('loanTimeRangeMonths')
const loanTimeText = document.getElementById('loanTimeValue')

const dateSpan = document.getElementById('date-value')

const setDateSpanText = (value) => dateSpan.innerText = value
// Изменение текста кнопки
const setButtonText = (value) => {
  confirmButton.innerText = `ПОЛУЧИТЬ ${numberWithSpaces(value)} ₽`
}
const datePickerNode = document.getElementById('datePicker-input')
const hideDatePickerIcon = () => datePickerNode.style.display = 'none'
const showDatePickerIcon = () => datePickerNode.style.display = 'block'

// Кнопка получения суммы
const confirmButton = document.getElementById('getLoanButton')

const loanTimeLabel = document.getElementById('loanTimeLabel')

// Табы
const firstTab = document.getElementById('firstTab')
const secondTab = document.getElementById('secondTab')

// Обсерверы
const firstTabObserver = new EventObserver()
const secondTabObserver = new EventObserver()
const loanSumObserver = new EventObserver()
const loanTimeObserver = new EventObserver()

const isMonthRangeActive = () => loanSumRangeDays.style.opacity === '0'
const isDaysRangeActive = () => loanSumRangeMonths.style.opacity === '0'

loanTimeMock.innerText = `${MIN_LOAN_DAYS_TIME} ${formattedPeriod(MIN_LOAN_DAYS_TIME, true)}`

// Логика скрытия мока и отображения инпута
loanSumMock.onclick = () => {
  const inputLength = loanSumText.value.length
  loanSumMock.style.display = 'none'
  loanSumText.focus()
  loanSumText.setSelectionRange(inputLength, inputLength)
}
loanTimeMock.onclick = () => {
  const inputLength = loanTimeText.value.length
  loanTimeMock.style.display = 'none'
  loanTimeText.focus()
  loanTimeText.setSelectionRange(inputLength, inputLength)
}

// Отображение моков в текстовых инпутах
loanSumText.onfocus = () => {
  loanSumMock.style.display = 'none'
}
loanSumText.onblur = () => {
  loanSumMock.style.display = 'block'
}
loanTimeText.onfocus = () => {
  loanTimeMock.style.display = 'none'
}
loanTimeText.onblur = () => {
  loanTimeMock.style.display = 'block'
}

// Изменение текста мока суммы
const setSumText = (value) => {
  loanSumMock.innerText = `${numberWithSpaces(value)} ₽`
  loanSumText.value = value
  setButtonText(value)
}

// Изменение текста мока времени
const setTimeText = (value) => {
  loanTimeMock.innerText = `${value} ${formattedPeriod(value, Number(isDaysRangeActive()))}`
  loanTimeText.value = value
  let dateForSelect
  if (isDaysRangeActive()) {
    dateForSelect = addDays(loanTimeText.value)
    loanTimeLabel.innerText = LOAN_TIME_DAYS_LABEL_TEXT
    loanTimeLabel.style.width = LOAN_TIME_DAYS_LABEL_WIDTH
    picker.setDate(dateForSelect)
  } else {
    dateForSelect = addMonths(loanTimeText.value)
    loanTimeLabel.innerText = LOAN_TIME_MONTHS_LABEL_TEXT
    loanTimeLabel.style.width = LOAN_TIME_MONTHS_LABEL_WIDTH
  }
  setDateSpanText(getFormattedDate(dateForSelect))
}

// Смена инпутов под текущий активныый таб
const setLeftInputsActive = () => {
  loanSumRangeDays.style.opacity = '1'
  loanSumRangeMonths.style.opacity = '0'
  loanTimeRangeDays.style.opacity = '1'
  loanTimeRangeMonths.style.opacity = '0'
  inputContainers.forEach(container => {
    container.style.borderBottom = '1px solid #D6D6D6'
  })
}

const setRightInputsActive = () => {
  loanSumRangeDays.style.opacity = '0'
  loanSumRangeMonths.style.opacity = '1'
  loanTimeRangeDays.style.opacity = '0'
  loanTimeRangeMonths.style.opacity = '1'
  inputContainers.forEach(container => {
    container.style.borderBottom = '2px solid #ffc800'
  })
}

// Установка пороговых значений инпутов при смене табов
const setLeftInputValues = (value) => {
  loanSumRangeDays.value = value
  loanSumRangeMonths.value = MIN_LOAN_AMOUNT_BY_MONTHS
  loanTimeRangeDays.value = MAX_LOAN_DAYS_TIME
  loanTimeRangeMonths.value = MIN_LOAN_MONTHS_TIME
}
const setRightInputValues = (value) => {
  loanSumRangeMonths.value = value
  loanSumRangeDays.value = MIN_LOAN_AMOUNT
  loanTimeRangeDays.value = MAX_LOAN_DAYS_TIME
  loanTimeRangeMonths.value = MIN_LOAN_MONTHS_TIME
}

// Установка периода, исчисляемого в днях
const setDaysRanges = (value) => {
  setLeftInputsActive()
  setLeftInputValues(value)
  setSumText(loanSumRangeDays.value)
  setTimeText(MAX_LOAN_DAYS_TIME)
  showDatePickerIcon()
}

// Установка периода, исчисляемого в месяцах
const setMonthsRanges = (value) => {
  setRightInputsActive()
  setRightInputValues(value)
  setSumText(loanSumRangeMonths.value)
  setTimeText(MIN_LOAN_MONTHS_TIME)
  hideDatePickerIcon()
}

// Переключение табов
const setFirstTabActive = (value) => {
  firstTab.classList.add(LITTLE_LOAN_CLASS_NAME)
  secondTab.classList.remove(LARGE_LOAN_CLASS_NAME)
  confirmButton.classList.remove(LARGE_LOAN_CLASS_NAME)
  setDaysRanges(value)
}
const setSecondTabActive = (value) => {
  firstTab.classList.remove(LITTLE_LOAN_CLASS_NAME)
  secondTab.classList.add(LARGE_LOAN_CLASS_NAME)
  confirmButton.classList.add(LARGE_LOAN_CLASS_NAME)
  setMonthsRanges(value)
}

// Прослушка действий с первым табом
firstTabObserver.subscribe(() => {
  setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS)
})
firstTab.onclick = (event) => {
  event.stopPropagation()
  firstTabObserver.broadcast()
}

// Прослушка действий с вторым табом
secondTabObserver.subscribe(() => {
  setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS)
})
secondTab.onclick = (event) => {
  event.stopPropagation()
  secondTabObserver.broadcast()
}

// Подписка на изменения суммы
loanSumObserver.subscribe(value => {
  setSumText(value)
})

// Валидация вводимой суммы
const validateLoanSum = (currentValue) => {
  if (currentValue < MIN_LOAN_AMOUNT || isNaN(currentValue)) {
    currentValue = MIN_LOAN_AMOUNT
  } else if (currentValue > MAX_LOAN_AMOUNT) {
    currentValue = MAX_LOAN_AMOUNT
  } else {
    if (currentValue % 1000 !== 0) {
      currentValue = sumRound(currentValue)
    }
  }
  return currentValue
}

loanSumText.onchange = (event) => {
  const currentValue = event.target.value
  const validatedSum = validateLoanSum(currentValue)
  if (currentValue > MAX_LOAN_AMOUNT_BY_DAYS) {
    setSecondTabActive(validatedSum)
  } else {
    setFirstTabActive(validatedSum)
  }
}

loanSumRangeDays.oninput = (event) => {
  const currentValue = event.target.value
  if (currentValue > MAX_LOAN_AMOUNT_BY_DAYS) {
    setSecondTabActive(currentValue)
  } else {
    setFirstTabActive(currentValue)
  }
  loanSumObserver.broadcast(currentValue)
}

loanSumRangeMonths.oninput = (event) => {
  const currentValue = event.target.value
  if (isDaysRangeActive()) {
    setSecondTabActive(currentValue)
  }
  if (currentValue <= MAX_LOAN_AMOUNT_BY_DAYS) {
    setFirstTabActive(currentValue)
    loanSumRangeDays.focus()
  }
  loanSumObserver.broadcast(currentValue)
}

// Подписка на время займа
loanTimeObserver.subscribe(value => {
  setTimeText(value)
})

loanTimeRangeDays.oninput = (event) => {
  const currentValue = event.target.value
  if (isMonthRangeActive()) {
    setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS)
  }
  if (currentValue > MAX_LOAN_DAYS_TIME) {
    setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS)
  }

  loanTimeObserver.broadcast(currentValue)
}

loanTimeRangeMonths.oninput = (event) => {
  const currentValue = event.target.value
  if (isDaysRangeActive()) {
    setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS)
  }
  if (currentValue <= 1 && isMonthRangeActive()) {
    setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS)
  }
  loanTimeObserver.broadcast(currentValue)
}

// Валидация вводимого времени
const validateLoanTime = (currentValue) => {
  if (isDaysRangeActive()) {
    if (currentValue < MIN_LOAN_DAYS_TIME || isNaN(currentValue)) {
      currentValue = MIN_LOAN_DAYS_TIME
    } else if (currentValue > MAX_LOAN_DAYS_TIME) {
      setSecondTabActive(MIN_LOAN_AMOUNT_BY_MONTHS)
      currentValue = MIN_LOAN_MONTHS_TIME
    }
  }
  if (isMonthRangeActive()) {
    if (currentValue < MIN_LOAN_MONTHS_TIME) {
      setFirstTabActive(MAX_LOAN_AMOUNT_BY_DAYS)
      currentValue = MAX_LOAN_DAYS_TIME
    } else if (currentValue > MAX_LOAN_MONTHS_TIME || isNaN(currentValue)) {
      currentValue = MAX_LOAN_MONTHS_TIME
    }
  }
  return timeRound(currentValue)
}

loanTimeText.onchange = (event) => {
  const currentValue = event.target.value
  const validatedTime = validateLoanTime(currentValue)
  loanTimeObserver.broadcast(validatedTime)
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
  console.log(loanTimeText.value, loanSumText.value)
}

const picker = datepicker(datePickerNode, {
  customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  customMonths: ['Январь,', 'Февраль,', 'Март,', 'Апрель,', 'Май,', 'Июнь,', 'Июль,', 'Август,', 'Сентябрь,', 'Октябрь,', 'Ноябрь,', 'Декабрь,'],
  startDay: 1,
  disableYearOverlay: true,
  showAllDates: true,
  onSelect: (instance, date) => {
    setTimeText(subtractDates(date))
  },
  onShow: (instance) => {
    picker.navigate(instance.dateSelected)
  },
  minDate: getFirstPickerDay(),
  maxDate: getLastPickerDay(),
  dateSelected: getFirstPickerDay()
})

// INIT-значения
const formattedMinLoanAmount = numberWithSpaces(MIN_LOAN_AMOUNT)
setButtonText(formattedMinLoanAmount)
firstTab.classList.add(LITTLE_LOAN_CLASS_NAME)
setLeftInputsActive()
setSumText(formattedMinLoanAmount)
setDateSpanText(getFormattedDate(getFirstPickerDay()))
