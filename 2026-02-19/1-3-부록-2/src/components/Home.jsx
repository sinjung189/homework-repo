import { HomeLayout, HomeHeader, HomeButton } from "../style/HomeStyle";
import { HOME_EOTICON } from "../Emoticon/HomeEmoticon";

export default function Home() {
  return (
    <HomeLayout>
      <HOME_EOTICON>🏡</HOME_EOTICON>
      <HomeHeader>미니 블로그 홈</HomeHeader>
      <HomeButton to="/list"> 글 목록 보러가기</HomeButton>
    </HomeLayout>
  );
}
