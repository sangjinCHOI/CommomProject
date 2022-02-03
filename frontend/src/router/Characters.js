// 여기선 서버에 요청해서 DB의 캐릭터 리스트 가져와서 랜더링

import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";

import { login } from "../store/characterStore";

function Characters({ characterSlice, loginCharacters }) {
  const [isManagement, setIsManagement] = useState(false);

  // // userId 가져오기용 개선 필요(로그인 페이지에서 넘어올 때만 작동)
  // const location = useLocation();
  // const { userId } = location.props;

  const userSeq = localStorage.getItem("userSeq");
  const [characterList, setCharacterList] = useState([]);
  const [characterLen, setCharacterLen] = useState(0);

  const tempUserCreatableCount = 2;

  // const getUserCreatableCount = () => {
  //   axios.get(`http://localhost:8080/user/${userId}`).then((res) => {
  //     console.log(res);
  //     // setUserCreatableCount(res)
  //   });
  // };

  const getCharacterList = () => {
    axios
      .get(`http://localhost:8080/character/characters/${userSeq}`)
      .then((res) => {
        setCharacterList(res.data);
        console.log("res.data[0]", res.data[0]);
        setCharacterLen(res.data.length);
        console.log("characterSlice", characterSlice);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCharacterList();
  }, []);

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
        <Character
          nickname={characterLen >= 1 ? characterList[0].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 1 ? true : false}
          isLock={tempUserCreatableCount >= 1 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/ba2.jpg"
          characterSeq={characterLen >= 1 ? characterList[0].characterSeq : null}
        />
        <Character
          nickname={characterLen >= 2 ? characterList[1].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 2 ? true : false}
          isLock={tempUserCreatableCount >= 2 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/b9v.jpg"
          characterSeq={characterLen >= 2 ? characterList[1].characterSeq : null}
        />
      </div>
      <div className="flex justify-center m-8">
        <Character
          nickname={characterLen >= 3 ? characterList[2].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 3 ? true : false}
          isLock={tempUserCreatableCount >= 3 ? false : true}
          imgSrc="https://cdn2.thecatapi.com/images/b9v.jpg"
          characterSeq={characterLen >= 3 ? characterList[2].characterSeq : null}
        />
        <Character
          nickname={characterLen >= 4 ? characterList[3].nickname : null}
          isManagement={isManagement}
          isExist={characterLen >= 4 ? true : false}
          isLock={tempUserCreatableCount >= 4 ? false : true}
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
            ? ""
            : isManagement
            ? "../characters/update"
            : isExist
            ? ""
            : "../characters/create",
          state: { characterSeq },
        }}
        onClick={isLock ? (e) => e.preventDefault() : null}
      >
        {characterSeq}
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

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

function mapDispatchToProps(dispatch) {
  return { loginCharacters: (characters) => dispatch(login(characters)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
