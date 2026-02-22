import {
  ContentListWrapper,
  ContentBox,
  HomePage,
  ReactContent,
} from "../style/ContentStyle";

export default function ContentListPage() {
  const postsList = [
    { id: 1, title: "React" },
    { id: 2, title: "SPA.." },
    { id: 3, title: "Router 정복하기" },
  ];

  // 링크 객체데이터 방식 활용 (배열 0,1,2 이다보니 에러때문에 index+1 넣음)

  return (
    <ContentListWrapper>
      <ContentBox>
        <h1>글 목록</h1>
        {postsList.map((post, index) => (
          <ReactContent key={index} to={`/post/${index + 1}`}>
            {index + 1}. {post.title}
          </ReactContent>
        ))}
        <HomePage to="/"> ← 홈으로</HomePage>
      </ContentBox>
    </ContentListWrapper>
  );
}
