import { useState } from "react";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

export default function Characters() {
  const [isManagement, setIsManagement] = useState(false);
  const management = (event) => {
    event.preventDefault();
    setIsManagement(!isManagement);
  };

  return (
    <>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24 w-96"
      />
      <div className="text-center text-2xl mt-8 mb-4">
        <span>
          {isManagement ? "수정할 캐릭터를 선택하세요." : "PERSONA를 사용할 캐릭터를 선택하세요."}
        </span>
      </div>
      <div className="flex justify-center m-8">
        <CharacterImg
          nickname={"개발왕"}
          imgSrc={
            isManagement
              ? require("../assets/images/character_edit.png")
              : require("../assets/images/default_user.png")
          }
        />
        <CharacterImg
          nickname={"요리왕"}
          imgSrc={
            isManagement
              ? require("../assets/images/character_edit.png")
              : require("../assets/images/default_user.png")
          }
        />
      </div>
      <div className="flex justify-center m-8">
        <CharacterImg
          nickname={"운동왕"}
          imgSrc={
            isManagement
              ? require("../assets/images/character_edit.png")
              : require("../assets/images/default_user.png")
          }
        />
        <CharacterImg
          nickname={"코인왕"}
          imgSrc={
            isManagement
              ? require("../assets/images/character_edit.png")
              : require("../assets/images/default_user.png")
          }
        />
      </div>
      <div className="text-center text-2xl mt-24">
        <Link to="" onClick={management}>
          {isManagement ? "취소" : "캐릭터 관리"}
        </Link>
      </div>
    </>
  );
}
