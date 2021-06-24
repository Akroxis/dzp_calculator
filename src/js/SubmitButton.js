import ElementClass from './ElementClass';
import ParamsHelper from './ParamsHelper';
import HrefHelper from './HrefHelper';
import Type from './Type';

/**
 * Предоставляет обёртку для ссылки на получение займа.
 */
export default class SubmitButton {
  /**
   * Элемент ссылки.
   * @var HTMLAnchorElement
   */
  rootElement = null;

  /**
   * Элемент, в котором расположен текст ссылки.
   * @var HTMLSpanElement
   */
  textElement = null;

  /**
   * Параметры займа.
   * @var Params
   */
  params = null;

  /**
   * Создаёт экземпляр класса.
   * @param {HTMLAnchorElement} element Ссылка.
   * @param {Params} params Параметры займа.
   */
  constructor(element, params) {
    this.rootElement = element;
    this.params = params;

    this.textElement = this.findElement('data-submit-text');

    this.params.onChange(this.handleParamsChange);
    this.updateHref();
  }

  /**
   * Обрабатывает изменение параметров займа.
   */
  handleParamsChange = () => {
    this.updateHref();
  };

  /**
   * Возвращает дочерний элемент компонента.
   * @param {String} attribute Название атрибута.
   */
  findElement(attribute) {
    return this.rootElement.querySelector(`[${attribute}]`);
  }

  /**
   * Обновляет адрес ссылки и классы ссылки.
   */
  updateHref() {
    this.rootElement.href = HrefHelper.get(
      this.params.type,
      this.params.amount,
      this.params.period
    );

    const amount = ParamsHelper.formatAmount(this.params.amount);
    const text = `Получить ${amount}`;
    this.textElement.innerHTML = text;

    this.rootElement.classList.remove(ElementClass.INSTALLMENT);
    this.rootElement.classList.remove(ElementClass.PDL);

    if (this.params.type === Type.INSTALLMENT) {
      this.rootElement.classList.add(ElementClass.INSTALLMENT);
    } else {
      this.rootElement.classList.add(ElementClass.PDL);
    }
  }
}
