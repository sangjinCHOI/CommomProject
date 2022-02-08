import { InputIcon, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";
import Send from "../config/Send";

import { update } from "../store/characterStore";

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
  return { value, onChange, setValue };
};

function CharacterUpdate({ updateCharacter, location }) {
  const maxLen = (value) => value.length <= 50;
  const introduction = useInput("", maxLen);

  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const characterSeq = location.state.characterSeq;
  const getCharacter = () => {
    Send.get(`/character/${characterSeq}`).then((res) => {
      setNickname(res.data.nickname);
      introduction.setValue(res.data.introduction);
    });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const characterUpdate = (e) => {
    e.preventDefault();

    const character = {
      characterSeq,
      introduction: introduction.value,
      nickname,
    };

    updateCharacter({ character });

    Send.put("/character", JSON.stringify(character))
      .then(() => {
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
            value={nickname}
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

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

function mapDispatchToProps(dispatch) {
  return { updateCharacter: (character) => dispatch(update(character)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterUpdate);
