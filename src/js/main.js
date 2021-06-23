import ElementId from './_ElementId';
import SubmitButton from './_SubmitButton';
import AmountInput from './_AmountInput';
import AmountRange from './_AmountRange';
import PeriodInput from './_PeriodInput';
import PeriodRange from './_PeriodRange';
import Params from './_Params';
import Type from './_Type';
import Tabs from './_Tabs';

/**
 * Инициализирует калькулятор.
 */
export default function main() {
  const params = new Params(Type.PDL);

  const submitButton = new SubmitButton(
    document.getElementById(ElementId.SUBMIT_BUTTON),
    params
  );

  const amountInput = new AmountInput(
    document.getElementById(ElementId.AMOUNT_INPUT),
    params
  );

  const amountRange = new AmountRange(
    document.getElementById(ElementId.AMOUNT_RANGE),
    params
  );

  const periodInput = new PeriodInput(
    document.getElementById(ElementId.PERIOD_INPUT),
    params
  );

  const periodRange = new PeriodRange(
    document.getElementById(ElementId.PERIOD_RANGE),
    params
  );

  const tabs = new Tabs(
    document.getElementById(ElementId.PDL_TAB),
    document.getElementById(ElementId.INSTALLMENT_TAB),
    params
  );

  Boolean(submitButton);
  Boolean(amountInput);
  Boolean(amountRange);
  Boolean(periodInput);
  Boolean(periodRange);
  Boolean(tabs);
}
