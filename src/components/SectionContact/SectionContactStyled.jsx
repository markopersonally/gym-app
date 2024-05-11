import styled from "styled-components";

export const H2 = styled.h2`
  border-top: 3px solid #fff;
  padding-top: 70px;
  margin: 100px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: xx-large;
  color: #f5deb3;
`;

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  color: #f5deb3;
`;

export const ContainerItem = styled.div`
  width: 250px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  font-size: large;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 40px -11px #ff6347;
`;

export const Icon = styled.h3`
  padding: 5px;
  box-shadow: 2px 2px 40px -11px #ff6347;
  border-radius: 20px;
  font-size: 40px;
`;
