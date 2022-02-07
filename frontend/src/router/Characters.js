import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

import { save } from "../store/characterStore";
import Send from "../config/Send";

function Characters({ userSlice, saveCharacter }) {
  const [isManagement, setIsManagement] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [characterLen, setCharacterLen] = useState(0);
  const { userId, userSeq, userCreatableCount } = userSlice;

  const getCharacterList = () => {
    Send.get(`/user/${userId}`).then((res) => {
      Send.get(`/character/characters/${userSeq}`)
        .then((res) => {
          setCharacterList(res.data);
          setCharacterLen(res.data.length);
          return userSeq;
        })
        .catch((err) => console.log(err));
    });
  };
  useEffect(() => {
    getCharacterList();
  }, []);

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
              : isManagement
              ? "../characters/update"
              : isExist
              ? "../"
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
              ? () => {
                  // 메인페이지로 넘어갈 때 캐릭터 저장
                  Send.get(`/character/${characterSeq}`).then((res) => {
                    saveCharacter(res.data);
                  });
                }
              : null
          }
        >
          <CharacterImg
            underText={nickname}
            // 캐릭터 잠금 상태인지, 캐릭터가 존재하는지, 캐릭터 관리 상태인지, 이미지가 있는지에 따라 분기(순서 중요)
            imgSrc={
              isLock
                ? require("../assets/images/character_lock.png")
                : isExist
                ? isManagement
                  ? require("../assets/images/character_edit.png")
                  : imgSrc
                  ? imgSrc
                  : require("../assets/images/default_user.png")
                : require("../assets/images/character_plus.png")
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
        className="mx-auto my-24 w-96"
      />
      <div className="text-center text-2xl mt-8 mb-4">
        <span>
          {isManagement ? "수정할 캐릭터를 선택하세요." : "PERSONA를 사용할 캐릭터를 선택하세요."}
        </span>
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname={characterLen >= 1 ? characterList[0].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 1 ? true : false}
          isLock={userCreatableCount >= 1 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/ba2.jpg"
          characterSeq={characterLen >= 1 ? characterList[0].characterSeq : null}
        />
        <Character
          nickname={characterLen >= 2 ? characterList[1].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 2 ? true : false}
          isLock={userCreatableCount >= 2 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/b9v.jpg"
          characterSeq={characterLen >= 2 ? characterList[1].characterSeq : null}
        />
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname={characterLen >= 3 ? characterList[2].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 3 ? true : false}
          isLock={userCreatableCount >= 3 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/b9v.jpg"
          characterSeq={characterLen >= 3 ? characterList[2].characterSeq : null}
        />
        <Character
          nickname={characterLen >= 4 ? characterList[3].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 4 ? true : false}
          isLock={userCreatableCount >= 4 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/b9v.jpg"
          characterSeq={characterLen >= 4 ? characterList[3].characterSeq : null}
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

function mapStateToProps(state) {
  return { characterSlice: state.character, userSlice: state.user };
}

function mapDispatchToProps(dispatch) {
  return { saveCharacter: (character) => dispatch(save(character)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
