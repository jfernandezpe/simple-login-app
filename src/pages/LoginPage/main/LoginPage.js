import { LitElement, html, css } from 'lit-element';

import '../components/login-page-ui/login-page-ui.js';

export default class LoginPage extends LitElement {
  // TODO: style
  static get styles() {
    return css``;
  }

  render() {
    return html`<login-page-ui></login-page-ui>`;
  }
}
