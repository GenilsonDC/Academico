import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 45px;
  background: rgb(1, 11, 40);
  border-bottom: 5px solid orange;
  display: flex;
`;

export const leftSide = styled.div`
  width: 50%;
  height: 45px;

  img {
    width: 110px;
    height: 46px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export const righttSide = styled.div`
  width: 50%;
  height: 45px;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #ffff;

    margin: 0 15px;
  }
  a:hover {
    color: orange;
  }

  #notification {
    img {
      width: 30px;
      height: auto;
    }
    span {
      position: relative;
      top: -17px;
      right: 10px;
      padding: 3px 6px;
      font-size: 1rem;
      font-weight: bold;
      background: rgb(251, 11, 90);
      color: rgb(1, 11, 40);
      border-radius: 50%;
    }
    &:hover {
      opacity: 0.4;
    }
  }

  .tabs::before {
    content: "|";
    color: white;
  }
`;
