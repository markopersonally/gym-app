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
`;

export const LinkWrapper = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
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
`;

export const LinkAStyled = styled.a`
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none;
  color: #f5deb3;
`;
