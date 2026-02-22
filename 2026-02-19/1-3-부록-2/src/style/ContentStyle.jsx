import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContentListWrapper = styled.div`
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
  /* justify-content: center; */
  /* align-items: center; */
`;

const ContentBox = styled.div`
  padding: 20px 0 0 40px;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const ReactContent = styled(Link)`
  font-size: 26px;
  font-weight: 800;
  color: #2d2d30;
`;
const RouterContent = styled(Link)`
  font-size: 26px;
  font-weight: 800;
  color: #2d2d30;
`;
const SpaContent = styled(Link)`
  font-size: 26px;
  font-weight: 800;
  color: #2d2d30;
`;

const HomePage = styled(Link)`
  color: black;
  align-self: flex-end;
  padding: 18px;
  font-size: 15px;
  font-weight: 600;
`;

// ==================================React-style=======================================

const ReactWrapper = styled(ContentListWrapper)``;
const ReactBox = styled(ContentBox)`
  display: flex;
  gap: 30px;
`;

const ContentText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const NumberDisplay = styled.p`
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  margin: 0;
  padding: 28px 40px;
`;

export {
  ReactContent,
  RouterContent,
  SpaContent,
  ContentListWrapper,
  ContentBox,
  HomePage,
  ReactWrapper,
  ReactBox,
  ContentText,
  NumberDisplay,
};
