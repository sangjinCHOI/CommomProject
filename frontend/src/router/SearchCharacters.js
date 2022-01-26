import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";

export default function SearchCharacters({ location }) {
  console.log(location);
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  const nicknameList = ["아무개", "코딩하는노예", "김치찌개", "맥주한잔", "넷플릭스", "흐으으음"];
  return (
    <div>
      <MainCard>
        {nicknameList.map((nickname) => (
          <CharacterProfile nickname={nickname} />
        ))}
      </MainCard>
    </div>
  );
}
