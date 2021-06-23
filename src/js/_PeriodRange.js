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
  setParamCurrent(param) {
    this.params.setPeriod(param);
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
