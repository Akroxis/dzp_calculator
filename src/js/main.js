import ElementId from './ElementId';
import ClientsCount from './ClientsCount';
import SubmitButton from './SubmitButton';
import AmountInput from './AmountInput';
import AmountRange from './AmountRange';
import PeriodInput from './PeriodInput';
import PeriodRange from './PeriodRange';
import Countdown from './Countdown';
import DateInput from './DateInput';
import Params from './Params';
import Type from './Type';
import Tabs from './Tabs';

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

  const dateInput = document.getElementById(ElementId.DATE_INPUT);

  if (dateInput) {
    new DateInput(dateInput, params);
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
