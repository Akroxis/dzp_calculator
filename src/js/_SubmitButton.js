import ParamsHelper from './_ParamsHelper';
import HrefHelper from './_HrefHelper';

/**
 * Предоставляет обёртку для ссылки на получение займа.
 */
export default class SubmitButton {
  /**
   * Элемент ссылки.
   * @var HTMLAnchorElement
   */
  element = null;

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
    this.element = element;
    this.params = params;

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
   * Обновляет адрес ссылки.
   */
  updateHref() {
    this.element.href = HrefHelper.get(
      this.params.type,
      this.params.amount,
      this.params.period
    );

    const amount = ParamsHelper.formatAmount(this.params.amount);
    const text = `Получить ${amount}`;

    this.element.innerHTML = text;
  }
}
