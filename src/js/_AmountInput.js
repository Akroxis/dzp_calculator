import ParamsHelper from './_ParamsHelper';
import Input from './_Input';

/**
 * Предоставляет обёртку над полем ввода суммы займа.
 */
export default class AmountInput extends Input {
  /**
   * @inheritdoc
   */
  getFormattedValue(params) {
    return ParamsHelper.formatAmount(params.amount);
  }

  /**
   * @inheritdoc
   */
  getRawValue(params) {
    return ParamsHelper.stringifyAmount(params.amount);
  }

  /**
   * @inheritdoc
   */
  setParam(amount) {
    const roundedAmount = ParamsHelper.roundAmount(amount, this.params.amount);
    this.params.setAmount(roundedAmount);
  }
}
