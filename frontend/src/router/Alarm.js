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
        <div className="text-2xl px-4 py-4 text-center">알림</div>
        <hr className="mb-1 mx-2" />
        <div className="px-4 py-2 ml-4">신규 알림</div>
        <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg imgWidth="50px" classes="mr-4" />
            <div style={{ width: "292px" }}>초밥왕님이 회원님을 팔로우하기 시작했습니다.</div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            1시간 전
          </div>
        </div>
        <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg imgWidth="50px" classes="mr-4" />
            <div style={{ width: "292px" }}>짜왕님이 회원님의 게시글에 댓글을 남겼습니다.</div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            11시간 전
          </div>
        </div>
        <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg
              imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
              imgWidth="50px"
              classes="mr-4"
            />
            <div style={{ width: "292px" }}>
              저장소 '불타는 요리 맛집'에 상태가 변동된 게시물이 있습니다.
            </div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            2일 전
          </div>
        </div>
        <div className="px-4 py-2 ml-4">기존 알림</div>
        <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg
              imgSrc="https://cdn2.thecatapi.com/images/43n.png"
              imgWidth="50px"
              classes="mr-4"
            />
            <div style={{ width: "292px" }}>저장소 '요리하는 부부 저장소'를 생성하였습니다.</div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            01. 28
          </div>
        </div>
      </MainCard>
    </div>
  );
}
