import ParamsHelper from './_ParamsHelper';
import Range from './_Range';

/**
 * Предоставляет обёртку для ползунка выбора срока займа.
 */
export default class PeriodRange extends Range {
  /**
   * @inheritdoc
   */
  getParamCurrent() {
    return this.params.period;
  }

  /**
   * @inheritdoc
   */
  setParamCurrent(period) {
    const roundedPeriod = ParamsHelper.roundPeriod(period);
    this.params.setPeriod(roundedPeriod);
  }

  /**
   * @inheritdoc
   */
  getParamMin(type) {
    return ParamsHelper.getMinPeriod(type);
  }

  /**
   * @inheritdoc
   */
  getParamMax(type) {
    return ParamsHelper.getMaxPeriod(type);
  }
}
