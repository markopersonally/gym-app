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
  margin: auto;
  margin-top: 50px;
  width: 100%;
  font-size: large;
  color: #f5deb3;
  text-align: center;
  border-radius: 20%;

  @media (max-width: 465px) {
    font-size: medium;
  }
`;

export const THead = styled.thead`
  background-color: #af412d;
`;

export const THeadTh = styled.th`
  text-align: center;
  border: 1px solid #000;
  padding: 25px;

  @media (max-width: 750px) {
    padding: 15px;
  }
`;

export const THeadTr = styled.tr`
  background-color: #af412d;
  text-align: center;
  font-size: x-large;
`;

export const TBody = styled.tbody`
  background-color: tomato;
`;

export const TBodyTd = styled.td`
  padding: 15px;
  background-color: #ff6347;
  border: 1px solid #000;

  &.bgc {
    background-color: #af412d;
  }

  @media (max-width: 750px) {
    padding: 5px;
  }
`;
