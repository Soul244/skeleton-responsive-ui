import styled from "styled-components";
import Utils from "../../Utils";

const ContainerStyled = styled.div`
  ${Utils}
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  :after {
    content: "";
    display: table;
    clear: both;
  }
  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }
  @media (min-width: 550px) {
    width: 80%;
  }
`;

export default ContainerStyled;
