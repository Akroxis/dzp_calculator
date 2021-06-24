import StorageKey from './StorageKey';

/**
 * Предоставляет обёртку над таймером обратного отсчёта.
 */
export default class Countdown {
  /**
   * Количество минут обратного отсчёта.
   */
  VALUE = 15;

  /**
   * Задержка между проверками таймера.
   */
  DELAY = 250;

  /**
   * Элемент, в котором отображается таймер.
   * @var HTMLDivElement
   */
  element = null;

  /**
   * Параметры займа.
   * @var Params
   */
  params = null;

  /**
   * Время, когда обратный отсчёт должен закончиться (в UNIX-формате).
   */
  timestamp = null;

  /**
   * Дескриптор таймаута для обратного отсчёта.
   * @var Number
   */
  timeout = null;

  /**
   * Текущий текст в элементе обратного отсчёта.
   */
  previousText = null;

  /**
   * Создаёт экземпляр обёртки.
   * @param {HTMLDivElement} element Элемент, в котором отображается таймер.
   * @param {Params} params Параметры займа.
   */
  constructor(element, params) {
    this.element = element;
    this.params = params;

    const timestamp = localStorage.getItem(StorageKey.COUNTDOWN_TIMESTAMP);

    if (timestamp) {
      this.timestamp = Number(timestamp);
      this.handleTimeout();
    } else {
      this.params.onChange(this.handleParamsChange);
    }

    this.previousText = this.element.innerHTML.replace(/^\s+|\s+$/g, '');
  }

  /**
   * Обрабатывает изменение параметров займа.
   */
  handleParamsChange = () => {
    if (this.timestamp) {
      return;
    }

    this.timestamp = Date.now() + this.VALUE * 60 * 1000;

    localStorage.setItem(
      StorageKey.COUNTDOWN_TIMESTAMP,
      String(this.timestamp)
    );

    this.handleTimeout();
  };

  /**
   * Обрабатывает очередную итерацию отсчёта.
   */
  handleTimeout = () => {
    const distance = this.timestamp - Date.now();

    if (distance <= 0) {
      localStorage.removeItem(StorageKey.COUNTDOWN_TIMESTAMP);

      this.timestamp = undefined;
      this.timeout = undefined;

      return;
    }

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.updateText(minutes, seconds);

    this.timeout = setTimeout(this.handleTimeout, this.DELAY);
  };

  /**
   * Обновляет содержимое элемента с обратным отсчётом.
   * @param {Number} minutes Количество минут.
   * @param {Number} seconds Количество секунд.
   */
  updateText(minutes, seconds) {
    const formattedMinutes = minutes >= 10 ? String(minutes) : `0${minutes}`;
    const formattedSeconds = seconds >= 10 ? String(seconds) : `0${seconds}`;
    const text = `${formattedMinutes}:${formattedSeconds}`;

    if (this.previousText === text) {
      return;
    }

    this.element.innerHTML = text;
    this.previousText = text;
  }
}
