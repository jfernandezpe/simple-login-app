import { css } from 'lit-element';

export const textPrimary = css`#000`;
export const textSecondary = css`#757575`;
export const size48 = css`48px`;
export const size12 = css`12px`;
export const size4 = css`4px`;
export const fontFamily = css`Verdana, Geneva, sans-serif`;

export const component = css`
  :host {
    font-size: ${size12};
    font-family: ${fontFamily};
    color: ${textPrimary};
  }
`;
