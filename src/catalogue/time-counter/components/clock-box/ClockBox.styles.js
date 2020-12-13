import { css } from 'lit-element';

import { component, textSecondary, size48 } from '../../../styles/index.js';

export default css`
  ${component}
  :host {
    color: ${textSecondary};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .number {
    font-size: ${size48};
  }
`;
