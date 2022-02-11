import React from "react";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@material-tailwind/react";
import CharacterImg from "../components/CharacterImg";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Send from "../config/Send";
import { useHistory } from "react-router-dom";
import { update } from "../store/characterStore";
import File from "../config/File";

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

function SettingsCharacter({ characterSlice, updateCharacter }) {
  console.log("111", characterSlice);
  const [showModal, setShowModal] = React.useState(false);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const getCategories = () => {
    Send.get("/character/categorys").then((res) => {
      const nowCategory = res.data.find((category) => category.characterCategoryNumber === 0);
      setSelectedCategory([nowCategory.characterCategoryName, nowCategory.characterCategoryNumber]);
    });
  };
  useEffect(() => {
    getCategories();
  }, []);

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
  // const [nickname, setNickname] = useState("");

  const history = useHistory();

  const initialSetting = () => {
    nickname.setValue(characterSlice.nickname);
    introduction.setValue(characterSlice.introduction);
  };

  useEffect(() => {
    initialSetting();
  }, []);

  const [characterDeleteReason, setcharacterDeleteReason] = useState(0);

  const saveCharacter = () => {
    const formData = new FormData();

    const data = {
      characterSeq: characterSlice.characterSeq,
      nickname: nickname.value,
      introduction: introduction.value,
      representativeAchievement: 0,
    };
    formData.append("file", imgFile);
    formData.append("request", new Blob([JSON.stringify(data)], { type: "application/json" }));

    File.put("/character", formData)
      .then((res) => {
        if (res.status == 200) {
          updateCharacter({ data });
          alert("변경되었습니다!");
          history.push("../..");
        } else alert("다시 로그인해주세요");
      })
      .catch((e) => {
        console.log(e);
        alert("서버 오류입니다");
      });
  };

  const characterDelete = (e) => {
    const data = {
      characterDeleteReason: 1,
      characterSeq: characterSlice.characterSeq,
    };
    setShowModal(false);
    Send.delete("/character", { data: JSON.stringify(data) })
      .then((res) => {
        alert("삭제되었습니다.");
        console.log(res);
        history.push("../characters/select");
      })
      .catch((err) => console.log(err));
  };

  const oncharacterDeleteReasonHandler = (e) => {
    setcharacterDeleteReason(e.target.value);
  };

  const imgChangeHandler = (propsImg) => {
    setImgFile(propsImg);
    console.log(propsImg);
  };

  return (
    <>
      <div className="flex mx-10 mt-10">
        <div className="text-center text-md flex flex-col justify-evenly">
          <CharacterImg
            imgSrc={
              characterSlice.filePath !== null && characterSlice.fileName !== null
                ? `${characterSlice.filePath + characterSlice.fileName}`
                : `/images/default_user.png`
            }
            imgChangeHandler={imgChangeHandler}
            isChange={true}
            underText="변경"
          />
          <button onClick={(e) => setShowModal(true)}>캐릭터 삭제</button>
        </div>
        <div className="w-96 mx-auto mt-10 flex flex-col justify-center">
          <div className="bg-white rounded-lg">
            <Input placeholder={"NICKNAME"} outline={true} color="lightBlue" {...nickname} />
          </div>
          <input
            type="text"
            value={selectedCategory[0] || ""}
            disabled
            className="my-3 block w-full px-3 py-2 border border-slate-300 rounded-md disabled:bg-slate-200 text-gray-400"
          />
          <div className="relative bg-white rounded-md rounded-lg" style={{ height: 185 }}>
            <Textarea
              placeholder={"한 줄 소개를 입력하세요."}
              outline={true}
              color="lightBlue"
              {...introduction}
            />
            <div className="absolute right-5 bottom-3 text-gray-400">
              {introduction.value.length} / 50
            </div>
          </div>
          <Button className="my-3" onClick={saveCharacter}>
            저장
          </Button>
        </div>
      </div>

      <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)} className="text-center">
          캐릭터 삭제
        </ModalHeader>
        <hr className="mb-5" />
        <ModalBody>
          <p className="text-base leading-relaxed text-gray-600 font-normal">
            캐릭터를 삭제하려는 이유가 무엇인가요?
          </p>
          <select
            className="bg-white rounded-lg w-96 h-11 p-2 mb-16 border border-gray-300 outline-sky-500 text-black"
            onChange={oncharacterDeleteReasonHandler}
          >
            <option className="rounded-lg h-10" value="0">
              개인정보 보호 문제
            </option>
            <option className="rounded-lg h-10" value="1">
              캐릭터 슬롯이 부족함
            </option>
            <option className="rounded-lg h-10" value="2">
              다른 카테고리로 변경하고 싶음
            </option>
            <option className="rounded-lg h-10" value="2">
              기타 사유
            </option>
          </select>
          <br />
          <p className="text-base leading-relaxed text-gray-600 font-normal">
            비밀번호를 다시 입력하세요.
          </p>
          <Input type="password" placeholder=""></Input>
        </ModalBody>
        <ModalFooter>
          <Button
            color="black"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button color="red" onClick={characterDelete} ripple="light">
            삭제
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

function mapDispatchToProps(dispatch) {
  return { updateCharacter: (character) => dispatch(update(character)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsCharacter);
