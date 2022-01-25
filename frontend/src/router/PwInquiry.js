import "@material-tailwind/react/tailwind.css";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import Logo from "../assets/images/main_logo.png";
import styles from "./Signup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PwInquiry() {
  var [emailShow, setEmailShow] = useState(false);

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
            onChange={function () {
              setEmailShow(true);
            }}
          />
        </div>
      </div>

      {emailShow ? <EmailComp></EmailComp> : null}

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
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

function EmailComp() {
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
          />
        </div>
      </div>
    </>
  );
}
