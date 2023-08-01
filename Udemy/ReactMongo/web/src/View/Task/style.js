import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: center;
`;

export const form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(243, 243, 245);
  width: 70%;
  max-width: 1200px;
  height: auto;
`;

export const typeIcons = styled.div`
  width: 100%;

  img {
    width: 45px;
    height: 45px;
    margin: 10px;
    opacity: 0.7;

    &:hover {
      cursor: pointer;
      width: 60px;
      height: 60px;
      opacity: 1;
    }
  }
`;
