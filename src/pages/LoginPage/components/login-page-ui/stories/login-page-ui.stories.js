import { html } from 'lit-element';
import '../login-page-ui.js';

export default {
  title: 'login-page-ui',
};

export const LoginPageUI = () =>
  html` <login-page-ui @login:ui:submit="${console.log}"></login-page-ui> `;
