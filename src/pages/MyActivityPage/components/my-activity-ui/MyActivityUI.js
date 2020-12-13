import { LitElement, html } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';

import { EventsMixin } from '../../../../utils/mixins/index.js';
import styles from './MyActivityUI.styles.js';

import '@material/mwc-button';
import '../../../../catalogue/time-counter/time-counter.js';

export default class MyActivityUI extends LocalizeMixin(
  EventsMixin(LitElement)
) {
  static get properties() {
    return {
      loginSince: { type: Number },
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'my-activity-ui': () => import(`./assets/translations/en.js`),
      },
    ];
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.loginSince = 0;
  }

  render() {
    return html`<main class="small-layout">
      <h1>${this.msgLit('my-activity-ui:title')}</h1>
      <p>${this.msgLit('my-activity-ui:description')}</p>
      <time-counter
        class="timer-counter"
        initialCount="${this.loginSince}"
      ></time-counter>
      <mwc-button
        raised
        class="logout-button form-submit"
        label="${this.msgLit('my-activity-ui:logout')}"
        @click="${this.onLogoutClick}"
      ></mwc-button>
    </main>`;
  }

  onLogoutClick() {
    this.triggerEvent('my-activity-ui-logout');
  }
}
