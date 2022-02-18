import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { useHistory } from "react-router";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";
import Send from "../config/Send";

import { connect } from "react-redux";
import { save } from "../store/user";

function Login({ saveUser, userSlice }) {
  const history = useHistory();
  const [_id, setId] = useState("");
  const [password, setPassword] = useState("");

  let [passShow, setPassShow] = useState(false);

  const onIdHandler = (e) => {
    setId(e.target.value);
    if (e.target.value === "") {
      setPassShow(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setPassword(e.target.value);
      setPassShow(true);
      setTimeout(() => {
        let temp = document.getElementById("passwordInput");
        temp.querySelector("input").focus();
      }, 50);
    }
  };

  const pwHandleKeyPress = (e) => {
    setPassword(e.target.value);
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      userId: _id,
      userPw: password,
    };
    // console.log(data);
    Send.post(`/user/login`, JSON.stringify(data))

      .then((res) => {
        if (res.status === 202) {
          alert("아이디 및 비밀번호를 확인해주세요");
          return;
        } else if (res.status === 204) {
          alert("메일 인증을 완료해주세요");
          return;
        }
        window.localStorage.setItem("idToken", JSON.stringify(res.data));
        Send.get(`/user/${data.userId}`)
          .then((res) => {
            saveUser(res.data);
            history.push({
              pathname: "../characters/select",
              props: {
                userId: data.userId,
                userSeq: res.data.userSeq,
                userCreatableCount: res.data.userCreatableCount,
              },
            });
            // userStore.dispatch({
            //   type: "userSave",
            //   userSeq: res.data.userSeq,
            //   userCreatableCount: res.data.userCreatableCount,
            // });

            // userSeq를 localStorage에 저장? or token으로 찾는 방법?
            // 모든 페이지에서 캐릭터 선택 창으로 갈 때 userSeq가 필요함
            // localStorage.setItem("userSeq", res.data.userSeq);
            // console.log(localStorage.getItem("userSeq"));
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} />
      </div>
      <br />

      <div className="mt-3 mb-5 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            placeholder="ID를 입력해주세요"
            outline={true}
            iconName="person"
            value={_id}
            onChange={onIdHandler}
            onKeyUp={handleKeyPress}
          />
        </div>
        <Link to="../accounts/id_inquiry">아이디를 잊으셨나요?</Link>
        {passShow ? <PassComp pwHandleKeyPress={pwHandleKeyPress}></PassComp> : null}
      </div>
      <CardFooter>
        <div className="flex justify-center">
          <Link to="../accounts/signup">
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              회원가입
            </Button>
          </Link>
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={onSubmit}>
            로그인
          </Button>
        </div>
      </CardFooter>
    </div>
  );
}

const PassComp = ({ pwHandleKeyPress }) => {
  return (
    <div className="mb-5">
      <div id="passwordInput" className="bg-white rounded-lg">
        <InputIcon
          type="password"
          color="lightBlue"
          placeholder="Password를 입력해주세요"
          outline={true}
          iconName="pin"
          // value={password}
          //onChange={onPasswordHandler}
          onKeyUp={pwHandleKeyPress}
        />
      </div>
      <Link to="../accounts/pw_inquiry">비밀번호를 잊으셨나요?</Link>
    </div>
  );
};

function mapStateToProps(state) {
  return { userSlice: state.user };
}

function mapDispatchToProps(dispatch) {
  return { saveUser: (user) => dispatch(save(user)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
