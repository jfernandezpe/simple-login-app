import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LoginPage } from '../../pages/LoginPage/index.js';

export class SimpleLoginApp extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'login-page': LoginPage,
    };
  }

  render() {
    return html` <login-page></login-page> `;
  }
}
