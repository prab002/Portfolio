import styled from "styled-components";

export const HomeInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const HomeTitle = styled.span`
  font-size: 6rem;
  font-weight: bold;
  font-family: PoppinBold;
  text-align: center;
  width: 100%;

  @media (max-width: 991px) {
    font-size: 1rem;
  }
`;

export const AssetBox = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const StyledCoolImage = styled.img`
  width: 40px;
  height: 25px;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 0 0 10px;
  border-radius: 8px;
`;

export const Textrt = styled.div`
  font-weight: 900;
  font-size: small;
  margin: 12px;
`;

export const MacBox = styled.div`
  width: 600px;
  height: 900px;
  

  @media (max-width: 991px) {
    width: 319px;
    height: 319px;
  }
`;
