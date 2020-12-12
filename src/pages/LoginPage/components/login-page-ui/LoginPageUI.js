import { LitElement, html } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';

import {
  getFormFields,
  validateForm,
} from '../../../../utils/forms/validateMwc.js';
import { EventsMixin } from '../../../../utils/mixins/index.js';

import '@material/mwc-button';
import '@material/mwc-textfield';

export default class LoginPageUI extends LocalizeMixin(
  EventsMixin(LitElement)
) {
  static get properties() {
    return {
      loginError: { type: Boolean },
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'login-page-ui': () => import(`./assets/translations/en.js`),
      },
    ];
  }

  constructor() {
    super();
    this.loginError = false;
  }

  render() {
    return html`<main>
      <h1>${this.msgLit('login-page-ui:title')}</h1>
      ${this.loginError ? this.renderLoginError() : this.renderLoginForm()}
    </main>`;
  }

  renderLoginError() {
    return html`<div class="login-error">
      ${this.msgLit('login-page-ui:errorMensage')}
    </div>`;
  }

  renderLoginForm() {
    return html` <form class="login-form">
      <mwc-textfield
        class="form-field"
        label="${this.msgLit('login-page-ui:username')}"
        required
      ></mwc-textfield>
      <mwc-textfield
        class="form-field"
        label="${this.msgLit('login-page-ui:password')}"
        type="password"
        required
      ></mwc-textfield>

      <mwc-button
        class="from-submit"
        label="${this.msgLit('login-page-ui:login')}"
        @click="${this.onButtonClick}"
      ></mwc-button>
    </form>`;
  }

  onButtonClick(e) {
    e.preventDefault();
    const formFields = getFormFields(this.shadowRoot);

    const isValid = validateForm(formFields);

    if (isValid) {
      const detail = LoginPageUI.getFormValues(formFields);
      this.dispatchLoginEvent(detail);
    }
  }

  static getFormValues(formFields) {
    const [username, password] = formFields.map(field => field.value);
    return { username, password };
  }

  dispatchLoginEvent(detail) {
    this.triggerEvent('login-ui-submit', detail);
  }
}
