import { InputIcon, Modal, ModalBody, ModalHeader, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

import { save } from "../store/characterStore";
import Send from "../config/Send";
import File from "../config/File";
import styles from "./CharactersCreate.module.css";

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
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const getCategories = () => {
    Send.get("/character/categorys").then((res) => {
      setCategories(res.data);
      const initialCategory = res.data.find((category) => category.characterCategoryNumber === 0);
      setSelectedCategory([
        initialCategory.characterCategoryName,
        initialCategory.characterCategoryNumber,
      ]);
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

  // const [categorySeq, setCategorySeq] = useState(0);
  // const [nickname, setNickname] = useState("");
  const [imgFile, setImgFile] = useState(null);

  // 닉네임만 Byte로 제한
  const nicknameMaxLen = (value) => convertByte(value) <= 16;
  const introductionMaxLen = (value) => value.length <= 50;
  const nickname = useInput("", nicknameMaxLen);
  const introduction = useInput("", introductionMaxLen);

  // const [categorySeq, setCategorySeq] = useState(0);
  // const [categoryNumber, setCategoryNumber] = useState(0);

  const history = useHistory();

  const { userSeq, userId } = location.state;

  const characterSave = (e) => {
    const formData = new FormData();
    e.preventDefault();
    const request = {
      userSeq,
      // categorySeq: parseInt(categorySeq),
      // categoryNumber: categoryNumber,
      categoryNumber: selectedCategory[1],
      nickname: nickname.value,
      introduction: introduction.value,
    };
    formData.append("file", imgFile);
    formData.append("request", new Blob([JSON.stringify(request)], { type: "application/json" }));

    File.post("/character", formData)
      .then((res) => {
        if (res.status === 200) {
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
        } else alert("캐릭터 생성에 실패했습니다.");
      })
      .catch((err) => console.log(err));
  };

  const imgChangeHandler = (propsImg) => {
    setImgFile(propsImg);
    console.log(propsImg);
  };

  // const onNicknameHandler = (e) => {
  //   setNickname(e.target.value);
  // };

  // const onNicknameHandler = (e) => {
  //   setNickname(e.target.value);
  // };

  // const onCategorySeqHandler = (e) => {
  //   setCategorySeq(e.target.value);
  // };
  // const onCategoryNumberHandler = (e) => {
  //   setCategoryNumber(e.target.value);
  // };

  return (
    <>
      <Link to="../characters/select">
        <span className="material-icons text-xl m-4 absolute top-0">arrow_back 캐릭터 선택</span>
      </Link>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24"
        style={{ width: "450px" }}
      />
      <CharacterImg imgChangeHandler={imgChangeHandler} isChange={true} underText="변경" />
      <div className="w-96 mx-auto mt-8">
        {/* <input type="file" onChange={imgChangeHandler} /> */}
        <div className="bg-white rounded-lg">
          {/* <InputIcon type="text" color="lightBlue" outline={true} iconName="edit" placeholder="닉네임을 입력하세요." onChange={onNicknameHandler} />
        </div>
        <div className="bg-white rounded-lg text-gray-400">
          <div className="my-8">
            <select className="bg-white rounded-lg w-96 h-11 p-2 border border-gray-300 outline-sky-500 text-black" onChange={onCategorySeqHandler}> */}

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
            <div
              className="bg-white rounded-lg w-96 h-11 p-2 border border-gray-300 outline-sky-500 text-gray-700"
              onClick={() => setShowCategoryModal(true)}
              style={{ cursor: "pointer" }}
            >
              <span className="mx-1">{selectedCategory[0]}</span>
            </div>

            {/* <select
              className="bg-white rounded-lg w-96 h-11 p-2 border border-gray-300 outline-sky-500 text-black"
              // onChange={onCategorySeqHandler}
              onChange={onCategoryNumberHandler}
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
            </select> */}
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

      <Modal active={showCategoryModal} toggler={() => setShowCategoryModal(false)}>
        <ModalHeader toggler={() => setShowCategoryModal(false)}>
          <span>카테고리 선택</span>
        </ModalHeader>
        <ModalBody>
          <div className="overflow-y-auto px-4 py-2" style={{ maxHeight: "300px", width: "640px" }}>
            {categories.map((category) => (
              <button
                key={category.characterCategoryNumber}
                className={`m-2 p-1 ${styles.clickCategoryBtn} ${styles.customBtn}`}
                onClick={() => {
                  setSelectedCategory([
                    category.characterCategoryName,
                    category.characterCategoryNumber,
                  ]);
                  setShowCategoryModal(!showCategoryModal);
                }}
              >
                {category.characterCategoryName}
              </button>
            ))}
          </div>
        </ModalBody>
      </Modal>
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
