import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 45px;
  background: rgb(1, 11, 40);

  border-top: 5px solid orange;
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #ffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    margin: 0 15px;
  }

  span {
    color: white;
  }
`;
