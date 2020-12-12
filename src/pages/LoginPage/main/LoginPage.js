import { LitElement, html } from 'lit-element';
import { authenticationFactory } from '../domain/Authentication/authenticationFactory.js';

import '../components/login-page-ui/login-page-ui.js';
import { EventsMixin } from '../../../utils/mixins/index.js';

export default class LoginPage extends EventsMixin(LitElement) {
  static get properties() {
    return {
      loginError: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.loginError = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.authentication = authenticationFactory();
  }

  render() {
    return html`<login-page-ui
      class="ui-component"
      ?loginError="${this.loginError}"
      @login-ui-submit="${this.login}"
    ></login-page-ui>`;
  }

  login({ detail }) {
    const { username, password } = detail;
    this.authentication
      .login(username, password)
      .then(data => this.proccessLogin(data))
      .catch(() => this.displayError());
  }

  proccessLogin({ token }) {
    this.loginError = false;
    this.informLogin(token);
  }

  informLogin(token) {
    const detail = { token };
    this.triggerEvent('authentication-success', detail);
  }

  displayError() {
    this.loginError = true;
  }
}
