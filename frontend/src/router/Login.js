import "@material-tailwind/react/tailwind.css";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Card from "@material-tailwind/react/Card";
import Button from "@material-tailwind/react/Button";
import Logo from "../assets/images/main_logo.png";
import styles from "./Signup.module.css";
import { useState } from "react";

export default function Signup() {
  var [passShow, setPassShow] = useState(false);

  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} />
      </div>

      <Card>
        <CardBody>
          <div className="mt-3 mb-5 px-4">
            <InputIcon
              type="text"
              color="lightBlue"
              placeholder="ID"
              outline={true}
              iconName="person"
              onChange={function () {
                setPassShow(true);
              }}
            />
            <a href="">아이디를 잊으셨나요?</a>
            {passShow ? <PassComp></PassComp> : null}
          </div>
        </CardBody>
      </Card>

      <CardFooter>
        <div className="flex justify-center">
          <a href="../signup"><Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            regist
          </Button></a>
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
        placeholder="Password"
        outline={true}
        iconName="pin"
      />

      <a href="">비밀번호를 잊으셨나요?</a>
    </div>
  );
}
