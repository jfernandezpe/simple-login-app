import { LitElement, html, css } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import LoginPageUI from './components/LoginPageUI.js';

export default class LoginPage extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'login-page-ui': LoginPageUI,
    };
  }

  static get properties() {
    return {
      // TODO: remove
      title: { type: String },
      page: { type: String },
    };
  }

  // TODO: style
  static get styles() {
    return css``;
  }

  render() {
    return html`<login-page-ui></login-page-ui>`;
  }
}
