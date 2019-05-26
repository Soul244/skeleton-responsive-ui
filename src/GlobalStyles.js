import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
    font-size: 62.5%; 
    font-family: sans-serif; 
    -ms-text-size-adjust: 100%; 
    -webkit-text-size-adjust: 100%; 
    }
    body {
        margin: 0;
        font-size: 1.5em;
        line-height: 1.6;
        font-weight: 400;
        font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #222; 
    }
    p {
        margin-top: 0; 
    }
    a {
        color: #1EAEDB; 
        background-color: transparent;
    }
    a:hover {
        color: #0FA0CE; 
    }
    a:active,
    a:hover {
    outline: 0;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    th,
    td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #E1E1E1; }
    th:first-child,
    td:first-child {
    padding-left: 0; }
    th:last-child,
    td:last-child {
    padding-right: 0; }
    ul {
    list-style: circle inside; }
    ol {
    list-style: decimal inside; }
    ol, ul {
    padding-left: 0;
    margin-top: 0; }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%; }
    li {
    margin-bottom: 1rem; }
    textarea,
    select,
    fieldset {
    margin-bottom: 1.5rem; }
    pre,
    blockquote,
    dl,
    figure,
    table,
    p,
    ul,
    ol,
    form {
    margin-bottom: 2.5rem; }
    label,
    legend {
    display: block;
    margin-bottom: .5rem;
    font-weight: 600; }
    fieldset {
    padding: 0;
    border-width: 0; }
    input[type="checkbox"],
    input[type="radio"] {
    display: inline; }
    label > .label-body {
    display: inline-block;
    margin-left: .5rem;
    font-weight: normal; }
    img {
    border: 0;
    }
    svg:not(:root) {
    overflow: hidden;
    }
    code {
    padding: .2rem .5rem;
    margin: 0 .2rem;
    font-size: 90%;
    white-space: nowrap;
    background: #F1F1F1;
    border: 1px solid #E1E1E1;
    border-radius: 4px; }
    pre > code {
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre; }
    pre {
        overflow: auto;
    }

`;

export default GlobalStyles;
