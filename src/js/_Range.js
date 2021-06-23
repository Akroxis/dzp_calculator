import ElementClass from './_ElementClass';
import Type from './_Type';

/**
 * Представляет обёртку над ползунком ввода суммы или срока займа.
 * @abstract
 */
export default class Range {
  /**
   * Минимальное значение ползунка.
   */
  MIN_VALUE = 0;

  /**
   * Максимальное значение ползунка.
   */
  MAX_VALUE = 100;

  /**
   * Поле ввода.
   * @var HTMLInputElement
   */
  element = null;

  /**
   * Параметры займа.
   * @var Params
   */
  params = null;

  /**
   * Тип займа, выбранный в данный момент.
   */
  currentType = null;

  /**
   * Создаёт экземпляр класса для указанного поля ввода.
   * @param {HTMLInputElement} element Поле ввода.
   * @param {Params} params Параметры займа.
   */
  constructor(element, params) {
    this.element = element;
    this.params = params;

    this.element.min = this.MIN_VALUE;
    this.element.max = this.MAX_VALUE;
    this.element.addEventListener('change', this.handleChange);

    this.params.onChange(this.handleParamsChange);

    this.element.value = this.getValue();
    this.updateClass();
  }

  /**
   * Обрабатывает изменение параметров займа.
   */
  handleParamsChange = () => {
    this.element.value = this.getValue();
    this.updateClass();
  };

  /**
   * Обрабатывает изменение значения ползунка.
   */
  handleChange = () => {
    const value = Number(this.element.value);
    this.setParam(value);
    this.updateClass();
  };

  /**
   * Возвращает текущее значение параметра займа (суммы или срока).
   * @abstract
   * @returns {Number}
   */
  getParamCurrent() {
    return 0;
  }

  /**
   * Задаёт новое значение параметра (суммы или срока) при указанном типе займа.
   * @abstract
   * @param {Type} type Тип займа, которому соответствует параметр.
   * @param {Number} param Значение параметра
   */
  setParamCurrent(type, param) {
    Boolean(param);
    Boolean(type);
  }

  /**
   * Возвращает минимальное значение параметра (суммы или срока) для
   * указанного типа займа.
   * @abstract
   * @param {Type} type Тип займа.
   * @returns {Number}
   */
  getParamMin(type) {
    Boolean(type);
    return 0;
  }

  /**
   * Возвращает маскимальное значение параметра (суммы или срока) для
   * указанного типа займа.
   * @abstract
   * @param {Type} type Тип займа.
   * @returns {Number}
   */
  getParamMax(type) {
    Boolean(type);
    return 0;
  }

  /**
   * Возвращает значение от 0 до 50 (включительно), полученное на основе
   * параметра займа (суммы или срока).
   */
  getValue() {
    const minParam = this.getParamMin(this.params.type);
    const maxParam = this.getParamMax(this.params.type);
    const currentParam = this.getParamCurrent();

    const rangeCurrent = currentParam - minParam;
    const rangeMax = maxParam - minParam;

    const basis = 50;

    let value = (rangeCurrent * basis) / rangeMax;
    value = Math.round(value);

    if (this.params.type === Type.INSTALLMENT) {
      value += basis;
    }

    return value;
  }

  /**
   * Обновляет текущие параметры займа на основе переданного значения ползунка.
   * @param {Number} value Значение ползунка.
   */
  setParam(value) {
    const basis = 50;

    const nextValue = value < basis ? value : value - basis;
    const nextType = value < basis ? Type.PDL : Type.INSTALLMENT;

    const paramMin = this.getParamMin(nextType);
    const paramMax = this.getParamMax(nextType);
    const rangeMax = paramMax - paramMin;

    let paramCurrent = (rangeMax * nextValue) / basis + paramMin;
    paramCurrent = Math.round(paramCurrent);

    this.setParamCurrent(paramCurrent);
  }

  /**
   * Обновляет класс, присвоенный ползунку.
   */
  updateClass() {
    if (this.currentType === this.params.type) {
      return;
    }

    this.element.classList.remove(ElementClass.INSTALLMENT);
    this.element.classList.remove(ElementClass.PDL);

    if (this.params.type === Type.INSTALLMENT) {
      this.element.classList.add(ElementClass.INSTALLMENT);
    } else {
      this.element.classList.add(ElementClass.PDL);
    }

    this.currentType = this.params.type;
  }
}
