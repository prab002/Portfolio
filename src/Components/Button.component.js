import styled from "styled-components";

export const SimpleButton = styled.button`
  border: 1px solid #ffcad4;
  background: transparent;
  color: #000;
  padding: 9px;
  font-weight: bold;
  margin: 12px 12px 0 0;
  border-radius: 12px;
  box-shadow: 0 0 8px;

  &:hover {
    background: #ffcad4;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      background: #ffcad4;
      color: #000;
    }
  }
`;
