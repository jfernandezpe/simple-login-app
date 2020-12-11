import { LitElement, html } from 'lit-element';
import {
  getFormFields,
  validateForm,
} from '../../../../utils/forms/validateMwc.js';

import '@material/mwc-button';
import '@material/mwc-textfield';

export default class LoginPageUI extends LitElement {
  render() {
    return html`<main>
      <h1>Login in this awesome app</h1>
      <form class="login-form">
        <mwc-textfield
          class="form-field"
          label="Username"
          required
        ></mwc-textfield>
        <mwc-textfield
          class="form-field"
          label="Password"
          type="password"
          required
        ></mwc-textfield>

        <mwc-button
          class="from-submit"
          label="Login"
          @click="${this.onButtonClick}"
        ></mwc-button>
      </form>
    </main>`;
  }

  onButtonClick() {
    const formFields = getFormFields(this.shadowRoot);

    const isValid = validateForm(formFields);

    if (isValid) {
      const detail = LoginPageUI.getFormValues(formFields);
      this.dispatchEvent(
        new CustomEvent('login:ui:submit', {
          detail,
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  static getFormValues(formFields) {
    const [username, password] = formFields.map(field => field.value);
    return { username, password };
  }
}
