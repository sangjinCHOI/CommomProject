import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";

import Send from "../config/Send";
import { connect } from "react-redux";

function IdInquiryResult({ userSlice }) {
  const [data, setData] = useState(userSlice.userId.substr(0, String(userSlice.userId).length / 2) + "****");
  const [emaildata, setEmailData] = useState(userSlice.userEmail);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("이메일 보내기");
    // console.log("asfaa" + emaildata);
    Send.get(`/user/email/id`, {
      params: {
        userEmail: emaildata,
      },
    })
      .then((data) => {
        // console.log(data);
        alert("이메일을 확인해 주세요!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} alt="" />
      </div>

      <Card>
        <CardBody>
          <p align="center">귀하의 아이디는 {data} 입니다.</p>
          <div align="center" className="mt-3 mb-5 px-4">
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={onSubmit}>
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

function mapStateToProps(state) {
  // console.log(state);
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(IdInquiryResult);
