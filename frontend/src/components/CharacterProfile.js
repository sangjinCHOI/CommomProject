import { Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CharacterImg from "./CharacterImg";

export default function CharacterProfile({ nickname, classes }) {
  return (
    <div className={`flex justify-center items-center p-4 my-4 ${classes}`}>
      <CharacterImg />
      <div className="ml-10">
        <div>
          <div className="inline-block bg-red-500 px-1 mr-2 rounded-full">
            <img
              src={require("../assets/images/sample_achievement.png")}
              alt="sample_achievement_img"
              width="16px"
              className="inline-block mr-1"
            />
            <span className="text-xs text-yellow-300">요리왕</span>
          </div>
          {nickname}
        </div>
        <div className="py-1">
          <div className="inline-block mr-8">
            <span>
              게시물 <span className="font-bold">55</span>
            </span>
          </div>
          <div className="inline-block mr-8">
            <span>
              팔로워 <span className="font-bold">163K</span>
            </span>
          </div>
          <div className="inline-block">
            <span>
              팔로우 <span className="font-bold">2.34K</span>
            </span>
          </div>
        </div>

        <div className="text-sm w-72 h-7">안녕하세요!</div>
        <div className="my-4">
          <div className="inline-block px-2">
            <Label color="blueGray">업적 보기</Label>
          </div>
          <div className="inline-block px-2">
            <Link to="../characters/update">
              <Label color="blueGray">프로필 편집</Label>
            </Link>
          </div>
          <div className="inline-block px-2">
            <Link to="../characters/select">
              <Label color="blueGray">부캐 보기</Label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
