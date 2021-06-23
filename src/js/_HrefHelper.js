import Type from './_Type';

/**
 * Предоставляет методы для работы со ссылкой на внешние источники.
 */
export default class HrefHelper {
  /**
   * Базовый адрес страницы получения займа.
   */
  static BASE_URL = 'https://my.dozarplati.com/take-loan';

  /**
   * Возвращает ссылку на получение займа с указанными параметрами.
   * @param {Type} type Тип займа.
   * @param {Number} amount Сумма займа.
   * @param {Number} period Срок займа.
   */
  static get(type, amount, period) {
    const days = String(period);
    const time = type === Type.INSTALLMENT ? Math.round(period / 30) : period;
    const tariff = type === Type.INSTALLMENT ? 3 : 2;
    const utm = location.search.replace(/^\?/, '');

    const search = [
      `c_amount=${amount}`,
      `c_period=${time}`,
      `c_days=${days}`,
      `c_tariff=${tariff}`,
      utm,
    ]
      .filter(Boolean)
      .join('&');

    return `${this.BASE_URL}?${search}`;
  }
}
