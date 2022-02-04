import React from "react";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownItem,
} from "@material-tailwind/react";
import CharacterImg from "../components/CharacterImg";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Send from "../config/Send";
import { useHistory } from "react-router-dom";

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

function SettingsCharacter({ characterSlice }) {
  const [showModal, setShowModal] = React.useState(false);
  const maxLen = (value) => value.length <= 50;
  const introduction = useInput("", maxLen);
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  console.log(characterSlice);

  const characterDelete = (e) => {
    const data = {
      characterDeleteReason: 1,
      characterSeq: characterSlice.characterSeq,
    };
    setShowModal(false);
    Send.delete("/character", { data: JSON.stringify(data) })
      .then((res) => {
        // 현재 200 요청이 가지만 삭제가 안됨
        alert("삭제되었습니다.");
        console.log(res);
        history.push("../characters/select");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex mx-10 mt-10">
        <div className="text-center text-md flex flex-col justify-evenly">
          <CharacterImg underText="변경" />
          <button onClick={(e) => setShowModal(true)}>캐릭터 삭제</button>
        </div>
        <div className="w-96 mx-auto mt-10 flex flex-col justify-center">
          <div className="bg-white rounded-lg">
            <Input placeholder={"NICKNAME"} outline={true} color="lightBlue" />
          </div>
          <input
            type="text"
            value="요리"
            disabled
            className="my-3 block w-full px-3 py-2 border border-slate-300 rounded-md disabled:bg-slate-300 disabled:text-black-500"
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
          <Button className="my-3">저장</Button>
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
          <Dropdown
            color={"blueGray"}
            buttonType={"outline"}
            buttonText={"이유 선택"}
            className="w-96 my-8"
          >
            <DropdownItem children={"개인정보 보호 문제"} />
            <DropdownItem children={"캐릭터 슬롯이 부족함"} />
            <DropdownItem children={"다른 카테고리로 변경하고 싶음"} />
            <DropdownItem children={"기타 사유"} />
          </Dropdown>
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

export default connect(mapStateToProps)(SettingsCharacter);
