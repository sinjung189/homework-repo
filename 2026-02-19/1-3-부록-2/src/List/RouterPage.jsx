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
        <h2 style={{ fontSize: "35px" }}>Router 정복하기</h2>
        <ContentText>나랑 조금 친해졌으니.. 더 친해져 보자..</ContentText>
        <HomeButton to="/list"> ← 목록으로</HomeButton>
        <HomePage to="/">← 홈으로</HomePage>
      </ReactBox>
    </ReactWrapper>
  );
}

// 일반 링크연결 연습 후 동적 작업해보고 스타일 가져가서 씀~
