import CharacterImg from "../components/CharacterImg";
import { Button, Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { shuffle } from "lodash";
import MainCard from "../components/MainCard";

export default function Alarm() {
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

  return (
    <div className="px-16">
      <MainCard classes="border rounded pb-8">
        <div className="text-2xl px-4 py-2">알림</div>
        <hr className="mb-1 mx-2" />
        <div className="px-4 py-2">신규 알림</div>
        {shuffle(nicknameList).map((nickname) => (
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
              <Link to="">
                <Label color="lightBlue">팔로우</Label>
              </Link>
            </div>
            <div className="mr-3">
              <Label color="blueGray">삭제</Label>
            </div>
          </div>
        ))}
        <div className="px-4 py-2">기존 알림</div>
        {shuffle(nicknameList).map((nickname) => (
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
              <Link to="">
                <Label color="lightBlue">팔로우</Label>
              </Link>
            </div>
            <div className="mr-3">
              <Label color="blueGray">삭제</Label>
            </div>
          </div>
        ))}
      </MainCard>
    </div>
  );
}
