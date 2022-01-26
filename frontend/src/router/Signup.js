import "@material-tailwind/react/tailwind.css";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import Logo from "../assets/images/main_logo.png";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [_id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [email, setEmail] = useState("");

  const onIdHandler = (e) => {
    console.log("id : " + _id);
    setId(e.target.value);
  };

  const onPasswordHandler = (e) => {
    console.log("pass : " + password);
    setPassword(e.target.value);
  };

  const onPasswordCheckHandler = (e) => {
    console.log("passcheck : " + passwordCheck);
    setpasswordCheck(e.target.value);
  };

  const onEmailHandler = (e) => {
    console.log("email : " + email);
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log("회원가입");
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
