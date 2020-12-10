import { LitElement, html } from 'lit-element';
import '../../pages/LoginPage/login-page.js';

export class SimpleLoginApp extends LitElement {
  render() {
    return html` <login-page></login-page> `;
  }
}
