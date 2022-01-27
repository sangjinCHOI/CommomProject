import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Content from "../components/Content";

export default function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <MainCard border="border">
        <CharacterProfile nickname={nickname} />
      </MainCard>
      <div className="flex justify-center items-center border">
        <Content />
      </div>
      <div className="flex justify-center items-center border">
        <Content />
      </div>
      <div className="flex justify-center items-center border">
        <Content />
      </div>
    </div>
  );
}
