import { Section, Container, SimpleButton } from "../Components";
import {
  ButtonContainer,
  DeadEndBox,
  DeadEndHeading,
  DeadEndInnerBox,
  GifBox,
  RightBoxSubtitle,
  SubTitle,
  SubTitleBox,
} from "./DeadEnd.styled";

export function DeadEnd() {
  return (
    <>
      <Section>
        <Container>
          <DeadEndBox>
            <DeadEndInnerBox>
              <DeadEndHeading>404!</DeadEndHeading>
              <DeadEndHeading>Not Found</DeadEndHeading>
              <GifBox />
            </DeadEndInnerBox>
            <RightBoxSubtitle>
              <SubTitleBox>
                <SubTitle>You Have reach Wrong Place!!</SubTitle>
              </SubTitleBox>
              <SubTitleBox>
                <SubTitle>Get in touch</SubTitle>
              </SubTitleBox>
              <ButtonContainer>
                <SimpleButton>
                  <a href="https://github.com/prab002" children="GITHUB" />
                </SimpleButton>
                <SimpleButton>
                  <a
                    href="https://www.linkedin.com/in/prabhanjan-sharma-38a48a221/"
                    children="LINKEDIN"
                  />
                </SimpleButton>
                <SimpleButton>
                  <a
                    href="https://www.instagram.com/oneul_hal?igsh=MWRmMjZydHkzY2w5MA%3D%3D&utm_source=qr"
                    children="INSTAGRAM"
                  />
                </SimpleButton>
              </ButtonContainer>
            </RightBoxSubtitle>
          </DeadEndBox>
        </Container>
      </Section>
    </>
  );
}
