/**
 * Оборачивает собственную реализацию ползунка ввода, чтобы предоставить на
 * уровень бизнес-логики свойства `setValue` и обработку события через
 * `onChange`.
 */
export default class RangeInput {
  /**
   * Корневой элемент поля ввода.
   */
  rootElement = null;

  /**
   * Элемент целой полосы ползунка.
   */
  trackElement = null;

  /**
   * Элемент подсвеченной полосы ползунка.
   */
  progressElement = null;

  /**
   * Внешние обработчики события изменения значений.
   */
  handlers = [];

  /**
   * Указывает, что в данный момент происходит нажатие ползунка.
   */
  isPressed = false;

  /**
   * Создаёт экземпляр обработчика.
   * @param {HTMLDivElement} element Корневой элемент.
   */
  constructor(element) {
    this.rootElement = element;
    this.progressElement = this.findElement('data-range-progress');
    this.trackElement = this.findElement('data-range-track');

    this.trackElement.addEventListener('touchstart', this.handleTouchStart);
    this.trackElement.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchend', this.handleTouchEnd);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  /**
   * Обрабатывает нажатие на трек.
   */
  handleMouseDown = (event) => {
    this.handleStart(event.clientX);
  };

  /**
   * Обрабатывает событие начала касания.
   */
  handleTouchStart = (event) => {
    this.handleStart(event.touches[0].clientX);
  };

  /**
   * Обрабатывает событие перемещения курсора.
   */
  handleMouseMove = (event) => {
    this.handleMove(event.clientX);
  };

  /**
   * Обрабатывает событие движения касания.
   */
  handleTouchMove = (event) => {
    this.handleMove(event.touches[0].clientX);
  };

  /**
   * Обрабатывает событие окончания перемещения курсора.
   */
  handleMouseUp = () => {
    this.handleEnd();
  };

  /**
   * Обрабатывает событие окончания касания.
   */
  handleTouchEnd = () => {
    this.handleEnd();
  };

  /**
   * Возвращает дочерний элемент компонента.
   * @param {String} attribute Название атрибута.
   */
  findElement(attribute) {
    return this.rootElement.querySelector(`[${attribute}]`);
  }

  /**
   * Задаёт новое значение компоненту.
   * @param {Number} value Значение от 0 до 100.
   */
  setValue(value) {
    this.progressElement.style.width = `${value}%`;
  }

  /**
   * Добавляет обработчик события изменения.
   * @param {Function} handler Обработчик событий.
   */
  onChange(handler) {
    this.handlers.push(handler);
  }

  /**
   * Возвращает ширину
   * @param {Number} clientX Позиция от края экрана.
   */
  calculateWidth(clientX) {
    const trackRect = this.trackElement.getBoundingClientRect();
    const trackClientX = Math.round(trackRect.x);
    const trackWidth = Math.round(trackRect.width);

    const relativeX = clientX - trackClientX;
    const width = Math.round((relativeX / trackWidth) * 100);

    if (width < 0) {
      return 0;
    }

    if (width > 100) {
      return 100;
    }

    return width;
  }

  /**
   * Обрабатывает изменение позиции относительно края экрана. Генерирует
   * события `onChange`.
   * @param {Number} clientX Позиция курсора относительно края экрана.
   */
  change(clientX) {
    const width = this.calculateWidth(clientX);

    const { length } = this.handlers;

    for (let i = 0; i < length; i += 1) {
      const handler = this.handlers[i];
      handler(width);
    }
  }

  /**
   * Обрабатывает начало перетаскивания.
   * @param {Number} clientX Позиция от края страницы.
   */
  handleStart(clientX) {
    this.isPressed = true;
    this.change(clientX);
  }

  /**
   * Обрабатывает перемещение указателя.
   * @param {Number} clientX Позиция от края страницы.
   */
  handleMove(clientX) {
    if (this.isPressed) {
      this.change(clientX);
    }
  }

  /**
   * Обрабатывает окончание перемещения указателя.
   * @param {Number} pageX Позиция от края страницы.
   */
  handleEnd() {
    this.isPressed = false;
  }
}
