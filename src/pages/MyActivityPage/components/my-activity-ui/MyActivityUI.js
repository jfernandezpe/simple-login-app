import { LitElement, html } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';

import { EventsMixin } from '../../../../utils/mixins/index.js';

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

  constructor() {
    super();
    this.loginSince = 0;
  }

  render() {
    return html`<main>
      <h1>${this.msgLit('my-activity-ui:title')}</h1>
      <p>${this.msgLit('my-activity-ui:description')}</p>
      <time-counter initialCount="${this.loginSince}"></time-counter>
      <mwc-button
        class="form-submit"
        label="${this.msgLit('my-activity-ui:logout')}"
        @click="${this.onLogoutClick}"
      ></mwc-button>
    </main>`;
  }

  onLogoutClick() {
    this.something();
    // TODO:
  }
}
