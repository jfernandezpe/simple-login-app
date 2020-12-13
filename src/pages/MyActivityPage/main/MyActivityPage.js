import { LitElement, html } from 'lit-element';
import '../components/my-activity-ui/my-activity-ui.js';
import { myActivityFactory } from '../domain/MyActivity/index.js';
import { EventsMixin } from '../../../utils/mixins/index.js';

export default class MyActivityPage extends EventsMixin(LitElement) {
  static get properties() {
    return {
      loginSince: { type: Number },
    };
  }

  constructor() {
    super();
    this.loginSince = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.myActivity = myActivityFactory();
    this.getMyActivity();
  }

  getMyActivity() {
    this.myActivity.getLoginSince().then(({ loginSince }) => {
      this.loginSince = loginSince;
    });
  }

  render() {
    return html`<my-activity-ui
      .loginSince="${this.loginSince}"
      class="ui-component"
      @my-activity-ui-logout="${this.onLogout}"
    >
    </my-activity-ui>`;
  }

  onLogout() {
    this.triggerEvent('authentication-logout');
  }
}
