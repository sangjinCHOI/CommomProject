import "@material-tailwind/react/tailwind.css";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Card from "@material-tailwind/react/Card";
import Button from "@material-tailwind/react/Button";
import Logo from "../assets/images/main_logo.png";
import styles from "./Signup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  var [passShow, setPassShow] = useState(false);

  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} />
      </div>

      <div className="mt-3 mb-5 px-4">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            placeholder="ID를 입력해주세요"
            outline={true}
            iconName="person"
            onChange={function () {
              setPassShow(true);
            }}
          />
        </div>
        <Link to="../accounts/id_inquiry">아이디를 잊으셨나요?</Link>
        {passShow ? <PassComp></PassComp> : null}
      </div>

      <CardFooter>
        <div className="flex justify-center">
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

function PassComp() {
  return (
    <div className="mb-5">
      <InputIcon
        type="password"
        color="lightBlue"
        placeholder="Password를 입력해주세요"
        outline={true}
        iconName="pin"
      />
      <Link to="../accounts/pw_inquiry">비밀번호를 잊으셨나요?</Link>
    </div>
  );
}
