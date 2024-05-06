import styled from "styled-components";
import imgMainPage from "../images/man-woman.jpg";

export const Button = styled.button`
  background-color: #c9b8b8;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #000;
  border-radius: 3px;
  transition: ease-in 1s;

  &.open {
    font-size: x-large;
    text-transform: capitalize;
    width: 250px;
    padding: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ff6347;
    border: none;
    color: #fff;
  }

  &:hover {
    background: #3f3f32;
    cursor: pointer;
  }

  &:hover.close {
    background: #ff6347;
  }

  &:hover.send {
    background: #32cd32;
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
  background-color: #4e3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid #000;
  border-radius: 20px;
`;

export const Label = styled.label`
  letter-spacing: 2px;
  font-size: large;
  text-transform: uppercase;
  color: #fff;
  margin: 10px auto;
  border-bottom: 1px solid #fff;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${imgMainPage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
