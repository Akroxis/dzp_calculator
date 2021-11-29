import ParamsHelper from './ParamsHelper';
import Params from './Params';
import Type from './Type';

export default class ValueAssembler {
  currentValue = 2000;
  params = new Params(Type.PDL);
  period = ParamsHelper.DEFAULT_INSTALLMENT_PERIOD;
  type = Type.INSTALLMENT;

  constructor(currentValue, period, type, params) {
    this.currentValue = currentValue;
    this.period = period;
    this.type = type;
    this.params = params;
    this.setCurrentValue(currentValue, period, type);
  }

  setCurrentValue(currentValue, period, type) {
    this.params.amount = currentValue;
    this.params.period = period;
    this.params.type = type
  }
}