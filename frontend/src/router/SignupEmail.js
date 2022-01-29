import styles from "./Signup.module.css";
import userStore from "../store/userStore";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { Component } from "react/cjs/react.production.min";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import axios from "axios";

export default class SignupEmail extends Component {
  state = {
    emaildata: userStore.getState().emaildata,
    iddata: userStore.getState().iddata,
  };

  constructor(props) {
    super(props);
    userStore.subscribe(
      function () {
        this.setState({ data: userStore.getState().emaildata });
        this.setState({ iddata: userStore.getState().iddata });
        console.log("아이디 데이터" + this.state.iddata);
        console.log("아이디 데이터" + this.state.emaildata);
      }.bind(this)
    );
  }

  reEmail = (e) => {
    e.preventDefault();
    console.log("이메일 재전송");
    console.log("아이디 : " + this.state.iddata);
    console.log("이메일 : " + this.state.data);

    axios
      .get("http://localhost:8080/user/email/", {
        params: {
          userId: this.state.iddata,
        },
      })
      .then((data) => {
        userStore.dispatch({ type: "idtrans", iddata: this.state.iddata });
      });
  };

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
            <Button
              color="lightBlue"
              buttonType="link"
              size="lg"
              ripple="dark"
              onClick={this.reEmail}
            >
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
