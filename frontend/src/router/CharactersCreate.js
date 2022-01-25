import { InputIcon, Dropdown, DropdownItem, Textarea, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

export default function CharactersCreate() {
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
            placeholder="NICKNAME"
          />
        </div>
        <div className="bg-white rounded-lg text-gray-400">
          <Dropdown
            color="lightblue"
            buttonType="outline"
            buttonText="CATEGORY"
            className="w-96 my-8"
          >
            <div className="w-80">
              <DropdownItem color="lightBlue" children="개발" />
              <DropdownItem color="lightBlue" children="요리" />
            </div>
          </Dropdown>
        </div>
        <div className="bg-white rounded-lg" style={{ height: 185 }}>
          <Textarea
            placeholder="한 줄 소개를 입력하세요."
            outline={true}
            color="lightBlue"
            className="mt-8"
          />
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
