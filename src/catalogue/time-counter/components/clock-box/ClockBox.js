import { LitElement, html } from 'lit-element';
import styles from './ClockBox.styles.js';

export default class ClockBox extends LitElement {
  static get properties() {
    return {
      time: { type: Number },
      timeLabel: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.time = 0;
    this.timeLabel = '';
  }

  render() {
    return html`
      <div class="number">${ClockBox.formatTime(this.time)}</div>
      <div class="label">${this.timeLabel}</div>
    `;
  }

  static formatTime(time) {
    return time < 10 ? `0${time}` : time.toString();
  }
}
