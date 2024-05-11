import styled from "styled-components";
import photo from "../../images/garage.jpg";

export const H2 = styled.h2`
  border-top: 3px solid #fff;
  padding-top: 70px;
  margin-top: 70px;
  text-transform: uppercase;
  text-align: center;
  font-size: xx-large;
  color: #f5deb3;
  z-index: 3;
`;

export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const Paragraph = styled.p`
  font-size: large;
  width: 500px;
  text-align: center;
  color: #f5deb3;
  letter-spacing: 1px;
`;

export const Photo = styled.div`
  height: 350px;
  width: 500px;
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`;
