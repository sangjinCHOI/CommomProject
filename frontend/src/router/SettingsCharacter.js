import { Button, InputIcon, Textarea } from "@material-tailwind/react";
import CharacterImg from "../components/CharacterImg";

export default function SettingsCharacter() {
  return (
    <>
      <div class="flex mx-10 mt-20">
        <div className="text-center text-md flex flex-col justify-evenly">
          <CharacterImg updateUserImg={"변경 삭제"} />
          <span>캐릭터 삭제</span>
        </div>
        <div className="w-96 mx-auto mt-16 flex flex-col justify-center">
          <InputIcon
            placeholder={"NICKNAME"}
            outline={true}
            color={"blueGray"}
          />
          <input
            type="text"
            value="요리"
            disabled
            class="my-3 block w-full px-3 py-2 border border-slate-300 rounded-md disabled:bg-slate-300 disabled:text-black-500"
          />
          <Textarea
            placeholder={"한 줄 소개를 입력하세요."}
            outline={true}
            color={"blueGray"}
            className="mt-8"
          />
          <Button className="my-3">저장</Button>
        </div>
      </div>
    </>
  );
}
