import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Send from "../config/Send";

function SearchCharacters({ characterSlice, location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const [charactersResultList, setCharactersResultList] = useState([]);
  const getCharactersResult = () => {
    setCharactersResultList([]);
    Send.get(`/search/characters/${query}`).then((res) => {
      // console.log(res);
      setCharactersResultList(res.data);
    });
  };

  useEffect(() => {
    getCharactersResult();
  }, [query]);

  return (
    <div>
      <div className="my-4">'{query}' 캐릭터 검색 결과</div>
      <MainCard classes="border rounded">
        {charactersResultList.map((character) => (
          <CharacterProfile
            nickname={character.nickname}
            isMe={characterSlice.characterSeq === character.characterSeq}
            key={character.characterSeq}
            classes="my-8"
          />
        ))}
      </MainCard>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character, userSlice: state.user };
}

export default connect(mapStateToProps)(SearchCharacters);
