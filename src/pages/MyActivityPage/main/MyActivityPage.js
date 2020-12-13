import { LitElement, html } from 'lit-element';

export default class MyActivityPage extends LitElement {
  constructor() {
    super();
    this.loginError = false;
  }

  render() {
    return html`This is my activity page`;
  }
}
