import { InputIcon, Dropdown, DropdownItem, Textarea } from "@material-tailwind/react";
import CharacterImg from "../components/CharacterImg";

export default function CharactersUpdate() {
  return (
    <>
      <span class="material-icons text-xl m-4 absolute top-0">arrow_back 캐릭터 선택</span>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24 w-96"
      />
      <CharacterImg updateUserImg={"변경"} />
      <div className="w-96 mx-auto">
        <InputIcon placeholder={"NICKNAME"} outline={true} color={"blueGray"} />
        <Dropdown
          color={"blueGray"}
          buttonType={"outline"}
          buttonText={"CATEGORY"}
          className="w-96 my-8"
        >
          <DropdownItem children={"개발"} />
          <DropdownItem children={"요리"} />
        </Dropdown>
        <Textarea
          placeholder={"한 줄 소개를 입력하세요."}
          outline={true}
          color={"blueGray"}
          className="mt-8"
        />
      </div>
      <div className="text-center text-2xl mt-16 flex justify-center">
        <span>캐릭터 저장</span>
      </div>
    </>
  );
}
