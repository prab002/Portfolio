import { Container, NavigationButton, Section } from "../Components";
import {
  HeaderStyle,
  LinkText,
  MobileNavigation,
  StyledNavBarBox,
} from "./Navbar.styled";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };
  const handleNavigateContact = () => {
    navigate("/");
  };

  const handleNavigateToGitHub = () => {
    window.location.href = "https://github.com/prab002";
  };

  return (
    <>
      <Section>
        <Container>
          <HeaderStyle>
            <LinkText to="/">PRAB</LinkText>
            <StyledNavBarBox>
              <NavigationButton onClick={handleNavigateHome}>
                PROJECT
              </NavigationButton>
              <NavigationButton onClick={handleNavigateToGitHub}>
                GITHUB
              </NavigationButton>
              <NavigationButton onClick={handleNavigateContact}>
                CONTACT
              </NavigationButton>
              <MobileNavigation src="https://i.pinimg.com/originals/5d/87/91/5d8791e7eb6b8991268b3f454d613338.gif" />
            </StyledNavBarBox>
          </HeaderStyle>
        </Container>
      </Section>
    </>
  );
}
