import { css } from 'lit-element';

export const textPrimary = css`#000`;
export const textSecondary = css`#757575`;
export const maxWidth = css`320px`;
export const size48 = css`48px`;
export const size24 = css`24px`;
export const size20 = css`20px`;
export const size16 = css`16px`;
export const size12 = css`12px`;
export const size4 = css`4px`;
export const fontFamily = css`Verdana, Geneva, sans-serif`;

export const smallLayout = css`
  .small-layout {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    max-width: ${maxWidth};
    background: white;
    padding: ${size20};
    -webkit-box-shadow: 3px 3px 7px 1px ${textSecondary};
    box-shadow: 3px 3px 7px 1px ${textSecondary};
  }
  .small-layout h1 {
    margin-top: 0;
  }
`;

export const component = css`
  :host {
    font-size: ${size12};
    font-family: ${fontFamily};
    color: ${textPrimary};
    display: block;
  }
`;

export const page = css`
  ${component}
  :host {
    margin: ${size12};
  }
`;

export const formSubmit = css`
  .form-submit {
    margin-top: ${size12};
  }
`;
