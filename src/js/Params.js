import Type from './Type';
import ParamsHelper from './ParamsHelper';

/**
 * Параметры, выбранные на калькуляторе в данный момент.
 */
export default class Params {
  /**
   * Выбранный в данный момент тип займа.
   */
  type = Type.PDL;

  /**
   * Выбранная в данный момент сумма займа (в рублях).
   */
  amount = ParamsHelper.getDefaultAmount(Type.PDL);

  /**
   * Выбранный в данный момент срок займа (в днях или месяцах, зависит от типа
   * займа).
   */
  period = ParamsHelper.getDefaultPeriod(Type.PDL);

  /**
   * Коллекция обработчиков, которые вызываются при изменении параметров займа.
   */
  handlers = [];

  /**
   * Создаёт экземпляр класса.
   * @param {Type} defaultType Тип займа по умолчанию.
   */
  constructor(defaultType = ParamsHelper.DEFAULT_TYPE) {
    this.type = defaultType;
    this.amount = ParamsHelper.getDefaultAmount(this.type);
    this.period = ParamsHelper.getDefaultPeriod(this.type);
  }

  /**
   * Добавляет обработчик изменения параметров займа.
   * @param {Function} handler Обработчик.
   */
  onChange(handler) {
    this.handlers.push(handler);
  }

  /**
   * Вызывает обработчики изменения параметров займа.
   */
  dispatch() {
    const { length } = this.handlers;

    const params = {
      amount: this.amount,
      period: this.period,
      type: this.type,
    };

    for (let i = 0; i < length; i += 1) {
      const handler = this.handlers[i];
      handler(params);
    }
  }

  /**
   * Задаёт коллекцию параметров займа.
   * @param {Type} nextType Новый тип займа.
   * @param {Number} nextAmount Новая сумма займа.
   * @param {Number} nextPeriod Новый срок займа.
   */
  setParams(nextType, nextAmount, nextPeriod) {
    const finalAmount = ParamsHelper.getAmountInRange(nextType, nextAmount);
    const finalPeriod = ParamsHelper.getPeriodInRange(nextType, nextPeriod);

    this.amount = finalAmount;
    this.period = finalPeriod;
    this.type = nextType;

    this.dispatch();
  }

  /**
   * Задаёт новый тип займа.
   * @param {Type} nextType Новый тип займа.
   */
  setType(nextType) {
    const nextAmount = ParamsHelper.getDefaultAmount(nextType);
    const nextPeriod = ParamsHelper.getDefaultPeriod(nextType);
    this.setParams(nextType, nextAmount, nextPeriod);
  }

  /**
   * Задаёт новую сумму займа.
   * @param {Number} nextAmount Новая сумма займа.
   */
  setAmount(nextAmount) {
    const nextType = ParamsHelper.getNextTypeByAmount(this.type, nextAmount);
    this.setParams(nextType, nextAmount, this.period);
  }

  /**
   * Задаёт новый срок займа.
   * @param {Number} nextPeriod Новый срок займа.
   */
  setPeriod(nextPeriod) {
    const nextType = ParamsHelper.getNextTypeByPeriod(this.type, nextPeriod);
    this.setParams(nextType, this.amount, nextPeriod);
  }
}
