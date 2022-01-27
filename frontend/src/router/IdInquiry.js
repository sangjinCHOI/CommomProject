import "@material-tailwind/react/tailwind.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import Logo from "../assets/images/main_logo.png";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";
import axios from "axios";
import userStore from "../userStore";

export default function IdInquiry() {
  const [email, setEmail] = useState("");
  const [showEmailConfirm, setShowEmailConfirm] = useState(false);
  const [mode, setMode] = useState("id");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("이메일 보내기");

    axios
      .get("http://localhost:8080/user/email/" + email, {})
      .then((data) => {
        console.log(data);

        userStore.dispatch({ type: "idInquiry", iddata: data });
        console.log(userStore.iddata);
        // document.location.href = "./id_inquiry/result";
      })
      .catch((e) => {});
  };

  const onEmailHandler = (e) => {
    const isValidEmail = e.target.value.includes("@") && e.target.value.includes("."); //email 유효성 검사 @와 .포함

    if (!isValidEmail) {
      setShowEmailConfirm(true);
    } else setShowEmailConfirm(false);

    console.log("email : " + e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} />
      </div>

      <div>
        <p align="center">가입한 이메일을 입력해 주세요.</p>
        <br />

        <div className="mt-3 mb-5 px-11">
          <div className="bg-white rounded-lg">
            <InputIcon
              type="text"
              color="lightBlue"
              placeholder="E-mail"
              outline={true}
              iconName="person"
              onChange={onEmailHandler}
              onKeyPress={handleKeyPress}
            />
          </div>
          {showEmailConfirm ? <EmailConf></EmailConf> : null}
        </div>
      </div>

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={onSubmit}>
            아이디 찾기
          </Button>
          <Link to="../accounts/pw_inquiry">
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              비밀번호 찾기
            </Button>
          </Link>
        </div>

        <div>
          <Link className="flex justify-center" to="../accounts/login">
            back
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}

function EmailConf(props) {
  return (
    <div className="mb-5">
      <p>올바른 이메일 형식이 아닙니다.</p>
    </div>
  );
}
