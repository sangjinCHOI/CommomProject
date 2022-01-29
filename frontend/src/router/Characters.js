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
          {isManagement
            ? "수정할 캐릭터를 선택하세요."
            : "PERSONA를 사용할 캐릭터를 선택하세요."}
        </span>
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname="개발왕초보"
          isManagement={isManagement}
          isExist={true}
          isLock={false}
          imgSrc="https://cdn2.thecatapi.com/images/ba2.jpg"
        />
        <Character
          nickname="닉네임은여덟글자"
          isManagement={isManagement}
          isExist={true}
          isLock={false}
          imgSrc="https://cdn2.thecatapi.com/images/b9v.jpg"
        />
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname=""
          isManagement={isManagement}
          isExist={false}
          isLock={false}
          imgSrc=""
        />
        <Character
          nickname=""
          isManagement={isManagement}
          isExist={false}
          isLock={true}
          imgSrc=""
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

const Character = ({
  nickname = "nickname",
  isManagement = false,
  isExist = false,
  isLock = false,
  imgSrc = null,
}) => {
  return (
    <Link
      to={
        isLock
          ? ""
          : isManagement
          ? "../characters/update"
          : isExist
          ? ""
          : "../characters/create"
      }
      onClick={isLock ? (e) => e.preventDefault() : null}
    >
      <div className="mt-8 mx-12">
        <CharacterImg
          underText={nickname}
          // 캐릭터 관리 상태인지, 캐릭터가 존재하는지, 이미지가 있는지에 따라 분기
          imgSrc={
            isLock
              ? require("../assets/images/character_lock.png")
              : isManagement
              ? require("../assets/images/character_edit.png")
              : isExist
              ? imgSrc
                ? imgSrc
                : require("../assets/images/default_user.png")
              : require("../assets/images/character_plus.png")
          }
        />
      </div>
    </Link>
  );
};
