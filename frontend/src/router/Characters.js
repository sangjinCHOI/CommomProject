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
        <Link to={isManagement ? "../characters/update" : ""}>
          <div className="mt-8 mx-12">
            <CharacterImg
              underText={"개발왕"}
              imgSrc={
                isManagement
                  ? require("../assets/images/character_edit.png")
                  : require("../assets/images/codingImg_sample.jpg")
              }
            />
          </div>
        </Link>
        <div className="mt-8 mx-12">
          <CharacterImg
            underText={"요리왕"}
            imgSrc={
              isManagement
                ? require("../assets/images/character_edit.png")
                : require("../assets/images/cookingImg_sample.jpg")
            }
          />
        </div>
      </div>
      <div className="flex justify-center m-8">
        <div className="mt-8 mx-12">
          <CharacterImg
            underText={"운동왕"}
            imgSrc={
              isManagement
                ? require("../assets/images/character_edit.png")
                : require("../assets/images/healthImg_sample.jpg")
            }
          />
        </div>
        <div className="mt-8 mx-12">
          <CharacterImg imgSrc={require("../assets/images/character_lock.png")} />
        </div>
      </div>
      <div className="text-center text-2xl mt-24">
        <Link to="" onClick={management}>
          {isManagement ? "취소" : "캐릭터 관리"}
        </Link>
      </div>
    </>
  );
}
