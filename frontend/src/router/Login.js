import "@material-tailwind/react/tailwind.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import Logo from "../assets/images/main_logo.png";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";

export default function Login() {
  // const dispatch = useDispatch();

  const [_id, setId] = useState("");
  let [passShow, setPassShow] = useState(false);

  const onIdHandler = (e) => {
    console.log("id : " + e.target.value);

    setId(e.target.value);
    if (e.target.value == "") {
      setPassShow(false);
    }
  };

  // const onPasswordHandler = (e) => {
  //   console.log("pass : " + password);
  //   setPassword(e.target.value);
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setPassShow(true);
    }
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
            onKeyPress={handleKeyPress}
          />
        </div>
        <Link to="../accounts/id_inquiry">아이디를 잊으셨나요?</Link>
        {passShow ? <PassComp value={_id}></PassComp> : null}
      </div>
      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            로그인
          </Button>
          <Link to="../accounts/signup">
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              regist
            </Button>
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}

function PassComp(props) {
  const [password, setPassword] = useState("");

  const onPasswordHandler = (e) => {
    console.log("pass : " + e.target.value);
    setPassword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  const onSubmit = () => {
    console.log("로그인");

    const data = {
      userId: props.value,
      userPw: password,
    };

    axios
      .get("http://localhost:8080/user/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("data : " + data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="mb-5">
      <div className="bg-white rounded-lg">
        <InputIcon
          type="password"
          color="lightBlue"
          placeholder="Password를 입력해주세요"
          outline={true}
          iconName="pin"
          value={password}
          onChange={onPasswordHandler}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Link to="../accounts/pw_inquiry">비밀번호를 잊으셨나요?</Link>
    </div>
  );
}
