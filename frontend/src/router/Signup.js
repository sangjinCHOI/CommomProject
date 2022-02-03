import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { useHistory } from "react-router";
import userStore from "../store/userStore";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";

export default function Signup() {
  const history = useHistory();

  const [_id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [email, setEmail] = useState("");

  const [showIdConfirm, setShowIdConfirm] = useState(false);
  const [showIdDuplicate, setShowIdDuplicate] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [showPassCheckConfirm, setShowIdCheckConfirm] = useState(false);
  const [showEmailConfirm, setShowEmailConfirm] = useState(false);
  const [showEmailDuplicate, setShowEmailDuplicate] = useState(false);

  const onIdHandler = (e) => {
    console.log("id : " + e.target.value);
    setId(e.target.value);

    var RegId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //ID 우효성 검사 알파벳 대,소문자, 숫자만 가능

    var valId = RegId.test(e.target.value);
    if (!RegId.test(e.target.value)) {
      setShowIdConfirm(true);
    } else {
      setShowIdConfirm(false);
    }

    axios.get("http://localhost:8080/user/valid/" + e.target.value, {}).then((data) => {
      console.log(data);

      if (data.valid == 2) {
        setShowIdDuplicate(true);
        console.log("valid : " + data.valid);
      } else if (data.valid == 1) {
        setShowIdDuplicate(false);
      }
    });
  };

  const onPasswordHandler = (e) => {
    // console.log("id : " + _id);
    // const RegPass = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

    const specialLetter = e.target.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    const isValidPassword = e.target.value.length >= 8 && specialLetter >= 1;

    console.log("pass : " + e.target.value);
    setPassword(e.target.value);

    if (!isValidPassword) {
      setShowPassConfirm(true);
    } else {
      setShowPassConfirm(false);
    }
  };

  const onPasswordCheckHandler = (e) => {
    console.log("passcheck : " + e.target.value);
    setpasswordCheck(e.target.value);

    if (password === e.target.value) {
      setShowIdCheckConfirm(false);
    } else {
      setShowIdCheckConfirm(true);
    }
  };

  const onEmailHandler = (e) => {
    const isValidEmail = e.target.value.includes("@") && e.target.value.includes("."); //email 유효성 검사 @와 .포함
    if (!isValidEmail) {
      setShowEmailConfirm(true);
    } else setShowEmailConfirm(false);

    console.log("email : " + e.target.value);
    setEmail(e.target.value);

    axios.get("http://localhost:8080/user/email/valid/" + e.target.value, {}).then(({ data }) => {
      console.log(data);

      if (data.valid == 0) {
        setShowEmailDuplicate(true);
        console.log("valid : " + data.valid);
      } else if (data.valid == 1) {
        setShowEmailDuplicate(false);
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입");

    // if (!isValidInput || !isValidEmail || !isValidEmail) {
    //   alert("please fill in the blanks");
    //   console.log();
    // }

    const data = {
      userId: _id,
      userEmail: email,
      userPw: passwordCheck,
    };

    axios
      .post("http://localhost:8080/user", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data);
        console.log("test");

        axios
          .get("http://localhost:8080/user/email/", {
            params: {
              userId: _id,
            },
          })
          .then((data) => {
            userStore.dispatch({ type: "idtrans", emaildata: email, iddata: _id });
            // userStore.dispatch({ type: "idtrans", iddata: _id });

            history.push("../accounts/signup/email");
          });
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
        {showIdDuplicate ? <IdDupl></IdDupl> : null}
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
        {showEmailDuplicate ? <EmailDupl></EmailDupl> : null}
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
function IdDupl(props) {
  return (
    <div className="mb-5">
      <p>이미 사용 중인 아이디입니다.</p>
    </div>
  );
}

function PassConf(props) {
  return (
    <div className="mb-5">
      <p>비밀번호는 문자와 숫자, 특수문자를 섞어 8자 이상 16자리 이하로 만들어 주세요.</p>
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
      <p>올바른 이메일 형식이 아닙니다.</p>
    </div>
  );
}
function EmailDupl(props) {
  return (
    <div className="mb-5">
      <p>이미 사용 중인 이메일입니다.</p>
    </div>
  );
}
