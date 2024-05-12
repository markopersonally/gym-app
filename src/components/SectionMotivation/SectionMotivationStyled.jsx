import styled from "styled-components";

export const ContainerUl = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const Paragrafh = styled.p`
  font-size: xx-large;
  font-style: italic;
  text-align: center;
  color: #f5deb3;
`;

export const Button = styled.button`
  font-size: large;
  font-weight: bold;
  color: #f5deb3;
  background-color: #ff6347;
  padding: 10px;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease-in 0.7s;

  &:hover {
    background-color: #af412d;
  }

  &.active {
    font-style: italic;
    scale: 0.9;
    background-color: #af412d;
    border: 1px solid #000;
  }
`;

export const Wrapper = styled.div`
  border-radius: 30px;
  box-shadow: 2px 2px 40px -11px #ff6347;
  margin: 30px auto;
  width: 500px;
  height: 400px;
  font-style: italic;
  text-align: center;
  font-size: large;
  color: #f5deb3;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
`;
