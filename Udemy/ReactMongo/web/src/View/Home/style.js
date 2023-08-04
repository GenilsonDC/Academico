import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  text-align: right;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;

  button {
    background: none;
    border: none;
  }
`;
export const TaskCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  a {
    text-decoration: none;
    color: darkgray;
  }
`;
export const Toptitle = styled.div`
  width: 100%;
  border-bottom: 7px solid rgb(231, 231, 231);

  justify-content: center;
  display: flex;

  h1 {
    top: 1.4rem;
    color: rgb(11, 40, 89);
    position: relative;
    background: white;
    padding: 0 20px;
  }
`;
