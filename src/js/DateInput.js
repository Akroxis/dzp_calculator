import datepicker from 'js-datepicker';

import ElementClass from './ElementClass';
import ParamsHelper from './ParamsHelper';
import TextHelper from './TextHelper';
import Type from './Type';

/**
 * Предоставляет обёртку для компонента выбора даты.
 */
export default class DateInput {
  /**
   * Корневой элемент компонента.
   */
  rootElement = null;

  /**
   * Элемент, в который монтируется диалог выбора даты.
   */
  dialogElement = null;

  /**
   * Кнопка значка даты.
   */
  iconElement = null;

  /**
   * Блок текста для отображения даты.
   */
  textElement = null;

  /**
   * Библиотечный компонент выбора даты.
   */
  picker = null;

  /**
   * Указывает, что диалог выбора даты показан.
   */
  isPickerShowed = false;

  /**
   * Параметры займа.
   */
  params = null;

  /**
   * Создаёт экземлпяр класса.
   * @param {HTMLDivElement} element Корневой элемент компонента.
   * @param {Params} params Параметры займа.
   */
  constructor(element, params) {
    this.rootElement = element;
    this.params = params;

    this.dialogElement = this.findElement('data-date-dialog');
    this.iconElement = this.findElement('data-date-icon');
    this.textElement = this.findElement('data-date-text');

    const minDate = this.getDateByPeriod(ParamsHelper.getMinPeriod(Type.PDL));
    const maxDate = this.getDateByPeriod(ParamsHelper.getMaxPeriod(Type.PDL));

    this.picker = datepicker(this.dialogElement, {
      minDate,
      maxDate,
      customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      customMonths: [
        'Январь,',
        'Февраль,',
        'Март,',
        'Апрель,',
        'Май,',
        'Июнь,',
        'Июль,',
        'Август,',
        'Сентябрь,',
        'Октябрь,',
        'Ноябрь,',
        'Декабрь,',
      ],
      startDay: 1,
      disableYearOverlay: true,
      showAllDates: true,
      onSelect: this.handlePickerSelect,
      onShow: this.handlePickerShow,
      onHide: this.handlePickerHide,
    });

    this.rootElement.addEventListener('click', this.handleRootClick);
    this.params.onChange(this.handleParamsChange);

    this.setPeriod(this.params.period);
  }

  /**
   * Возвращает дочерний элемент компонента.
   * @param {String} attribute Название атрибута.
   */
  findElement(attribute) {
    return this.rootElement.querySelector(`[${attribute}]`);
  }

  /**
   * Обрабатывает изменение параметров займа.
   */
  handleParamsChange = () => {
    this.setPeriod(this.params.period);
  };

  /**
   * Обрабатывает нажатие на корневой элемент.ё
   * @param {Event} event Событие.
   */
  handleRootClick = (event) => {
    let node = event.target;

    while (node && node !== document.body) {
      if (node.classList.contains('qs-datepicker-container')) {
        return;
      }

      node = node.parentNode;
    }

    event.stopPropagation();

    if (this.isPickerShowed) {
      this.picker.hide();
    } else {
      this.picker.show();
    }
  };

  /**
   * Обрабатывает выбор даты.
   * @param {*} _ Сущность picker'а.
   * @param {Date} date Дата.
   */
  handlePickerSelect = (_, date) => {
    const period = this.getPeriodByDate(date);
    this.params.setPeriod(period);
  };

  /**
   * Обрабатывает показ диалога выбора даты.
   */
  handlePickerShow = () => {
    this.isPickerShowed = true;
    this.rootElement.classList.add(ElementClass.ACTIVE);
  };

  /**
   * Обрабатывает скрытие диалога выбора даты.
   */
  handlePickerHide = () => {
    this.isPickerShowed = false;
    this.rootElement.classList.remove(ElementClass.ACTIVE);
  };

  /**
   * Возвращает дату последнего дня указанного срока займа.
   * @param {Number} period Срок займа.
   */
  getDateByPeriod(period) {
    const date = new Date();

    if (period > 30) {
      const months = Math.round(period / 30);
      date.setMonth(date.getMonth() + months);
    } else {
      date.setDate(date.getDate() + period);
    }

    return date;
  }

  /**
   * Определяет срок займа до указанной даты.
   * @param {Date} date Дата.
   */
  getPeriodByDate(date) {
    let period = date.getTime() - Date.now();
    period /= 24 * 60 * 60 * 1000;
    period = Math.ceil(period);
    return period;
  }

  /**
   * Обновляет срок займа, который отображает компонент.
   * @param {Number} period Срок займа.
   */
  setPeriod(period) {
    const date = this.getDateByPeriod(period);

    this.rootElement.classList.remove(ElementClass.INSTALLMENT);
    this.rootElement.classList.remove(ElementClass.PDL);

    if (period > 30) {
      let text = TextHelper.stringifyDate(date);
      text = `До ${text}`;
      this.textElement.innerHTML = text;

      this.rootElement.classList.add(ElementClass.INSTALLMENT);

      this.rootElement.disabled = true;
    } else {
      this.picker.navigate(date);
      this.picker.setDate(date);

      this.textElement.innerHTML = TextHelper.stringifyDate(date);

      this.rootElement.classList.add(ElementClass.PDL);

      this.rootElement.disabled = false;
    }

    this.picker.hide();
  }
}
