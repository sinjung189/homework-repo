import {
  ReactBox,
  HomePage,
  ReactWrapper,
  ContentText,
} from "../style/ContentStyle";

import { HomeButton } from "../style/HomeStyle";
export default function ReactPage() {
  return (
    <ReactWrapper>
      <ReactBox>
        <h2 style={{ fontSize: "35px" }}> SAP..</h2>
        <ContentText>깜빡임 없어서 좋다..</ContentText>
        <HomeButton to="/list"> ← 목록으로</HomeButton>
        <HomePage to="/">← 홈으로</HomePage>
      </ReactBox>
    </ReactWrapper>
  );
}
