import styled from "styled-components";

export const H2 = styled.h2`
  text-align: center;
  font-size: xx-large;
  color: #f5deb3;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 70px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 40px -11px #ff6347;
`;

export const BoxPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  color: #f5deb3;
  font-size: large;
  font-weight: bolder;
`;

export const BoxPanelItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  font-style: italic;
  color: #ff6347;
`;
