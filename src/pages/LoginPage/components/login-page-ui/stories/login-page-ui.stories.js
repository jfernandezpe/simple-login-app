import { html } from 'lit-element';
import '../login-page-ui.js';
import LoginPageUI from '../LoginPageUI.js';

export default {
  title: 'Pages/login',
  component: LoginPageUI,
  argTypes: { 'login-ui-submit': { action: 'login-ui-submit' } },
};

export const LoginPageInterface = () =>
  html` <login-page-ui @login-ui-submit="${console.log}"></login-page-ui> `;
export const WithAnError = () =>
  html`
    <login-page-ui loginError @login-ui-submit="${console.log}"></login-page-ui>
  `;
