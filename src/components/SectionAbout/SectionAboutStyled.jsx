import styled from "styled-components";
import photo from "../../images/garage.jpg";

export const H2 = styled.h2`
  margin-top: 70px;
  text-transform: uppercase;
  text-align: center;
  font-size: xx-large;
  color: #f5deb3;
  z-index: 3;
`;

export const Container = styled.div`
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-size: large;
  width: 500px;
  text-align: center;
  color: #f5deb3;
  letter-spacing: 1px;
`;
