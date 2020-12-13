import { LitElement, html } from 'lit-element';
import '../../pages/LoginPage/login-page.js';
import { configToken } from '../../utils/repository/HttpRepository/index.js';
import { getToken, setToken } from './session/index.js';
import { router, navigate } from './router/router.js';

export default class SimpleLoginApp extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener(
      'authentication-success',
      SimpleLoginApp.authenticate
    );
    this.addEventListener('authentication-logout', SimpleLoginApp.logout);
  }

  disconnectedCallback() {
    this.removeEventListener(
      'authentication-success',
      SimpleLoginApp.authenticate
    );

    this.removeEventListener('authentication-logout', SimpleLoginApp.logout);
  }

  static authenticate({ detail }) {
    SimpleLoginApp.configToken(detail.token);
    SimpleLoginApp.navigate('my-activity');
  }

  static configToken(token) {
    setToken(token);
    configToken('SLAapp-Authentication', getToken);
  }

  static logout() {
    SimpleLoginApp.configToken('');
    SimpleLoginApp.navigate('');
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
