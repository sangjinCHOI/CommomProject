import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";

export default function SearchCharacters({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  const nicknameList = ["아무개", "코딩하는노예", "김치찌개", "맥주한잔", "넷플릭스", "흐으으음"];
  return (
    <div>
      <div className="my-4">'{query}' 캐릭터 검색 결과</div>
      <MainCard classes="border rounded">
        {nicknameList.map((nickname) => (
          <CharacterProfile nickname={nickname} isMe={false} key={nickname} classes="my-8" />
        ))}
      </MainCard>
    </div>
  );
}
