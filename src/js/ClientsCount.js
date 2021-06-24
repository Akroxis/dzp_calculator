import TextHelper from './TextHelper';

/**
 * Предоставляет обёртку над блоком количества клиентов.
 */
export default class ClientsCount {
  /**
   * Элемент, отображающий количество клиентов.
   * @var HTMLDivElement
   */
  element = null;

  /**
   * Создаёт экземпляр класса.
   * @param {HTMLDivElement} element Элемент.
   */
  constructor(element) {
    this.element = element;
    this.updateText();
  }

  /**
   * Возвращает количество клиентов, получивших займ.
   */
  getCount() {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const days = today.getDate();
    const hour = today.getHours();

    const value = year * (month / 10) + days;

    if (hour === 0 || hour === 1) {
      return Math.round(value * 0.1);
    }

    if (hour > 10) {
      return Math.round((value * hour) / 10);
    }

    return Math.round((value * hour) / (hour - 1));
  }

  /**
   * Обновляет текст в элементе.
   */
  updateText() {
    const count = this.getCount();
    const units = TextHelper.getPlural(count, 'клиент', 'клиента', 'клиентов');
    this.element.innerHTML = `${count} ${units}`;
  }
}
