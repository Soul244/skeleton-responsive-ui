import { css } from "styled-components";

export default css`
    ${({ fullWidth }) =>
      fullWidth &&
      `
        width: 100%;
        box-sizing: border-box;
  `}
    ${({ maxFullWidth }) =>
      maxFullWidth &&
      `
        max-width: 100%;
        box-sizing: border-box;
  `}
    ${({ pullRight }) =>
      pullRight &&
      `
        float: right;
  `}
      ${({ pullLeft }) =>
        pullLeft &&
        `
        float: left;
  `}
`;
