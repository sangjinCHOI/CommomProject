import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";

export default function PwInquiry() {
  var [emailShow, setEmailShow] = useState(false);
  const [_id, setId] = useState("");
  const [email, setEmail] = useState("");

  const onIdHandler = (e) => {
    console.log("id : " + e.target.value);
    setId(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setEmail("test : " + e.target.value);
      console.log(email);
      setEmailShow(true);
      onSubmit(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("비밀번호 찾기");

    const data = {
      userEmail: email,
      userId: _id,
    };

    axios
      .put("http://localhost:8080/user/email/", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        alert("이메일을 확인해 주세요");
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

      <p align="center">가입한 ID을 입력해 주세요.</p>

      <div className="mt-3 mb-4 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            placeholder="ID"
            outline={true}
            iconName="person"
            onChange={onIdHandler}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      {emailShow ? <EmailComp handleKeyPress={handleKeyPress}></EmailComp> : null}

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={onSubmit}>
            비밀번호 찾기
          </Button>
        </div>

        <div>
          <Link className="flex justify-center" to="../accounts/login">
            Login
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}

const EmailComp = ({ handleKeyPress }) => {
  return (
    <>
      <p align="center">가입한 이메일을 입력해 주세요.</p>

      <div className="mt-3 mb-5 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            placeholder="E-mail"
            outline={true}
            iconName="person"
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};
