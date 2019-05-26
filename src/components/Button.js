import React from "react";
import styled, { css } from "styled-components";
import Utils from '../Utils';

const ButtonCss = css`
  ${Utils};
  margin-bottom: 1rem;
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid;
  text-transform: none;
  :focus,
  :hover {
    outline: 0;
  }
`;

const ButtonStyled = styled.button`
  ${ButtonCss};
  color: #555;
  background-color: transparent;
  border-color: #bbb;
  :focus,
  :hover {
    color: #333;
    border-color: #888;
  }
`;

const ButtonPrimary = styled.button`
  ${ButtonCss};
  color: #fff;
  background-color: #33c3f0;
  border-color: #33c3f0;
  :focus,
  :hover {
    color: #fff;
    background-color: #1eaedb;
    border-color: #1eaedb;
  }
`;

function Button({ primary, children, ...rest }) {
  if (primary) {
    return <ButtonPrimary {...rest}>{children}</ButtonPrimary>;
  }
  return (
    <ButtonStyled type={rest.type ? rest.type : "button"} {...rest}>
      {children}
    </ButtonStyled>
  );
}
export default Button;
