import { TypeAnimation } from "react-type-animation";
import { Container, Section } from "../Components";
import {
  AssetBox,
  HomeInnerContainer,
  HomeTitle,
  StyledCoolImage,
  Textrt,
} from "./Home.styled";

export function Home() {
  return (
    <>
      <Section>
        <Container>
          <HomeInnerContainer>
            <HomeTitle>
              <TypeAnimation
                sequence={[
                  "PRABHANJAN",
                  2000,
                  "DEVELOPER",
                  2000,
                  "LEARNER",
                  2000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </HomeTitle>
            <AssetBox>
              <div>
                <StyledCoolImage src="https://i.pinimg.com/originals/c4/67/13/c4671376fad5ff9cc8a83c3f2174fd73.gif" />
                🕸️..
              </div>
              <Textrt>오늘 해라</Textrt>
            </AssetBox>
          </HomeInnerContainer>
        </Container>
      </Section>
    </>
  );
}
