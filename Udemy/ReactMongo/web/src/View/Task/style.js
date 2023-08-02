import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: center;

  button {
    border: none;
    background: none;
  }
`;

export const form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(243, 243, 245);
  border-radius: 25px;
  margin-top: 20px;
  box-shadow: 1px 3px 13px 1px rgba(33, 32, 56, 0.4);

  width: 70%;
  max-width: 1200px;
  height: auto;

  #ContainerAll {
    text-align: center;
    width: 100%;
    padding: 10px;

    .inative {
      opacity: 0.3;
      transition: all 0.3s ease-in;
      width: 35px;
      height: 35px;
      border-radius: 25%;
      &:hover {
        cursor: pointer;
        opacity: 0.99;
      }
    }
  }
`;

export const typeIcons = styled.div`
  width: 100%;

  img {
    width: 55px;
    height: 55px;
    margin: 10px;
    margin-bottom: 30px;
    border-radius: 25%;
  }
`;
export const titleTsak = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  font-size: 1.2rem;
  color: rgb(11, 21, 90);

  span {
    margin: 10px 0;
  }

  input {
    font-size: 1.2rem;
    color: rgb(11, 21, 90);
    padding: 7px;
    border: none;
    border-bottom: 2px solid orange;
  }
`;
export const textArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  font-size: 1.2rem;
  color: rgb(11, 21, 90);

  span {
    margin: 10px 0;
  }

  textarea {
    font-size: 1.2rem;
    color: rgb(11, 21, 90);
    padding: 7px;
    border: none;
    border-bottom: 2px solid orange;
  }
`;
