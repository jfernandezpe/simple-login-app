import { LitElement, html } from 'lit-element';
import '../../pages/LoginPage/login-page.js';
import { configToken } from '../../utils/repository/HttpRepository/index.js';

import { router, navigate } from './router/router.js';

export default class SimpleLoginApp extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener(
      'authentication-success',
      SimpleLoginApp.handleAuthenticationSuccess
    );
  }

  disconnectedCallback() {
    this.removeEventListener(
      'authentication-success',
      SimpleLoginApp.handleAuthenticationSuccess
    );
  }

  static handleAuthenticationSuccess({ detail }) {
    SimpleLoginApp.configToken(detail.token);
    SimpleLoginApp.navigate('my-activity');
  }

  static configToken(token) {
    configToken('SLAapp-Authentication', token);
  }

  // eslint-disable-next-line class-methods-use-this
  static navigate(page) {
    navigate(page);
  }

  firstUpdated() {
    super.firstUpdated();

    const routerWrapper = this.shadowRoot.querySelector('.router-wrapper');

    router(routerWrapper);
  }

  render() {
    return html` <div class="router-wrapper"></div> `;
  }
}
