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

<<<<<<< HEAD
export default function Login() {
=======
export default function Signup() {
>>>>>>> b364cecd7814286908235068c0b1aa934d677100
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
              placeholder="ID를 입력해주세요"
              outline={true}
              iconName="person"
              onChange={function () {
                setPassShow(true);
              }}
            />
            <Link to="../accounts/id_inquiry">아이디를 잊으셨나요?</Link>
            {passShow ? <PassComp></PassComp> : null}
          </div>
        </CardBody>
      </Card>

      <CardFooter>
        <div className="flex justify-center">
<<<<<<< HEAD
          <Link to="../accounts/signup">
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              regist
            </Button>
          </Link>
=======
          <a href="../signup">
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              regist
            </Button>
          </a>
>>>>>>> b364cecd7814286908235068c0b1aa934d677100
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
<<<<<<< HEAD
        placeholder="Password를 입력해주세요"
        outline={true}
        iconName="pin"
      />
      <Link to="../accounts/pw_inquiry">비밀번호를 잊으셨나요?</Link>
=======
        placeholder="Password"
        outline={true}
        iconName="pin"
      />

      <a href="">비밀번호를 잊으셨나요?</a>
>>>>>>> b364cecd7814286908235068c0b1aa934d677100
    </div>
  );
}
