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
import ParamsHelper from './ParamsHelper';
import ValueAssembler from './ValueAssembler';

/**
 * Инициализирует калькулятор.
 */
export default function main() {
  const params = new Params(Type.PDL);
  if(window.location.pathname.includes('product/zajm-2000-rub')) {
    new ValueAssembler(2000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-3000-rub')) {
    new ValueAssembler(3000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-4000-rub')) {
    new ValueAssembler(4000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-5000-rub')) {
    new ValueAssembler(5000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-6000-rub')) {
    new ValueAssembler(6000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-7000-rub')) {
    new ValueAssembler(7000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-8000-rub')) {
    new ValueAssembler(8000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-9000-rub')) {
    new ValueAssembler(9000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-10000-rub')) {
    new ValueAssembler(10000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-15000-rub')) {
    new ValueAssembler(15000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-20000-rub')) {
    new ValueAssembler(20000, ParamsHelper.DEFAULT_PDL_PERIOD, Type.PDL, params)
  }
  if(window.location.pathname.includes('product/zajm-25000-rub')) {
    new ValueAssembler(25000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-30000-rub')) {
    new ValueAssembler(30000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-31000-rub')) {
    new ValueAssembler(31000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-35000-rub')) {
    new ValueAssembler(35000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-40000-rub')) {
    new ValueAssembler(40000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-45000-rub')) {
    new ValueAssembler(45000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-50000-rub')) {
    new ValueAssembler(50000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-55000-rub')) {
    new ValueAssembler(55000, ParamsHelper.DEFAULT_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-60000-rub')) {
    new ValueAssembler(60000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-70000-rub')) {
    new ValueAssembler(70000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-80000-rub')) {
    new ValueAssembler(80000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-90000-rub')) {
    new ValueAssembler(90000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-100000-rub')) {
    new ValueAssembler(100000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/mikrozajmy-na-dlitelnyj-srok')) {
    new ValueAssembler(50000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/zajm-na-6-mesyatsev')) {
    new ValueAssembler(50000, ParamsHelper.MAX_INSTALLMENT_PERIOD / 2, Type.INSTALLMENT, params)
  }
  if(window.location.pathname.includes('product/mikrozajmy-na-god')) {
    new ValueAssembler(50000, ParamsHelper.MAX_INSTALLMENT_PERIOD, Type.INSTALLMENT, params)
  }

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
