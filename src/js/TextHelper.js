/**
 * Предоставляет методы для работы с текстом.
 */
export default class TextHelper {
  /**
   * Возвращает слово, относящееся к числу, в нужной грамматической форме.
   * @param {Number} number Число.
   * @param {String} one Форма слова для одной штуки.
   * @param {String} two Форма слова для двух штук.
   * @param {String} many Форма слова для множества штук.
   */
  static getPlural(number, one, two, many) {
    if (number >= 11 && number <= 20) {
      return many;
    }

    const digit = number % 10;

    if (digit === 1) {
      return one;
    }

    if (digit >= 2 && digit <= 4) {
      return two;
    }

    return many;
  }

  /**
   * Дополняет строковое представление указанного числа ведущими нулями до тех
   * пор, пока длина итоговой строки не станет равна переданному значению.
   * @param {Number} number Число.
   * @param {Number} length Нужная длина строки.
   */
  static prependByZero(number, length = 2) {
    let result = String(number);

    while (result.length < length) {
      result = `0${result}`;
    }

    return result;
  }

  /**
   * Возвращает строковое представление даты.
   * @param {Date} date Дата.
   */
  static stringifyDate(date) {
    const year = this.prependByZero(date.getFullYear());
    const month = this.prependByZero(date.getMonth() + 1);
    const day = this.prependByZero(date.getDate());
    return `${day}.${month}.${year}`;
  }
}
