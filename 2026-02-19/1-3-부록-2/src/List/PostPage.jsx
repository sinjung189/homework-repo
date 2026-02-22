import { useParams } from "react-router-dom";
import { HomeButton } from "../style/HomeStyle";
import {
  ReactWrapper,
  ReactBox,
  ContentText,
  NumberDisplay,
} from "../style/ContentStyle";

export default function PostPage() {
  const { id } = useParams();

  const posts = [
    { title: "React", content: "React는 정말 재미있다... ( 거리두자..)" },
    { title: "SPA..", content: "깜빡임 없어서 좋다..." },
    {
      title: "Router 정복하기",
      content: "이제야 조금 친해졌으니.. 살짝 거리둘까..?..",
    },
  ];

  const post = posts[id - 1];

  // 따로 분리하다보니 map 활용하면 좋겠다 싶어서 중간에 로직 바꿈

  return (
    <ReactWrapper>
      <NumberDisplay>{id}번 상세페이지</NumberDisplay>
      <ReactBox>
        <h2 style={{ fontSize: "35px" }}>{post.title}</h2>
        <ContentText>{post.content}</ContentText>
        <HomeButton to="/list"> ← 목록으로</HomeButton>
      </ReactBox>
    </ReactWrapper>
  );
}
