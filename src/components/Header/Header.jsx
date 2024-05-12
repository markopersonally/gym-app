import { useState } from "react";
import {
  HeaderStyle,
  DivContainerLogo,
  Logo,
  LinkWrapper,
  LinkStyled,
  LinkAStyled,
  Nav,
  NavMobile,
  NavMobileBox,
  FaBarsStyled,
} from "./HeaderStyled.jsx";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderStyle>
      <Nav>
        <DivContainerLogo>
          <Logo />
        </DivContainerLogo>
        <LinkWrapper>
          <LinkStyled>
            <LinkAStyled href="#home">home</LinkAStyled>
          </LinkStyled>
          <LinkStyled>
            <LinkAStyled href="#membership">membership</LinkAStyled>
          </LinkStyled>
          <LinkStyled>
            <LinkAStyled href="#gallery">gallery</LinkAStyled>
          </LinkStyled>
          <LinkStyled>
            <LinkAStyled href="#about">about us</LinkAStyled>
          </LinkStyled>
          <LinkStyled>
            <LinkAStyled href="#contact">contact</LinkAStyled>
          </LinkStyled>
        </LinkWrapper>
      </Nav>
      <NavMobile>
        <NavMobileBox>
          <DivContainerLogo>
            <Logo className="mobile" />
          </DivContainerLogo>
          <FaBarsStyled onClick={toggleMenu}>
            <FaBars />
          </FaBarsStyled>
        </NavMobileBox>
        {isOpen && (
          <LinkWrapper className={`nav-mobile ${isOpen ? "" : "display-none"}`}>
            <LinkStyled>
              <LinkAStyled href="#home">home</LinkAStyled>
            </LinkStyled>
            <LinkStyled>
              <LinkAStyled href="#membership">membership</LinkAStyled>
            </LinkStyled>
            <LinkStyled>
              <LinkAStyled href="#gallery">gallery</LinkAStyled>
            </LinkStyled>
            <LinkStyled>
              <LinkAStyled href="#about">about us</LinkAStyled>
            </LinkStyled>
            <LinkStyled>
              <LinkAStyled href="#contact">contact</LinkAStyled>
            </LinkStyled>
          </LinkWrapper>
        )}
      </NavMobile>
    </HeaderStyle>
  );
}
