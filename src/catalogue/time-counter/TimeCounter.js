import { LitElement, html } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceUntilNow,
} from '../../utils/dates/index.js';

import styles from './TimeCounter.styles.js';

import './components/clock-box/clock-box.js';

export default class TimeCounter extends LocalizeMixin(LitElement) {
  static get properties() {
    return {
      initialCount: { type: Number },
      counter: { type: Number },
    };
  }

  static get styles() {
    return styles;
  }

  static get localizeNamespaces() {
    return [
      {
        'time-counter': () => import(`./assets/translations/en.js`),
      },
    ];
  }

  constructor() {
    super();
    this.initialCount = 0;
    this.counter = 0;
    this.dateInit = Date.now();
  }

  connectedCallback() {
    super.connectedCallback();
    this.timeDifference = TimeCounter.millisecondsDiference(
      this.counter,
      this.initialCount
    );
    this.countInterval = setInterval(() => {
      this.counter = differenceUntilNow(this.dateInit - this.initialCount);
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.countInterval);
  }

  static millisecondsDiference(timeLater, timeEarlier) {
    return timeLater - timeEarlier;
  }

  render() {
    return html`
      <div
        class="clock"
        aria-valuetext="${this.formatCounter(this.counter)}"
        aria-label="${this.msgLit('time-counter:counter')}"
      >
        <clock-box
          class="clock-box"
          time="${TimeCounter.getDaysFromMilliseconsDate(this.counter)}"
          timeLabel="${this.msgLit('time-counter:days')}"
        ></clock-box>
        <clock-box
          class="clock-box"
          time="${TimeCounter.getHoursFromMilliseconsDate(this.counter)}"
          timeLabel="${this.msgLit('time-counter:hours')}"
        ></clock-box>
        <clock-box
          class="clock-box"
          time="${TimeCounter.getMinutesFromMilliseconsDate(this.counter)}"
          timeLabel="${this.msgLit('time-counter:minutes')}"
        ></clock-box>
        <clock-box
          class="clock-box"
          time="${TimeCounter.getSecondsFromMilliseconsDate(this.counter)}"
          timeLabel="${this.msgLit('time-counter:seconds')}"
        ></clock-box>
      </div>
    `;
  }

  formatCounter(timeDifference) {
    return `${this.msgLit('time-counter:counterCurrent', {
      days: TimeCounter.getDaysFromMilliseconsDate(timeDifference),
      hours: TimeCounter.getHoursFromMilliseconsDate(timeDifference),
      minutes: TimeCounter.getMinutesFromMilliseconsDate(timeDifference),
      seconds: TimeCounter.getSecondsFromMilliseconsDate(timeDifference),
    })}`;
  }

  static getDaysFromMilliseconsDate(date) {
    return differenceInDays(new Date(date), new Date(0));
  }

  static getHoursFromMilliseconsDate(date) {
    const hoursPerDay = 24;
    return differenceInHours(new Date(date), new Date(0)) % hoursPerDay;
  }

  static getMinutesFromMilliseconsDate(date) {
    const minutesPerHour = 60;
    return differenceInMinutes(new Date(date), new Date(0)) % minutesPerHour;
  }

  static getSecondsFromMilliseconsDate(date) {
    const secondsPerMinute = 60;
    return differenceInSeconds(new Date(date), new Date(0)) % secondsPerMinute;
  }

  static _getDifference(date) {
    const zero = new Date(0);
    return date - zero;
  }
}
