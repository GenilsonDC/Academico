import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 20px;
  }
  button {
    border: none;
    background: none;
  }
`;

export const form = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  margin: 15px;
  box-shadow: 1px 3px 13px 1px rgba(13, 52, 96, 0.4);
  width: 90%;
  max-width: 1200px;
  height: auto;

  #ContainerAll {
    background: rgb(243, 243, 245);
    border-radius: 25px;
    width: 100%;
    height: auto;
    padding: 30px;
    text-align: center;
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
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin: 10px;
    margin-bottom: 20px;
  }
`;
export const titleTsak = styled.div`
  text-indent: 20px;
  align-items: start;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  color: rgb(11, 40, 89);

  input {
    width: 100%;
    font-size: 1.2rem;
    color: rgb(11, 40, 89);
    padding: 7px;
    border: none;
    border-bottom: 2px solid orange;
    border-radius: 10px;
  }
`;
export const textArea = styled.div`
  display: flex;
  text-indent: 20px;
  align-items: start;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  color: rgb(11, 40, 89);

  textarea {
    width: 100%;
    font-size: 1.2rem;
    color: rgb(11, 40, 89);
    padding: 7px;
    border: none;
    border-bottom: 2px solid orange;
    border-radius: 15px;
  }
`;

export const state = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;

  color: rgb(201, 91, 10);

  input {
    height: 1.7rem;
    width: 1.7rem;
    cursor: pointer;
  }

  button {
    margin-top: 5px;
    font-size: 1.2rem;
    height: 45px;
    width: 120px;
    color: rgb(11, 40, 89);
    background: rgb(251, 251, 251);
    border-radius: 15px;
    border-bottom: 2px solid rgb(11, 40, 89);
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease-in;
      background: rgb(251, 21, 60);
      color: white;
    }
  }
`;

export const btnSave = styled.div`
  width: 100%;
  button {
    font-size: 1.8rem;
    height: 65px;
    width: 75%;
    color: rgb(251, 251, 250);
    background: rgb(251, 91, 10);
    border-radius: 35px;
    border-bottom: 2px solid rgb(11, 40, 89);
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease-in;
      opacity: 0.8;
      background: rgb(11, 40, 89);
    }
  }
`;
