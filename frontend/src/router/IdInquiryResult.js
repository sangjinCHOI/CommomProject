import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import userStore from "../store/userStore";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { Component } from "react/cjs/react.production.min";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";

export default class IdInquiryResult extends Component {
  state = {
    star: Math.round(String(userStore.getState().iddata).length / 2),
    data:
      userStore.getState().iddata.substr(0, String(userStore.getState().iddata).length / 2) +
      "****",
    emaildata: userStore.getState().emaildata,
  };
  constructor(props) {
    super(props);

    userStore.subscribe(
      function () {
        this.setState({ emaildata: userStore.getState().emaildata });
        // console.log(blind_id);
      }.bind(this)
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("이메일 보내기");
    console.log("asfaa" + this.state.emaildata);
    axios
      .get("http://localhost:8080/user/email/id", {
        params: {
          userEmail: this.state.emaildata,
        },
      })
      .then((data) => {
        console.log(data);
        alert("이메일을 확인해 주세요!");
      })
      .catch((e) => {
        console.log(e);
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
