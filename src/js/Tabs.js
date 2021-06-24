import ElementClass from './ElementClass';
import Params from './Params';
import Type from './Type';

/**
 * Предоставляет обёртку над вкладками с типами займа.
 */
export default class Tabs {
  /**
   * Вкладка, представляющая INSTALLMENT-займ.
   */
  installmentElement = null;

  /**
   * Вкладка, предоставляющая PDL-займ.
   */
  pdlElement = null;

  /**
   * Параметры займа.
   */
  params = null;

  /**
   * Тип займа, который выбран в данный момент.
   */
  currentType = null;

  /**
   * Создаёт экземпляр класса для указанных элементов.
   * @param {HTMLButtonElement} pdlElement Вкладка, обозначающая PDL-займ.
   * @param {HTMLButtonElement} installmentElement Вкладка, обозначающая
   * INSTALLMENT-заём.
   * @param {Params} params Параметры займа.
   */
  constructor(pdlElement, installmentElement, params) {
    this.installmentElement = installmentElement;
    this.pdlElement = pdlElement;
    this.params = params;

    this.installmentElement.addEventListener(
      'click',
      this.handleInstallmentClick
    );

    this.pdlElement.addEventListener('click', this.handlePdlClick);

    this.params.onChange(this.handleParamsChange);

    this.updateActive();
    this.currentType = this.params.type;
  }

  /**
   * Обрабатывает изменение параметров займа.
   * @param {Params} params Новые параметры займа.
   */
  handleParamsChange = () => {
    this.updateActive();
  };

  /**
   * Обрабатывает нажатие на вкладку INSTALLMENT-займа.
   */
  handleInstallmentClick = () => {
    this.params.setType(Type.INSTALLMENT);
  };

  /**
   * Обрабатывает нажатие на вкладку PDL-займа.
   */
  handlePdlClick = () => {
    this.params.setType(Type.PDL);
  };

  /**
   * Обновляет класс на активной в данной момент вкладке.
   */
  updateActive() {
    if (this.currentType === this.params.type) {
      return;
    }

    this.installmentElement.classList.remove(ElementClass.ACTIVE);
    this.pdlElement.classList.remove(ElementClass.ACTIVE);

    if (this.params.type === Type.INSTALLMENT) {
      this.installmentElement.classList.add(ElementClass.ACTIVE);
    } else {
      this.pdlElement.classList.add(ElementClass.ACTIVE);
    }

    this.currentType = this.params.type;
  }
}
