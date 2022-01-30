import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Content from "../components/Content";

export default function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <MainCard classes="border">
        <CharacterProfile
          nickname={nickname}
          category="요리"
          introduction="안녕하세요 반갑습니다 팔로우해주세요 감사합니다 수고하세요"
        />
      </MainCard>
      <div className="border">
        <Content />
      </div>
      <div className="border">
        <Content />
      </div>
      <div className="border">
        <Content />
      </div>
    </div>
  );
}
