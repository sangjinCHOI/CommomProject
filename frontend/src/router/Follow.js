import CharacterImg from "../components/CharacterImg";
import { Button, Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { shuffle } from "lodash";
import MainCard from "../components/MainCard";

export default function Follow() {
  const nicknameList = [
    "요리왕",
    "개발왕",
    "만화왕",
    "드라마다봄",
    "넷플릭스다봄",
    "인스타에서넘어옴",
    "페르소나",
    "PersonA",
  ];

  const [isFollowerTab, setIsFollowerTab] = useState(true);

  const follow = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-16">
      <MainCard classes="border rounded">
        <div className="flex justify-center items-center">
          <Button
            className={`px-20 py-5 w-60 text-center text-xl border-2 border-white ${
              isFollowerTab ? "bg-sky-500" : "bg-gray-300 text-gray-300"
            }`}
            buttonType="outline"
            onClick={() => {
              setIsFollowerTab(true);
            }}
          >
            팔로워
          </Button>
          <Button
            className={`px-20 py-5 w-60 text-center text-xl border-2 border-white ${
              isFollowerTab ? "bg-gray-300 text-gray-300" : "bg-sky-500"
            }`}
            buttonType="outline"
            onClick={() => {
              setIsFollowerTab(false);
            }}
          >
            팔로우
          </Button>
        </div>
        <div className="relative flex justify-center items-center p-2">
          <input
            className="w-96 border rounded-lg px-4 py-2"
            type="text"
            placeholder="캐릭터 검색"
          />
          <span class="material-icons absolute right-12">search</span>
        </div>
        {isFollowerTab
          ? shuffle(nicknameList).map((nickname) => (
              <div className="flex justify-center items-center" key={nickname}>
                <Link to={`../${nickname}`}>
                  <div className="m-3">
                    <CharacterImg imgWidth="50px" />
                  </div>
                </Link>
                <Link to={`../${nickname}`}>
                  <div className="w-44">{nickname}</div>
                </Link>
                <div className="m-2">
                  <Link to="" onClick={follow}>
                    <Label color="lightBlue">팔로우</Label>
                  </Link>
                </div>
                <div className="mr-3">
                  <Label color="blueGray">삭제</Label>
                </div>
              </div>
            ))
          : shuffle(nicknameList).map((nickname) => (
              <div className="flex justify-center items-center" key={nickname}>
                <Link to={`../${nickname}`}>
                  <div className="m-3">
                    <CharacterImg imgWidth="50px" />
                  </div>
                </Link>
                <Link to={`../${nickname}`}>
                  <div className="w-44">{nickname}</div>
                </Link>
                <div className="ml-12 mr-3">
                  <Label color="blueGray">언팔로우</Label>
                </div>
              </div>
            ))}
      </MainCard>
    </div>
  );
}
