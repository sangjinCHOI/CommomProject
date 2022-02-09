import { InputIcon, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

import { save } from "../store/characterStore";
import Send from "../config/Send";
import File from "../config/File";
import axios from "axios";

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

function CharactersCreate({ saveCharacter, location }) {
  const convertByte = (word) => {
    let totalByte = 0;
    for (let i = 0; i < word.length; i++) {
      if (escape(word[i]).length > 4) {
        totalByte += 2;
      } else {
        totalByte += 1;
      }
    }
    return totalByte;
  };

<<<<<<< HEAD
  const [categorySeq, setCategorySeq] = useState(0);
  const [nickname, setNickname] = useState("");
  const [imgFile, setimgFile] = useState(null);
=======
  // 닉네임만 Byte로 제한
  const nicknameMaxLen = (value) => convertByte(value) <= 16;
  const introductionMaxLen = (value) => value.length <= 50;
  const nickname = useInput("", nicknameMaxLen);
  const introduction = useInput("", introductionMaxLen);

  // const [categorySeq, setCategorySeq] = useState(0);
  const [categoryNumber, setCategoryNumber] = useState(0);
>>>>>>> 11cb5d83869c73e41b8c4c812ac7a51792d3d674
  const history = useHistory();

  const { userSeq, userId } = location.state;

  const characterSave = (e) => {
    const formData = new FormData();
    e.preventDefault();
    const request = {
      userSeq,
      // categorySeq: parseInt(categorySeq),
      categoryNumber: parseInt(categoryNumber),
      nickname: nickname.value,
      introduction: introduction.value,
    };
    formData.append("file", imgFile);
    formData.append("request", new Blob([JSON.stringify(request)], { type: "application/json" }));

    File.post("/character", formData)
      .then((res) => {
        alert("캐릭터 생성이 완료되었습니다.");
        Send.get(`/character/characters/${userSeq}`).then((res) => {
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

<<<<<<< HEAD
  const imgChangeHandler = (e) => {
    setimgFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };
=======
  // const onNicknameHandler = (e) => {
  //   setNickname(e.target.value);
  // };
>>>>>>> 11cb5d83869c73e41b8c4c812ac7a51792d3d674

  // const onCategorySeqHandler = (e) => {
  //   setCategorySeq(e.target.value);
  // };
  const onCategoryNumberHandler = (e) => {
    setCategoryNumber(e.target.value);
  };

  return (
    <>
      <Link to="../characters/select">
        <span className="material-icons text-xl m-4 absolute top-0">arrow_back 캐릭터 선택</span>
      </Link>
      <img src={require("../assets/images/main_logo.png")} alt="main_logo" className="mx-auto my-24 w-96" />
      <CharacterImg underText="변경" />
      <div className="w-96 mx-auto mt-8">
        <input type="file" onChange={imgChangeHandler} />
        <div className="bg-white rounded-lg">
<<<<<<< HEAD
          <InputIcon type="text" color="lightBlue" outline={true} iconName="edit" placeholder="닉네임을 입력하세요." onChange={onNicknameHandler} />
        </div>
        <div className="bg-white rounded-lg text-gray-400">
          <div className="my-8">
            <select className="bg-white rounded-lg w-96 h-11 p-2 border border-gray-300 outline-sky-500 text-black" onChange={onCategorySeqHandler}>
=======
          <InputIcon
            type="text"
            color="lightBlue"
            outline={true}
            iconName="edit"
            placeholder="닉네임을 입력하세요."
            // onChange={onNicknameHandler}
            {...nickname}
          />
        </div>
        <div className="bg-white rounded-lg text-gray-400">
          <div className="my-8">
            <select
              className="bg-white rounded-lg w-96 h-11 p-2 border border-gray-300 outline-sky-500 text-black"
              // onChange={onCategorySeqHandler}
              onChange={onCategoryNumberHandler}
            >
>>>>>>> 11cb5d83869c73e41b8c4c812ac7a51792d3d674
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
          <div className="absolute right-5 bottom-3 text-gray-400">{introduction.value.length} / 50</div>
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
