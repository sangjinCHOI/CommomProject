import styles from "./Signup.module.css";
import userStore from "../store/userStore";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { Component } from "react/cjs/react.production.min";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";

export default class SignupEmail extends Component {
  state = { data: userStore.getState().emaildata };

  constructor(props) {
    super(props);
    userStore.subscribe(
      function () {
        console.log(userStore.getState().emaildata);
        this.setState({ data: userStore.getState().emaildata });
      }.bind(this)
    );
  }

  // moveEmail = (e) => {
  //   e.preventDefault();

  // };

  render() {
    return (
      <div className={`${styles.center}`}>
        <div id="logo" className={`${styles.logo}`}>
          <img src={Logo} />
        </div>

        <Card>
          <CardBody>
            <p align="center">가입하신 이메일로 인증메일이 발송되었습니다.</p>
            <br />
            <p align="center">메일함을 확인해주세요.</p>
          </CardBody>
        </Card>

        <CardFooter>
          <div className="flex justify-center">
            <Button
              color="lightBlue"
              buttonType="link"
              size="lg"
              ripple="dark"
              onClick={() => window.open("https://" + this.state.data, "_blank")}
            >
              메일함 이동
            </Button>
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              메일 재발송
            </Button>
          </div>

          <div>
            <a className="flex justify-center" href="../Login">
              Login
            </a>
          </div>
        </CardFooter>
      </div>
    );
  }
}

// export default function SignupEmail() {

// }
