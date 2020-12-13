import { css } from 'lit-element';
import {
  smallLayout,
  component,
  formSubmit,
  size16,
} from '../../../../catalogue/styles/index.js';

export default css`
  ${component}
  ${smallLayout}
  ${formSubmit}

  .timer-counter {
    margin-bottom: ${size16};
  }
  .small-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
