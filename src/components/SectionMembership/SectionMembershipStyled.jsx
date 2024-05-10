import styled from "styled-components";

export const Section = styled.section`
  margin: 50px 0;
  position: relative;
  height: 100vh;
`;

export const H2 = styled.h2`
  margin-top: 200px;
  text-align: center;
  font-size: xx-large;
  color: #f5deb3;
`;

export const Table = styled.table`
  width: 80%;
  font-size: large;
  margin: 40px 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  color: #f5deb3;
  text-align: center;
  border-radius: 20%;
`;

export const THead = styled.thead`
  background-color: #af412d;
  padding: 15px;
`;

export const THeadTh = styled.th`
  text-align: center;
  border: 1px solid #000;
  padding: 25px;
`;

export const THeadTr = styled.tr`
  background-color: #af412d;
  padding: 15px;
  text-align: center;
  font-size: x-large;
`;

export const TBody = styled.tbody`
  padding: 15px;
  background-color: tomato;
`;

export const TBodyTd = styled.td`
  padding: 15px 15px;
  background-color: #ff6347;
  border: 1px solid #000;

  &.bgc {
    background-color: #af412d;
  }
`;
