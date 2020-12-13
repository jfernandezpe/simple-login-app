import { html } from 'lit-element';
import '../time-counter.js';
import TimeCounter from '../TimeCounter.js';

export default {
  title: 'Catalogue/TimeCounter',
  component: TimeCounter,
};

export const Chronometer = () => html` <time-counter></time-counter> `;

const milisecondsInOneHour = 60 * 60 * 1000;
const yesterday =
  Date.now() -
  36 * milisecondsInOneHour +
  Math.random() * 12 * milisecondsInOneHour;

export const withInitialCount = () =>
  html` <time-counter initialCount=${yesterday}></time-counter> `;
