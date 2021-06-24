import ParamsHelper from './ParamsHelper';
import Input from './Input';
import Type from './Type';

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

    const roundedPeriod = ParamsHelper.roundPeriod(period, this.params.period);
    this.params.setPeriod(roundedPeriod);
  }
}
