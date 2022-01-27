import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Content from "../components/Content";

export default function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <MainCard>
        <CharacterProfile nickname={nickname} />
        <div className="flex justify-center items-center">
          <Content />
        </div>
        <div className="flex justify-center items-center">
          <Content />
        </div>
        <div className="flex justify-center items-center">
          <Content />
        </div>
      </MainCard>
    </div>
  );
}
