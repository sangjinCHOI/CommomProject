import { InputIcon, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

import { save } from "../store/characterStore";
import Send from "../config/Send";

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

function CharactersCreate({ characterSlice, saveCharacter, location }) {
  const maxLen = (value) => value.length <= 50;
  const introduction = useInput("", maxLen);

  const [categorySeq, setCategorySeq] = useState(0);
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const { userSeq, userId } = location.state;

  const characterSave = (e) => {
    e.preventDefault();
    const data = {
      userSeq, // 현재 DB상에서 id: qkrwhdgns1인 유저
      categorySeq: parseInt(categorySeq),
      nickname,
      introduction: introduction.value,
    };
    console.log(data);
    Send.post("/character", JSON.stringify(data))
      .then((res) => {
        console.log(res);
        alert("캐릭터 생성이 완료되었습니다.");
        Send.get(`/character/characters/${userSeq}`).then((res) => {
          console.log(res.data[res.data.length - 1]);
          saveCharacter(res.data[res.data.length - 1]);
          history.push({
            pathname: "../characters/select",
            props: {
              userId,
              userSeq,
            },
          });
        });
      })
      .catch((err) => console.log(err));
  };

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  const onCategorySeqHandler = (e) => {
    setCategorySeq(e.target.value);
  };

  return (
    <>
      <Link to="../characters/select">
        <span className="material-icons text-xl m-4 absolute top-0">arrow_back 캐릭터 선택</span>
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
        <div className="bg-white rounded-lg text-gray-400">
          <div className="my-8">
            <select
              className="bg-white rounded-lg w-96 h-11 p-2 border border-gray-300 outline-sky-500 text-black"
              onChange={onCategorySeqHandler}
            >
              <option className="rounded-lg h-10" value="0">
                미정
              </option>
              <option className="rounded-lg h-10" value="1">
                요리
              </option>
              <option className="rounded-lg h-10" value="2">
                개발
              </option>
            </select>
          </div>
        </div>
        <div className="relative bg-white rounded-lg" style={{ height: 185 }}>
          <Textarea
            placeholder="한 줄 소개를 입력하세요."
            outline={true}
            color="lightBlue"
            className="mt-8"
            {...introduction} // value={introductionInput.value}
          />
          <div className="absolute right-5 bottom-3 text-gray-400">
            {introduction.value.length} / 50
          </div>
        </div>
      </div>
      <div className="text-center text-2xl mt-16 flex justify-center">
        <Link to="../characters/select" onClick={characterSave}>
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
  return { saveCharacter: (character) => dispatch(save(character)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersCreate);
