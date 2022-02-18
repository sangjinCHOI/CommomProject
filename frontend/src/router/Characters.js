import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";
import { useHistory } from "react-router-dom";

import { save } from "../store/characterStore";
import Send from "../config/Send";

function Characters({ userSlice, saveCharacter }) {
  const history = useHistory();
  const [isManagement, setIsManagement] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [characterLen, setCharacterLen] = useState(0);
  const { userId, userSeq, userCreatableCount } = userSlice;
  const [isMouseOver, setIsMouseOver] = useState(false);

  const getCharacterList = () => {
    Send.get(`/user/${userId}`).then((res) => {
      Send.get(`/character/characters/${userSeq}`)
        .then((res) => {
          setCharacterList(res.data);
          setCharacterLen(res.data.length);
        })
        .catch((err) => console.log(err));
    });
  };
  useEffect(() => {
    getCharacterList();
  }, [characterLen]);

  const management = (event) => {
    event.preventDefault();
    setIsManagement(!isManagement);
  };

  const Character = ({
    nickname = "nickname",
    isManagement = false,
    isExist = false,
    isLock = false,
    imgSrc = null,
    characterSeq = 0,
  }) => {
    return (
      <div className="mt-8 mx-12 w-32">
        <Link
          to={{
            pathname: isLock
              ? null
              : isExist
              ? isManagement
                ? "../characters/update"
                : "../"
              : "../characters/create",
            state: {
              characterSeq,
              userSeq,
              userId,
            },
          }}
          onClick={
            isLock
              ? (e) => e.preventDefault()
              : isExist
              ? isManagement
                ? null
                : (e) => {
                    // 메인페이지로 넘어갈 때 캐릭터 저장
                    e.preventDefault();
                    Send.get(`/character/${characterSeq}`)
                      .then((res) => {
                        saveCharacter(res.data);
                        history.push("/");
                      })
                      .catch((err) => console.log(err));
                  }
              : null
          }
        >
          <CharacterImg
            underText={nickname}
            // 캐릭터 잠금 상태인지, 캐릭터가 존재하는지, 캐릭터 관리 상태인지, 이미지가 있는지에 따라 분기(순서 중요)
            // imgSrc={
            //   isLock
            //     ? require("../assets/images/character_lock.png")
            //     : isExist
            //     ? isManagement
            //       ? require("../assets/images/character_edit.png")
            //       : imgSrc // 여기가 실제 이미지
            //       ? imgSrc
            //       : require("../assets/images/default_user.png") // 여기가 기본 이미지
            //     : require("../assets/images/character_plus.png")
            // }
            imgSrc={
              isLock
                ? "/images/character_lock.png"
                : isExist
                ? isManagement
                  ? "/images/character_edit.png"
                  : imgSrc // 여기가 실제 이미지
                  ? imgSrc
                  : "/images/default_user.png" // 여기가 기본 이미지
                : "/images/character_plus.png"
            }
            lock={isLock}
          />
        </Link>
      </div>
    );
  };

  return (
    <>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24"
        style={{ width: "450px" }}
      />
      <div className="text-center text-3xl mt-8 mb-4">
        <span style={{ fontSize: "26px" }}>
          {isManagement ? "수정할 캐릭터를 선택하세요." : "사용할 캐릭터를 선택하세요."}
        </span>
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname={characterLen >= 1 ? characterList[0].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 1 ? true : false}
          isLock={userCreatableCount >= 1 ? false : true}
          // 아마 최종 형태
          imgSrc={
            characterLen >= 1
              ? characterList[0].filePath !== null && characterList[0].fileName !== null
                ? `${characterList[0].filePath + characterList[0].fileName}`
                : null
              : null
          }
          characterSeq={characterLen >= 1 ? characterList[0].characterSeq : null}
        />
        <Character
          nickname={characterLen >= 2 ? characterList[1].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 2 ? true : false}
          isLock={userCreatableCount >= 2 ? false : true}
          imgSrc={
            characterLen >= 2
              ? characterList[1].filePath !== null && characterList[1].fileName !== null
                ? `${characterList[1].filePath + characterList[1].fileName}`
                : null
              : null
          }
          characterSeq={characterLen >= 2 ? characterList[1].characterSeq : null}
        />
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname={characterLen >= 3 ? characterList[2].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 3 ? true : false}
          isLock={userCreatableCount >= 3 ? false : true}
          imgSrc={
            characterLen >= 3
              ? characterList[2].filePath !== null && characterList[2].fileName !== null
                ? `${characterList[2].filePath + characterList[2].fileName}`
                : null
              : null
          }
          characterSeq={characterLen >= 3 ? characterList[2].characterSeq : null}
        />
        <Character
          nickname={characterLen >= 4 ? characterList[3].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 4 ? true : false}
          isLock={userCreatableCount >= 4 ? false : true}
          imgSrc={
            characterLen >= 4
              ? characterList[3].filePath !== null && characterList[3].fileName !== null
                ? `${characterList[3].filePath + characterList[3].fileName}`
                : null
              : null
          }
          characterSeq={characterLen >= 4 ? characterList[3].characterSeq : null}
        />
      </div>
      <div className="text-center text-2xl mt-24">
        <Link
          to=""
          onClick={management}
          className={`px-5 py-1.5 rounded-sm`}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
        >
          <span className={`${isMouseOver ? "text-gray-800" : "text-gray-400"}`}>
            {isManagement ? "완료" : "캐릭터 관리"}
          </span>
        </Link>
      </div>
      <div className="mt-8 text-center">
        <Link
          to="../accounts/login"
          className="text-gray-400"
          onClick={() => window.localStorage.clear()}
        >
          로그아웃
        </Link>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character, userSlice: state.user };
}

function mapDispatchToProps(dispatch) {
  return { saveCharacter: (character) => dispatch(save(character)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
