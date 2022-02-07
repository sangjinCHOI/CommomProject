import styles from "./Signup.module.css";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { connect } from "react-redux";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import Send from "../config/Send";

function SignupEmail({ userSlice }) {
  const reEmail = (e) => {
    e.preventDefault();

    Send.get(`/user/email`, {
      params: {
        userId: userSlice.userId,
      },
    })
      .then((data) => {
        if (data.status == 200) alert("인증메일을 재전송 했습니다!");
        else if (data.status == 500) alert("서버 오류입니다");
        else alert("다시한번 시도해주세요");
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={() => window.open("https://" + this.state.emaildata, "_blank")}>
            메일함 이동
          </Button>
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={reEmail}>
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

function mapStateToProps(state) {
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(SignupEmail);
