import { InputIcon, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";
import Send from "../config/Send";
import File from "../config/File";

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
  const [selectedCategory, setSelectedCategory] = useState([]);
  const getCategories = () => {
    Send.get("/character/categorys").then((res) => {
      const nowCategory = res.data.find((category) => category.characterCategoryNumber === 0);
      setSelectedCategory([nowCategory.characterCategoryName, nowCategory.characterCategoryNumber]);
    });
  };

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

  const [imgFile, setImgFile] = useState(null);

  // 닉네임만 Byte로 제한
  const nicknameMaxLen = (value) => convertByte(value) <= 16;
  const introductionMaxLen = (value) => value.length <= 50;
  const nickname = useInput("", nicknameMaxLen);
  const introduction = useInput("", introductionMaxLen);

  const history = useHistory();

  const characterSeq = location.state.characterSeq;
  const getCharacter = () => {
    Send.get(`/character/${characterSeq}`).then((res) => {
      nickname.setValue(res.data.nickname);
      introduction.setValue(res.data.introduction);
    });
  };

  useEffect(() => {
    getCategories();
    getCharacter();
  }, []);

  const characterUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const character = {
      characterSeq,
      introduction: introduction.value,
      nickname: nickname.value,
      representativeAchievement: 0,
    };
    formData.append("file", imgFile);
    formData.append("request", new Blob([JSON.stringify(character)], { type: "application/json" }));

    updateCharacter({ character });

    // Send.put("/character", JSON.stringify(character))
    //   .then(() => {
    //     alert("캐릭터 수정이 완료되었습니다.");
    //     history.push("../characters/select");
    //   })
    //   .catch((err) => console.log(err));
    // history.push("../characters/select");
    File.put("/character", formData)
      .then(() => {
        alert("캐릭터 수정이 완료되었습니다.");
        history.push("../characters/select");
      })
      .catch((err) => console.log(err));
    history.push("../characters/select");
  };

  const imgChangeHandler = (propsImg) => {
    setImgFile(propsImg);
    console.log(propsImg);
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
      <CharacterImg imgChangeHandler={imgChangeHandler} isChange={true} underText="변경" />
      <div className="w-96 mx-auto mt-8">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            outline={true}
            iconName="edit"
            placeholder="닉네임을 입력하세요."
            {...nickname}
          />
        </div>
        <div className="bg-white rounded-lg text-gray-400 my-8">
          <input
            type="text"
            value={selectedCategory[0] || ""}
            disabled
            className="my-3 block w-full px-3 py-2 border border-slate-300 rounded-md disabled:bg-slate-200 text-gray-400"
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
