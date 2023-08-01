import styled from "styled-components";

export const container = styled.div`
  width: 300px;
  height: 185px;
  border-radius: 15px 15px 29px 29px;
  color: rgb(41, 45, 40);
  background: rgb(241, 241, 240);
  border-bottom: 5px solid rgba(251, 181, 40, 1);
  box-shadow: 8px 3px 13px 1px rgba(3, 12, 56, 0.25);
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: rgba(251, 251, 90, 0.5);
  }
`;

export const topCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  flex-direction: column;
`;
export const bottonCard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-around;

  strong {
    color: orange;
  }
  span {
    color: rgb(14, 31, 40);
  }
`;
