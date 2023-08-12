import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const FilterArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  button {
    background: none;
    border: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 7px solid rgb(231, 231, 231);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3 {
    color: rgb(11, 40, 89);
    position: relative;
    top: 30px;
    background: #fff;
    padding: 0 20px;
  }
`;
