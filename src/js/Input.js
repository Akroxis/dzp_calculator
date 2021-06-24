/**
 * Предоставляет обёртку над полем ввода суммы или срока займа.
 * @abstract
 */
export default class Input {
  /**
   * Элемент поля ввода.
   */
  element = null;

  /**
   * Текущие параметры займа.
   */
  params = null;

  /**
   * Текущее значение поля ввода.
   */
  value = null;

  /**
   * Текущая позиция начала выделения в поле ввода.
   */
  selectionStart = 0;

  /**
   * Текущая позиция конца выделения в поле ввода.
   */
  selectionEnd = 0;

  /**
   * Создаёт экземпляр класса для указанного элемента.
   * @param {HTMLInputElement} element Элемент поля ввода.
   * @param {Params} params Текущие параметры займа.
   */
  constructor(element, params) {
    this.element = element;
    this.params = params;

    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('focus', this.handleFocus);
    this.element.addEventListener('blur', this.handleBlur);

    this.params.onChange(this.handleParamsChange);

    this.value = this.getFormattedValue(this.params);
    this.element.value = this.value;

    this.disableNonNumbersInput();
  }

  /**
   * Возвращает "красивую" строку для поля ввода из указанных параметров
   * займа (к примеру, '10 000 Р' или '12 месяцев').
   * @abstract
   * @param {Params} params Параметры займа.
   * @returns {String} Строка.
   */
  getFormattedValue(params) {
    Boolean(params);
    return '';
  }

  /**
   * Возвращает "чистую" сроку для отображения в поле ввода из указанных
   * параметров займа (к примеру, '1000').
   * @abstract
   * @param {Params} params Параметры займа.
   * @returns {String} Строка.
   */
  getRawValue(params) {
    Boolean(params);
    return '';
  }

  /**
   * Изменяет какой-либо параметр займа (с помощью `this.params.setAmount`
   * или `this.params.setPeriod`) на указанное значение поля ввода.
   * @abstract
   * @param {Number} value Значение.
   */
  setParam(value) {
    Boolean(value);
  }

  /**
   * Обрабатывает изменение выбранной суммы займа.
   * @param {Params} params Новые параметры займа.
   */
  handleParamsChange = (params) => {
    this.element.value = this.getFormattedValue(params);
  };

  /**
   * Обрабатывает событие получения полем фокуса.
   * @param {Event} event Событие.
   */
  handleFocus = () => {
    this.value = this.getRawValue(this.params);
    this.element.value = this.value;
  };

  /**
   * Обрабатывает событие потери элементом фокуса.
   * @param {Event} event Событие.
   */
  handleBlur = () => {
    const value = Number(this.element.value || '0');

    if (Number.isNaN(value)) {
      return;
    }

    this.setParam(value);
  };

  /**
   * Обрабатывает изменение содержимого поля ввода.
   */
  handleInput = () => {
    if (/^\d*$/.test(this.element.value)) {
      this.selectionStart = this.element.selectionStart;
      this.selectionEnd = this.element.selectionEnd;
      this.value = this.element.value;
    } else if (this.value != null) {
      this.element.value = this.value;
      this.element.setSelectionRange(this.selectionStart, this.selectionEnd);
    } else {
      this.element.value = '';
    }
  };

  /**
   * Блокирует ввод недопустимых символов.
   */
  disableNonNumbersInput() {
    const events = [
      'input',
      'keydown',
      'keyup',
      'mousedown',
      'mouseup',
      'select',
      'contextmenu',
      'drop',
    ];

    const { length } = events;

    for (let i = 0; i < length; i += 1) {
      this.element.addEventListener(events[i], this.handleInput);
    }
  }
}
