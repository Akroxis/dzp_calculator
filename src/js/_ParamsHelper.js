import TextHelper from './_TextHelper';
import Type from './_Type';

/**
 * Содержит набор методов для работы с калькулятором займа.
 */
export default class ParamsHelper {
  /**
   * Тип займа по умолчанию.
   */
  static DEFAULT_TYPE = Type.PDL;

  /**
   * Сумма INSTALLMENT-займа по умолчанию.
   */
  static DEFAULT_INSTALLMENT_AMOUNT = 40000;

  /**
   * Срок INSTALLMENT-займа по умолчанию.
   */
  static DEFAULT_INSTALLMENT_PERIOD = 2 * 30;

  /**
   * Сумма PDL-займа по умолчанию.
   */
  static DEFAULT_PDL_AMOUNT = 8000;

  /**
   * Срок PDL-займа по умолчанию.
   */
  static DEFAULT_PDL_PERIOD = 7;

  /**
   * Минимальная сумма INSTALLMENT-займа.
   */
  static MIN_INSTALLMENT_AMOUNT = 21000;

  /**
   * Максимальная сумма INSTALLMENT-займа.
   */
  static MAX_INSTALLMENT_AMOUNT = 100000;

  /**
   * Минимальный срок INSTALLMENT-займа.
   */
  static MIN_INSTALLMENT_PERIOD = 2 * 30;

  /**
   * Максимальный срок INSTALLMENT-займа.
   */
  static MAX_INSTALLMENT_PERIOD = 12 * 30;

  /**
   * Минимальная сумма PDL-займа.
   */
  static MIN_PDL_AMOUNT = 2000;

  /**
   * Максимальная сумма PDL-займа.
   */
  static MAX_PDL_AMOUNT = 20000;

  /**
   * Минимальный срок PDL-займа.
   */
  static MIN_PDL_PERIOD = 7;

  /**
   * Максимальный срок PDL-займа.
   */
  static MAX_PDL_PERIOD = 30;

  /**
   * Возвращает сумму займа, которая должна отображаться на калькуляторе
   * по умолчанию, для указанного типа займа.
   * @param {Type} type Тип займа.
   */
  static getDefaultAmount(type) {
    return type === Type.INSTALLMENT
      ? this.DEFAULT_INSTALLMENT_AMOUNT
      : this.DEFAULT_PDL_AMOUNT;
  }

  /**
   * Возвращает срок займа, который должен отображаться на калькуляторе
   * по умолчанию, для указанного типа займа.
   * @param {Type} type Тип займа.
   */
  static getDefaultPeriod(type) {
    return type === Type.INSTALLMENT
      ? this.DEFAULT_INSTALLMENT_PERIOD
      : this.DEFAULT_PDL_PERIOD;
  }

  /**
   * Возвращает минимальную сумму для указанного типа займа.
   * @param {Type} type Тип займа.
   */
  static getMinAmount(type) {
    return type === Type.INSTALLMENT
      ? this.MIN_INSTALLMENT_AMOUNT
      : this.MIN_PDL_AMOUNT;
  }

  /**
   * Возвращает максимальную сумму для указанного типа займа.
   * @param {Type} type Тип займа.
   */
  static getMaxAmount(type) {
    return type === Type.INSTALLMENT
      ? this.MAX_INSTALLMENT_AMOUNT
      : this.MAX_PDL_AMOUNT;
  }

  /**
   * Возвращает минимальный срок для указанного типа займа.
   * @param {Type} type Тип займа.
   */
  static getMinPeriod(type) {
    return type === Type.INSTALLMENT
      ? this.MIN_INSTALLMENT_PERIOD
      : this.MIN_PDL_PERIOD;
  }

  /**
   * Возвращает максимальный срок для указанного типа займа.
   * @param {Type} type Тип.
   */
  static getMaxPeriod(type) {
    return type === Type.INSTALLMENT
      ? this.MAX_INSTALLMENT_PERIOD
      : this.MAX_PDL_PERIOD;
  }

  /**
   * Округляет сумму займа, введённую пользователем, до тысяч.
   * @param {Number} amount Сумма займа.
   * @param {Number} currentAmount Сумма займа, выбранная в данный момент.
   */
  static roundAmount(amount, currentAmount = null) {
    let nextAmount = amount / 1000;

    if (currentAmount == null) {
      nextAmount = Math.round(nextAmount);
    } else {
      nextAmount =
        currentAmount < amount ? Math.ceil(nextAmount) : Math.floor(nextAmount);
    }

    nextAmount *= 1000;

    return nextAmount;
  }

