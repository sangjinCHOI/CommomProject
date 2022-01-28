import "@material-tailwind/react/tailwind.css";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Card from "@material-tailwind/react/Card";
import Button from "@material-tailwind/react/Button";
import Logo from "../assets/images/main_logo.png";
import styles from "./Signup.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import userStore from "../store/userStore";
import { Component } from "react/cjs/react.production.min";

export default class IdInquiryResult extends Component {
  state = { data: userStore.getState().iddata };
  constructor(props) {
    super(props);
    userStore.subscribe(
      function () {
        console.log(userStore.getState().iddata);
        this.setState({ data: userStore.getState().iddata });
      }.bind(this)
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("이메일 보내기");

    axios.get().then();
  };

  render() {
    return (
      <div className={`${styles.center}`}>
        <div id="logo" className={`${styles.logo}`}>
          <img src={Logo} />
        </div>

        <Card>
          <CardBody>
            <p align="center">귀하의 아이디는 {this.state.data} 입니다.</p>
            <div align="center" className="mt-3 mb-5 px-4">
              <Button
                color="lightBlue"
                buttonType="link"
                size="lg"
                ripple="dark"
                onClick={this.onSubmit}
              >
                전체 아이디를 이메일로 전송
              </Button>
            </div>
          </CardBody>
        </Card>

        <CardFooter>
          <div>
            <Link className="flex justify-center" to="../login">
              Login
            </Link>
          </div>
        </CardFooter>
      </div>
    );
  }
}
