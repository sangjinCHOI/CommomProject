import CharacterImg from "../components/CharacterImg";
import { Button, Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { shuffle } from "lodash";
import MainCard from "../components/MainCard";
import axios from "axios";

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
    // data1로 팔로우 현황 확인
    const data1 = {
      followee: 12,
      nickname: "유산슬",
    };
    // data2로 팔로우 요청
    // 현재 중복 팔로우 가능
    // 팔로우 했는지 여부 확인은 어떻게?
    const data2 = {
      followee: 13, // 유산슬
      follower: 12, // 유야호 // 유야호(13)가 유산슬(12)을 팔로우
    };
    axios
      .post("http://localhost:8080/character/followers", JSON.stringify(data1), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data); // 계속 빈 배열 나옴
        // axios
        //   .post("http://localhost:8080/character/follow", JSON.stringify(data2), {
        //     headers: { "Content-Type": "application/json" },
        //   })
        //   .then((res) => console.log(res));
      });
  };

  return (
    <div className="px-16">
      <MainCard classes="border rounded pb-8">
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
          <span className="material-icons absolute right-12">search</span>
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
