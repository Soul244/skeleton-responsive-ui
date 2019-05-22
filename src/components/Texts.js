import styled, { css } from "styled-components";

const HCss = css`
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const H1 = styled.h1`
  ${HCss};
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
  @media (min-width: 550px) {
    font-size: 5rem;
  }
`;

const H2 = styled.h2`
  ${HCss};
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;
  @media (min-width: 550px) {
    font-size: 4.2rem;
  }
`;

const H3 = styled.h3`
  ${HCss};
  font-size: 3rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;
  @media (min-width: 550px) {
    font-size: 3.6rem;
  }
`;

const H4 = styled.h4`
  ${HCss};
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;
  @media (min-width: 550px) {
    font-size: 3rem;
  }
`;

const H5 = styled.h5`
  ${HCss};
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;
  @media (min-width: 550px) {
    font-size: 2.4rem;
  }
`;

const H6 = styled.h6`
  ${HCss};
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0;
  @media (min-width: 550px) {
    font-size: 1.5rem;
  }
`;

export { H1, H2, H3, H4, H5, H6 };