  /**
   * Округляет срок займа до допустимых для выбора значений.
   * @param {Number} period Срок займа.
   * @param {Number} currentPeriod Срок займа, выбранный в данный момент.
   */
  static roundPeriod(period, currentPeriod = null) {
    if (period <= 30) {
      return period;
    }

    let nextPeriod = period / 30;

    if (currentPeriod == null) {
      nextPeriod = Math.round(nextPeriod);
    } else {
      nextPeriod =
        currentPeriod < period ? Math.ceil(nextPeriod) : Math.floor(nextPeriod);
    }

    nextPeriod *= 30;

    return nextPeriod;
  }

  /**
   * Возвращает тип, которого станет текущий займ, если выбрать ему указанную
   * сумму.
   * @param {Type} currentType Текущий тип займа.
   * @param {Number} nextAmount Новая сумма займа.
   */
  static getNextTypeByAmount(currentType, nextAmount) {
    if (currentType === Type.INSTALLMENT) {
      return nextAmount < this.getMinAmount(currentType)
        ? Type.PDL
        : currentType;
    } else {
      return nextAmount > this.getMaxAmount(currentType)
        ? Type.INSTALLMENT
        : currentType;
    }
  }

  /**
   * Возвращает тип, которого станет текущий займ, если выбрать ему указанный
   * срок.
   * @param {Type} currentType Текущий тип займа.
   * @param {Number} nextAmount Новый срок займа.
   */
  static getNextTypeByPeriod(currentType, nextPeriod) {
    if (currentType === Type.INSTALLMENT) {
      return nextPeriod < this.getMinPeriod(currentType)
        ? Type.PDL
        : currentType;
    } else {
      return nextPeriod > this.getMaxPeriod(currentType)
        ? Type.INSTALLMENT
        : currentType;
    }
  }

  /**
   * Возвращает значение, находящееся в заданных пределах.
   * @param {Number} value Целевое значение.
   * @param {Number} min Минимально допустимое значение.
   * @param {Number} max Максимально допустимое значение.
   */
  static getValueInRange(value, min, max) {
    if (value < min) {
      return min;
    }

    if (value > max) {
      return max;
    }

    return value;
  }

  /**
   * Возвращает сумму займа, близкую к указанной, но находящуюся внутри границ
   * значений для переданного типа займа.
   * @param {Type} type Тип займа.
   * @param {Number} amount Сумма займа.
   */
  static getAmountInRange(type, amount) {
    return this.getValueInRange(
      amount,
      this.getMinAmount(type),
      this.getMaxAmount(type)
    );
  }

  /**
   * Возвращает срок займа, близкий к указанному, но находящийся внутри границ
   * значений для переданного типа займа.
   * @param {Type} type Тип займа.
   * @param {Number} period Срок займа.
   */
  static getPeriodInRange(type, period) {
    return this.getValueInRange(
      period,
      this.getMinPeriod(type),
      this.getMaxPeriod(type)
    );
  }

  /**
   * Возвращает указанную сумму займа в виде строки в человекочитаемом формате.
   * @param {Number} amount Сумма займа.
   */
  static formatAmount(amount) {
    const value = String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${value} ₽`;
  }

  /**
   * Возвращает указанную сумму займа в виде строки.
   * @param {Number} amount Сумма займа.
   */
  static stringifyAmount(amount) {
    return String(amount);
  }

  /**
   * Возвращает указанный срок займа в виде строки в человекочитаемом формате.
   * @param {Number} period Срок займа.
   */
  static formatPeriod(period) {
    if (period <= 30) {
      const unit = TextHelper.getPlural(period, 'день', 'дня', 'дней');
      return `${period} ${unit}`;
    }

    const months = Math.round(period / 30);
    const unit = TextHelper.getPlural(months, 'месяц', 'месяца', 'месяцев');
    return `${months} ${unit}`;
  }

  /**
   * Возвращает указанный срок займа в виде строки.
   * @param {Number} period Срок займа.
   */
  static stringifyPeriod(period) {
    return period <= 30 ? String(period) : String(Math.round(period / 30));
  }
}
