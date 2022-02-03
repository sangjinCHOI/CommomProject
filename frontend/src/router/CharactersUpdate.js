import { InputIcon, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

// characterStore의 update reducer를 import
import { update } from "../store/charactersStore";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function CharactersCreate({ charactersSlice, updateCharacters }) {
  const maxLen = (value) => value.length <= 50;
  const introduction = useInput("", maxLen);

  const [userSeq, setUserSeq] = useState(0);
  const [characterSeq, setCharacterSeq] = useState(0);
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const characterUpdate = (e) => {
    e.preventDefault();

    const data = {
      characterSeq: 9, // 링크연결갱신갱신 이었던 캐릭터
      introduction: introduction.value,
      nickname,
    };

    // characterStore.js의 update reducer 실행
    updateCharacters({ data });

    console.log(data);
    axios
      .put("http://localhost:8080/character", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        alert("캐릭터 수정이 완료되었습니다.");
        history.push("../characters/select");
      })
      .catch((err) => console.log(err));
    history.push("../characters/select");
  };

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <Link to="../characters/select">
        <span className="material-icons text-xl m-4 absolute top-0">arrow_back 취소</span>
      </Link>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24 w-96"
      />
      <CharacterImg underText="변경" />
      <div className="w-96 mx-auto mt-8">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            outline={true}
            iconName="edit"
            placeholder="닉네임을 입력하세요."
            onChange={onNicknameHandler}
          />
        </div>
        <div className="bg-white rounded-lg text-gray-400 my-8">
          <input
            type="text"
            value="요리"
            disabled
            className="my-3 block w-full px-3 py-2 border border-slate-300 rounded-md disabled:bg-slate-300 disabled:text-black-500"
          />
        </div>
        <div className="relative bg-white rounded-lg" style={{ height: 185 }}>
          <Textarea
            placeholder="한 줄 소개를 입력하세요."
            outline={true}
            color="lightBlue"
            className="mt-8"
            {...introduction}
          />
          <div className="absolute right-5 bottom-3 text-gray-400">
            {introduction.value.length} / 50
          </div>
        </div>
      </div>
      <div className="text-center text-2xl mt-16 flex justify-center">
        <Link to="../characters/select" onClick={characterUpdate}>
          <span>캐릭터 저장</span>
        </Link>
      </div>
    </>
  );
}

// characterSlice를 return 함으로써 여기서 props로 받아올 수 있는듯?
function mapStateToProps(state) {
  return { charactersSlice: state.character };
}

function mapDispatchToProps(dispatch) {
  return { updateCharacters: (characters) => dispatch(update(characters)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersCreate);
