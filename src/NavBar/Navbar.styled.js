import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0px 0 15px;
  gap: 34px;
`;

export const Title = styled.span`
  font-weight: 400;
  color: #fff;
  font-size: 1.8rem;
  margin: 6px;
  font-family: PoppinBlack;
`;

export const StyledNavBarBox = styled.div`
  background: #cbc6bf;
  color: #000;
  width: 100%;
  border-radius: 32px 0 0 32px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

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
  }
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 1.8rem;
  margin: 6px;
  font-family: PoppinBlack;
`;

export const MobileNavigation = styled.img`
  height: 40px;
  width: 40px;
  padding: 12px;
  border-radius: 50px;
  visibility: hidden;

  @media (max-width: 911px) {
    visibility: visible;
  }
`;
