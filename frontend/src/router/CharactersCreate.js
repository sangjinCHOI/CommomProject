import { InputIcon, Dropdown, DropdownItem, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

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

export default function CharactersCreate() {
  const maxLen = (value) => value.length <= 50;
  const introduction = useInput("", maxLen);
  return (
    <>
      <Link to="../characters/select">
        <span class="material-icons text-xl m-4 absolute top-0">arrow_back 캐릭터 선택</span>
      </Link>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24 w-96"
      />
      <CharacterImg updateUserImg={"변경"} />
      <div className="w-96 mx-auto">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            outline={true}
            iconName="edit"
            placeholder="닉네임을 입력하세요."
          />
        </div>
        <div className="bg-white rounded-lg text-gray-400">
          <Dropdown
            color="lightblue"
            buttonType="outline"
            buttonText="CATEGORY"
            className="w-96 my-8"
          >
            <div>
              <DropdownItem color="lightBlue" children="개발" />
              <DropdownItem color="lightBlue" children="요리" />
            </div>
          </Dropdown>
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
        <Link to="../characters/select">
          <span>캐릭터 저장</span>
        </Link>
      </div>
    </>
  );
}
