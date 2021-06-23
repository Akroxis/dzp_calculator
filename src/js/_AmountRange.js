import ParamsHelper from './_ParamsHelper';
import Range from './_Range';

/**
 * Предоставляет обёртку для ползунка выбора суммы займа.
 */
export default class AmountRange extends Range {
  /**
   * @inheritdoc
   */
  getParamCurrent() {
    return this.params.amount;
  }

  /**
   * @inheritdoc
   */
  setParamCurrent(amount) {
    const roundedAmount = ParamsHelper.roundAmount(amount);
    this.params.setAmount(roundedAmount);
  }

  /**
   * @inheritdoc
   */
  getParamMin(type) {
    return ParamsHelper.getMinAmount(type);
  }

  /**
   * @inheritdoc
   */
  getParamMax(type) {
    return ParamsHelper.getMaxAmount(type);
  }
}
