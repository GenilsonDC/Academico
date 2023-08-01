import styled from "styled-components";

export const container = styled.div`
  width: 160px;
  height: 45px;
  border-radius: 15px 15px 29px 29px;

  background: ${(props) =>
    props.isSelected ? `rgb(21, 211, 210)` : `rgb(1, 11, 40)`};
  padding: 15px;
  box-shadow: 8px 3px 13px -4px rgba(33, 32, 56, 0.4);

  border-bottom: 3px solid rgb(251, 181, 40);
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(21, 211, 210, 1);
  }

  img {
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }
  span {
    color: white;

    align-self: center;
    font-size: 1.3rem;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
