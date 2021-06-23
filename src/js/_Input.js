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

    this.element.value = this.getFormattedValue(this.params);
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
   * Обрабатывает событие изменения значения поля ввода.
   * @param {Event} event Событие.
   */
  handleChange = (event) => {
    const { value } = event.target;

    if (!/^\d*$/.test(value)) {
      event.preventDefault();
    }
  };

  /**
   * Обрабатывает событие получения полем фокуса.
   * @param {Event} event Событие.
   */
  handleFocus = () => {
    this.element.value = this.getRawValue(this.params);
  };

  /**
   * Обрабатывает событие потери элементом фокуса.
   * @param {Event} event Событие.
   */
  handleBlur = () => {
    const value = Number(this.element.value || '0');
    this.setParam(value);
  };
}
