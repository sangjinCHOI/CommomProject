import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";

export default function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <MainCard>
        <CharacterProfile nickname={nickname} />
        <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
        <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
        <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
      </MainCard>
    </div>
  );
}
