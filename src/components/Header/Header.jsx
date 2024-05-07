import {
  HeaderStyle,
  DivContainerLogo,
  Logo,
  LinkWrapper,
  LinkStyled,
  LinkAStyled,
} from "./HeaderStyled.jsx";

export default function Header() {
  return (
    <HeaderStyle>
      <DivContainerLogo>
        <Logo />
      </DivContainerLogo>
      <nav>
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
      </nav>
    </HeaderStyle>
  );
}
