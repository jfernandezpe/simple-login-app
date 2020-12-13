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
  form {
    display: flex;
    flex-direction: column;
  }
  .form-field {
    margin-bottom: ${size16};
  }
`;
