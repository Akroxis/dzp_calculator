import ElementId from './_ElementId';
import ClientsCount from './_ClientsCount';
import SubmitButton from './_SubmitButton';
import AmountInput from './_AmountInput';
import AmountRange from './_AmountRange';
import PeriodInput from './_PeriodInput';
import PeriodRange from './_PeriodRange';
import Countdown from './_Countdown';
import Params from './_Params';
import Type from './_Type';
import Tabs from './_Tabs';

/**
 * Инициализирует калькулятор.
 */
export default function main() {
  const params = new Params(Type.PDL);

  const submitButton = document.getElementById(ElementId.SUBMIT_BUTTON);

  if (submitButton) {
    new SubmitButton(submitButton, params);
  }

  const amountInput = document.getElementById(ElementId.AMOUNT_INPUT);

  if (amountInput) {
    new AmountInput(amountInput, params);
  }

  const amountRange = document.getElementById(ElementId.AMOUNT_RANGE);

  if (amountRange) {
    new AmountRange(amountRange, params);
  }

  const periodInput = document.getElementById(ElementId.PERIOD_INPUT);

  if (periodInput) {
    new PeriodInput(periodInput, params);
  }

  const periodRange = document.getElementById(ElementId.PERIOD_RANGE);

  if (periodRange) {
    new PeriodRange(periodRange, params);
  }

  const installmentTab = document.getElementById(ElementId.INSTALLMENT_TAB);
  const pdlTab = document.getElementById(ElementId.PDL_TAB);

  if (installmentTab && pdlTab) {
    new Tabs(pdlTab, installmentTab, params);
  }

  const countdown = document.getElementById(ElementId.COUNTDOWN);

  if (countdown) {
    new Countdown(countdown, params);
  }

  const clientsCount = document.getElementById(ElementId.CLIENTS_COUNT);

  if (clientsCount) {
    new ClientsCount(clientsCount);
  }
}
