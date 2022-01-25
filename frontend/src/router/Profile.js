import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";

export default function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <CharacterProfile nickname={nickname} />
      <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
      <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
      <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
    </div>
  );
}
