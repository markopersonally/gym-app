import styled from "styled-components";

export const H2 = styled.h2`
  border-top: 3px solid #fff;
  padding-top: 70px;
  margin-top: 200px;
  text-align: center;
  font-size: xx-large;
  color: #f5deb3;
`;

export const Table = styled.table`
  padding: 50px 0;
  width: 100%;
  font-size: large;
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
