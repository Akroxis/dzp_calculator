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
}
