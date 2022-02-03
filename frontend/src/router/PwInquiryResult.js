import styles from "./Signup.module.css";
import userStore from "../store/userStore";
import "@material-tailwind/react/tailwind.css";
import Card from "@material-tailwind/react/Card";
import Logo from "../assets/images/main_logo.png";
import Button from "@material-tailwind/react/Button";
import { Component } from "react/cjs/react.development";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";

export default class PwInquiryResult extends Component {
  state = { data: userStore.getState().emaildata };

  constructor(props) {
    super(props);
    userStore.subscribe(
      function () {
        this.setState({ data: userStore.getState().emaildata });
      }.bind(this)
    );
  }

  render() {
    return (
      <div className={`${styles.center}`}>
        <div id="logo" className={`${styles.logo}`}>
          <img src={Logo} />
        </div>

        <Card>
          <CardBody>
            <p align="center">임시 비밀번호가 등록된 이메일로 전송되었습니다.</p>

            <div align="center" className="mt-6 mb-1 px-4">
              <a href="#"></a>
              <Button
                color="lightBlue"
                buttonType="link"
                size="lg"
                ripple="dark"
                onClick={() => window.open("https://" + this.state.data, "_blank")}
              >
                메일함 이동
              </Button>
            </div>
          </CardBody>
        </Card>

        <CardFooter>
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
