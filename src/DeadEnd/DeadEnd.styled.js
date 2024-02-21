import styled from "styled-components";

export const DeadEndBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  gap: 12px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const DeadEndHeading = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #d75576;
  font-family: PoppinItalic;
`;

export const DeadEndInnerBox = styled.div`
  width: 100%;
  max-width: max-content;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GifBox = styled.div`
  width: 200px;
  height: 200px;
  background: url(https://i.pinimg.com/originals/5a/51/9a/5a519ab7fbf494265b7ba09de84b05aa.gif);
  background-position: right;
  background-size: cover;
`;

export const RightBoxSubtitle = styled.div``;

export const SubTitle = styled.span`
  color: #fff;
  /* font-family: PoppinNormalItalic; */
`;
export const SubTitleBox = styled.div`
  width: 100%;
`;

export const ButtonContainer=styled.div`
    width: 100%;
    max-width: 200px;
`
