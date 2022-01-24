import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";

export default function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <CharacterProfile nickname={nickname} />
    </div>
  );
}
