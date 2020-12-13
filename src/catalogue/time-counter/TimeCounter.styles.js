import { css } from 'lit-element';

import { component, size4 } from '../styles/index.js';

export default css`
  ${component}

  .clock {
    display: flex;
  }
  .clock-box {
    margin: ${size4};
  }
`;
