import styled from "styled-components";
import imgMainPage from "../../images/man-woman.jpg";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${imgMainPage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0000007c;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const H1Style = styled.h1`
  padding: 20px;
  font-size: xx-large;
  font-weight: bolder;
  font-style: italic;
  text-transform: uppercase;
  color: #f5deb3;
  border: 1px solid #f5deb3;
  border-radius: 3px;
`;

export const H2Style = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  animation: myAnim 2s ease 0s 1 normal forwards;

  @keyframes myAnim {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateX(20%);
      color: #f5deb34b;
    }
    10% {
      animation-timing-function: ease-out;
      opacity: 0;
      transform: translateX(-10%);
      color: #f5deb3aa;
    }
    45% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateX(-10%);
      color: #f5deb39a;
    }
    100% {
      animation-timing-function: ease-out;
      transform: translateX(-50%);
      color: #f5deb3;
    }
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
`;

export const Button = styled.button`
  font-size: large;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #000;
  border-radius: 3px;
  transition: ease-in 1s;

  &:hover {
    cursor: pointer;
  }

  &.open {
    font-size: x-large;
    text-transform: capitalize;
    width: 250px;
    padding: 25px;
    background-color: #ff6347;
    border: none;
    color: #f5deb3;
    transition: ease-in-out 0.7s;
  }

  &:hover.open {
    background-color: #af412d;
    cursor: pointer;
  }

  &:hover.close {
    background-color: #ff6347;
  }

  &:hover.send {
    background-color: #32cd32;
  }
`;

export const Form = styled.form`
  padding: 50px;
  margin: auto;
  width: 550px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000e0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
`;

export const FormTitle = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  color: #f5deb3;
  text-align: center;
  font-size: large;
`;

export const Label = styled.label`
  letter-spacing: 2px;
  font-size: large;
  text-transform: uppercase;
  color: #f5deb3;
  margin: 10px auto;
  border-bottom: 1px solid #f5deb3;
`;

export const Input = styled.input`
  width: 200px;
  margin: 5px 0;
  padding: 10px;
  color: #f5deb3;
  background-color: #322d2d;
  border: none;
  border-radius: 10px;

  &:focus {
    border: 1px solid tomato;
  }
`;
