/* eslint-disable default-case */
import React from "react";
import styled from "styled-components";
import Utils from "../../Utils";
import PropTypes from 'prop-types';

const ColumnStyled = styled.div`
    ${Utils}
    width: 100%;
    margin-bottom: .75rem;
    float: left;
    box-sizing: border-box;
    @media (min-width: 400px) {}
    @media (min-width: 550px) {
        margin-bottom: 1.5rem;
        :first-child {
            margin-left: 0;
        }
        margin-left: ${props => {
          switch (props.offset) {
            case "one":
              return "8.66666666667%;";
            case "two":
              return "17.3333333333%;";
            case "three":
              return "26%;";
            case "four":
            case "one-third":
              return "34.6666666667%;";
            case "five":
              return "43.3333333333%;";
            case "six":
            case "one-half":
              return "52%;";
            case "seven":
              return "60.6666666667%;";
            case "eight":
            case "two-thirds":
              return "69.3333333333%;";
            case "nine":
              return "78.0%;";
            case "ten":
              return "86.6666666667%;";
            case "eleven":
              return "95.3333333333%;";
            case "twelve":
              return "0";
            default:
              return "4%";
          }
        }}

        width: ${props => {
          switch (props.column) {
            case "one":
              return "4.66666666667%";
            case "two":
              return "13.3333333333%;";
            case "three":
              return "22%";
            case "four":
            case "one-third":
              return "30.6666666667%;";
            case "five":
              return "39.3333333333%;";
            case "six":
            case "one-half":
              return "48%;";
            case "seven":
              return "56.6666666667%;";
            case "eight":
            case "two-thirds":
              return "65.3333333333%;";
            case "nine":
              return "74.0%";
            case "ten":
              return "82.6666666667%;";
            case "eleven":
              return "91.3333333333%;";
            case "twelve":
              return "100%";
          }
        }}
    }
    @media (min-width: 750px) {}
    @media (min-width: 1000px) {}
    @media (min-width: 1200px) {}
`;

function Column({ column, offset, children, ...rest }) {
  return (
    <ColumnStyled column={column} offset={offset} {...rest}>
      {children}
    </ColumnStyled>
  );
}

Column.propTypes = {
  offset: null,
}

Column.propTypes = {
  column: PropTypes.string.isRequired,
  offset: PropTypes.string
}

export default Column;
