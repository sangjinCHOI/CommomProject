import axios from "axios";
import styles from "./Signup.module.css";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { connect } from "react-redux";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { useState } from "react";

function SignupEmail({ userSlice }) {
  console.log(userSlice);
  //export default class SignupEmail extends Component {
  //const [iddata, setIdData] = useState()
  // state = {
  //   iddata: userStore.getState().iddata,
  //   emaildata: userStore.getState().emaildata,
  // };

  //constructor(props) {
  //super(props);
  // userStore.subscribe(
  //   function () {
  //     this.setState({ iddata: userStore.getState().iddata });
  //     this.setState({ emaildata: userStore.getState().emaildata });
  //   }.bind(this)
  // );
  //}

  const reEmail = (e) => {
    e.preventDefault();
    console.log("이메일 재전송");
    console.log("아이디 : " + userSlice.userId);
    console.log("이메일 : " + userSlice.userEmail);

    axios
      .get("http://localhost:8080/user/email/", {
        params: {
          userId: userSlice.userEmail,
        },
      })
      .then((data) => {
        console.log("data");
        console.log(data);
        //^^
        //userStore.dispatch({ type: "idtrans", iddata: this.state.iddata });
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

// function mapDispatchToProps(dispatch) {
//   return { saveCharacter: (user) => dispatch(save(user)) };
// }

export default connect(mapStateToProps)(SignupEmail);
