import styled from "styled-components";

export const SimpleButton = styled.button`
  border: 1px solid #FFCAD4;
  background: transparent;
  color: #000;
  padding: 9px;
  font-weight: bold;
  margin: 12px 12px 0 0;
  border-radius: 12px;
  box-shadow: 0 0 8px;

  &:hover {
    background: #FFCAD4;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
    background: #FFCAD4;
    color: #000;
  }
  }
`;
