import ParamsHelper from './_ParamsHelper';
import Input from './_Input';
import Type from './_Type';

/**
 * Предоставляет обёртку над полем ввода срока займа.
 */
export default class PeriodInput extends Input {
  /**
   * @inheritdoc
   */
  getFormattedValue(params) {
    return ParamsHelper.formatPeriod(params.period);
  }

  /**
   * @inheritdoc
   */
  getRawValue(params) {
    return ParamsHelper.stringifyPeriod(params.period);
  }

  /**
   * @inheritdoc
   */
  setParam(value) {
    let period = value;

    if (this.params.type === Type.INSTALLMENT) {
      period *= 30;
    }

    this.params.setPeriod(period);
  }
}
