import Type from './Type';

/**
 * Предоставляет методы для работы со ссылкой на внешние источники.
 */
export default class HrefHelper {
  /**
   * Базовый адрес страницы получения займа.
   */
  static BASE_URL = 'https://my.dozarplati.com/take-loan';

  /**
   * Преобразует сумму займа в формат ссылки на получение займа. По сути,
   * переводит сумму из рублей в копейки и переводит в строку.
   * @param {Number} amount Срок займа.
   * @returns {String}
   */
  static mapAmount(amount) {
    return String(amount * 100);
  }

  /**
   * Преобразует срок займа в формат ссылки на получение займа. Под капотом
   * определяет, к какому типу принадлежит срок. Если PDL - тупо приводит
   * число к строке. Если INSTALLMENT - делит его на 30 (мы считаем, что в
   * месяце 30 дней) и тоже приводит к строке.
   * @param {Number} period Срок займа.
   */
  static mapPeriod(period) {
    return period <= 30 ? String(period) : String(Math.round(period / 30));
  }

  /**
   * Получает из указанного срока займа количество дней в формате ссылки
   * на получение займа. Под капотом определяет тип займа. Для PDL -
   * просто переводит аругмент в строку. Для INSTALLMENT - умножает
   * срок на 31 (принимающая сторона считает, что в месяце 31 день) и переводит
   * в строку.
   * @param {Number} period Срок займа.
   */
  static mapDays(period) {
    return period <= 30 ? String(period) : String(period * 31);
  }

  /**
   * Возвращает идентификатор тарифа в формате ссылки на получение займа. Для
   * PDL-займа это "2". Для INSTALLMENT - "3". Не спрашивайте, что это за тариф,
   * и откуда эти цифры - просто примите как данность.
   * @param {Type} type Тип займа.
   */
  static mapTariff(type) {
    return type === Type.INSTALLMENT ? '3' : '2';
  }

  /**
   * Возвращает коллекцию utm-меток (параметров запроса к текущей странице) в
   * формате ссылки на получение займа.
   */
  static getUtm() {
    return location.search.replace(/^\?/, '');
  }

  /**
   * Объединяет указанные параметры ссылки на получение займа в одну строку.
   * @param  {...any} units Список параметров запроса.
   * @returns {String}
   */
  static concatSearch(...units) {
    return units.filter(Boolean).join('&');
  }

  /**
   * Возвращает ссылку на получение займа с указанными параметрами.
   * @param {Type} type Тип займа.
   * @param {Number} amount Сумма займа.
   * @param {Number} period Срок займа.
   */
  static get(type, amount, period) {
    const searchAmount = this.mapAmount(amount);
    const searchPeriod = this.mapPeriod(period);
    const searchTariff = this.mapTariff(type);
    const searchDays = this.mapDays(period);
    const searchUtm = this.getUtm();

    const search = this.concatSearch(
      `c_amount=${searchAmount}`,
      `c_period=${searchPeriod}`,
      `c_tariff=${searchTariff}`,
      `c_days=${searchDays}`,
      searchUtm
    );

    return `${this.BASE_URL}?${search}`;
  }
}
