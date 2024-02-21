import styled from "styled-components";

export const NavigationButton = styled.button`
  background: transparent;
  border: 2px solid #fff;
  margin: 12px;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: medium;
  font-weight: bold;

  &:hover {
    background: url(https://i.pinimg.com/originals/54/b9/79/54b9796099e988048cfe640a36586941.gif);
    background-position: center;
    background-size: cover;
  }

  @media (max-width: 991px) {
    display :none ;
  }
`;