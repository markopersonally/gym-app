import styled from "styled-components";
import logo from "../../images/logo-fox.jpg";

export const HeaderStyle = styled.header`
  width: 100%;
  max-width: 1400px;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: wheat;
  z-index: 1;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const DivContainerLogo = styled.div`
  width: 100px;
  height: 100px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${logo});
  background-size: cover;
  border-radius: 50%;
  transition: ease-in-out 0.7s;

  &:hover {
    background-color: #af412d;
    cursor: pointer;
  }

  &.mobile {
    width: 70px;
    height: 70px;
  }
`;

export const LinkWrapper = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  &.nav-mobile {
    padding: 50px;
    background-color: #000;
    flex-direction: column;
    text-align: center;
  }
`;

export const LinkStyled = styled.li`
  background-color: #ff6347;
  padding: 10px;
  list-style: none;
  border: 1px solid #282828;
  border-radius: 10px;
  transition: ease-in-out 0.7s;

  &:hover {
    background-color: #af412d;
    transition: all 1s;
    cursor: pointer;
  }

  .nav-mobile {
    justify-content: center;
  }
`;

export const LinkAStyled = styled.a`
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none;
  color: #f5deb3;
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: 850px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
`;

export const NavMobileBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FaBarsStyled = styled.div`
  font-size: 70px;

  &:hover {
    color: #af412d;
    cursor: pointer;
    transition: all 1s;
  }
`;
