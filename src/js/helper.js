import { MAX_LOAN_DAYS_TIME, MIN_LOAN_DAYS_TIME } from './constants'

export const numberWithSpaces = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const sumRound = (value) => Math.round(value / 1000) * 1000

export const timeRound = (value) => Math.round(value)

export const getCorrectDeclension = (value, words) => {
  value = Math.abs(value) % 100
  const num = value % 10
  if (value > 10 && value < 20) return words[2]
  if (num > 1 && num < 5) return words[1]
  if (num === 1) return words[0]
  return words[2]
}

const daysWithDeclension = ['день', 'дня', 'дней']
const monthsWithDeclension = ['месяц', 'месяца', 'месяцев']

export const formattedPeriod = (value, isDaysPeriod) => {
  if (isDaysPeriod) {
    return getCorrectDeclension(value, daysWithDeclension)
  }
  return getCorrectDeclension(value, monthsWithDeclension)
}

export const getFormattedDate = (today) => {
  today = today || addDays(7)
  let day = today.getDate()
  let month = today.getMonth() + 1
  const year = today.getFullYear()
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  return `${day}.${month}.${year}`
}

export const addDays = (days) => {
  const date = new Date()
  const increasedDate = date.getDate() + Number(days)
  const resultDate = date.setDate(increasedDate)
  return new Date(resultDate)
}

export const addMonths = (months) => {
  const date = new Date()
  const increasedMonth = date.getMonth() + Number(months) + 1
  const resultDate = date.setMonth(increasedMonth)
  return new Date(resultDate)
}

export const subtractDates = (newDate) => {
  const today = new Date()
  const difference = Math.abs(newDate - today)
  return Math.ceil(difference / (1000 * 3600 * 24))
}

export const getFirstPickerDay = () => {
  const today = new Date()
  const resultDate = today.setDate(today.getDate() + MIN_LOAN_DAYS_TIME)
  return new Date(resultDate)
}

export const getLastPickerDay = () => {
  const today = new Date()
  const resultDate = today.setDate(today.getDate() + MAX_LOAN_DAYS_TIME)
  return new Date(resultDate)
}
