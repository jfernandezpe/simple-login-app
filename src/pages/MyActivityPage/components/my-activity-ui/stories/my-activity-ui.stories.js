import { html } from 'lit-element';
import '../my-activity-ui.js';
import MyActivityUI from '../MyActivityUI.js';

export default {
  title: 'Pages/MyActivity',
  component: MyActivityUI,
};

export const myActivityUI = () => html` <my-activity-ui></my-activity-ui> `;
