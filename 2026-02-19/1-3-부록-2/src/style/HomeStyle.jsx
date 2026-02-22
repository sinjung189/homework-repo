import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HomeLayout = styled.div`
  width: 100%;
  max-width: 550px;
  height: 440px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 15px;
  background-color: #ebebf1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const HomeHeader = styled.h1`
  color: #333;
  font-size: 36px;
  font-weight: bold;
`;

const HomeButton = styled(Link)`
  width: 100%;
  height: 45px;
  max-width: 200px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 12px;
  transition: 0.2s ease;
  border: 2px solid #ccc;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
    background-color: #4846f7dd;
    border: 2px solid #363535;
    color: white;
  }
`;

export { HomeLayout, HomeHeader, HomeButton };
