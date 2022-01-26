import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";

export default function Signup() {
  const [_id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [email, setEmail] = useState("");

  const [showIdConfirm, setShowIdConfirm] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [showPassCheckConfirm, setShowIdCheckConfirm] = useState(false);
  const [showEmailConfirm, setShowEmailConfirm] = useState(false);

  const onIdHandler = (e) => {
    console.log("id : " + _id);
    setId(e.target.value);

    var RegId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

    if (!RegId.test(_id)) {
      setShowIdConfirm(true);
    } else {
      setShowIdConfirm(false);
    }

    axios
      .get("http://localhost:8080/user/valid", {
        params: {
          userId: e.target.value,
        },
      })
      .then(({ data }) => {
        if (data.valid == 2) {
          console.log("중복");
        }
      });
  };

  const onPasswordHandler = (e) => {
    // console.log("id : " + _id);
    // const RegPass = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

    const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    const isValidPassword = password.length >= 8 && specialLetter >= 1;

    console.log("pass : " + password);
    setPassword(e.target.value);

    if (!isValidPassword) {
      setShowPassConfirm(true);
    } else {
      setShowPassConfirm(false);
    }
  };

  const onPasswordCheckHandler = (e) => {
    console.log("passcheck : " + passwordCheck);
    setpasswordCheck(e.target.value);

    if (password == e.target.value) {
      setShowIdCheckConfirm(true);
    } else {
      setShowIdCheckConfirm(false);
    }
  };

  const onEmailHandler = (e) => {
    const isValidEmail = email.includes("@") && email.includes(".");
    if (!isValidEmail) {
      setShowEmailConfirm(true);
    } else setShowEmailConfirm(false);

    console.log("email : " + email);
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입");

    // if (!isValidInput || !isValidEmail || !isValidEmail) {
    //   alert("please fill in the blanks");
    //   console.log();
    // }

    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/user",
    //   data: {
    //     userEmail: email.toString,
    //     userId: _id.toString,
    //     userPw: passwordCheck.toString,
    //   },
    axios
      .post("http://localhost:8080/user", {
        userEmail: " ",
        userId: " ",
        userPw: " ",
      })
      .then((Response) => console.log(Response.data));
    // .then((document.location.href = "/accounts/login"));

    axios
      .get("http://localhost:8080/user", {
        params: {
          userSeq: 1,
        },
      })
      .then((Response) => console.log(Response.data));
  };

  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} />
      </div>
      <br />

      {/* <Input type="email" placeholder="Full Name" color="lightBlue" outline={true} /> */}

      <div className="mt-3 mb-5 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            placeholder="USER ID"
            outline={true}
            iconName="person"
            onChange={onIdHandler}
          />
        </div>
        {showIdConfirm ? <IdConf></IdConf> : null}
      </div>

      <div className="mb-5 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="password"
            color="lightBlue"
            placeholder="Password"
            outline={true}
            iconName="pin"
            onChange={onPasswordHandler}
          />
        </div>
        {showPassConfirm ? <PassConf></PassConf> : null}
      </div>

      <div className="mb-5 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="password"
            color="lightBlue"
            placeholder="Password Check"
            outline={true}
            iconName="pin"
            onChange={onPasswordCheckHandler}
          />
        </div>
        {showPassCheckConfirm ? <PassCheckConf></PassCheckConf> : null}
      </div>

      <div className="mb-4 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="email"
            color="lightBlue"
            placeholder="Email Address"
            outline={true}
            iconName="email"
            onChange={onEmailHandler}
          />
        </div>
        {showEmailConfirm ? <EmailConf></EmailConf> : null}
      </div>

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={onSubmit}>
            Register
          </Button>
        </div>

        <div>
          <Link className="flex justify-center" to="../accounts/login">
            이미 회원이십니까?
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}

function IdConf(props) {
  return (
    <div className="mb-5">
      <p>아이디는 문자와 숫자를 섞어 8자 이상 16자리 이하로 만들어 주세요.(특수문자 제외)</p>
    </div>
  );
}

function PassConf(props) {
  return (
    <div className="mb-5">
      <p>비밀번호는 문자와 숫자를 섞어 8자 이상 16자리 이하로 만들어 주세요.(특수문자 제외)</p>
    </div>
  );
}
function PassCheckConf(props) {
  return (
    <div className="mb-5">
      <p>비밀번호가 동일 하지 않습니다.</p>
    </div>
  );
}
function EmailConf(props) {
  return (
    <div className="mb-5">
      <p>이메일 형식이 잘못 되었습니다.</p>
    </div>
  );
}
