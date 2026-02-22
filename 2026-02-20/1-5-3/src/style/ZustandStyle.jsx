import styled from "@emotion/styled";

export const ZustandBox = styled.div`
  width: 100%;
  min-width: 300px;
  height: 250px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 15px;
  background-color: #ebebf1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ZustandButton = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  gap: 15px;
  background-color: #ececec;
  box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #9999ddeb;
  }
`;

export const CountButton = styled.button`
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow:
      -2px 4px 0px rgba(231, 230, 230, 0.3),
      -2px 4px 0px rgba(231, 230, 230, 0.3),
      2px 4px 0px rgba(231, 230, 230, 0.3),
      2px 4px 0px rgba(231, 230, 230, 0.3);
  }
  &:active {
    transition: 0.5s ease;
    box-shadow: none;
  }
`;
