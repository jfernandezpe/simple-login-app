import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export default class LoginPageUI extends ScopedElementsMixin(LitElement) {
  render() {
    return html` This is the login page `;
  }
}
