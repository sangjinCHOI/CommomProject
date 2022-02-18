import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { useHistory } from "react-router";
import { useState, useCallback } from "react";
import "@material-tailwind/react/tailwind.css";
import Logo from "../assets/images/main_logo.png";
import { CardFooter, InputIcon, Button } from "@material-tailwind/react";
import Send from "../config/Send";

import { connect } from "react-redux";
import { saveId } from "../store/user";

//^^ 여기 이메일+아이디로 확인해야하는데 단순히 아이디만 입력해도 보내지게 되어있음
//^^ Send.put 실제로 동작하는지 하나씩 확인해야함
//^^ 필요에 따라 추가적인 API 만들어야하는지 고민
function PwInquiry({ saveUser, userSlice }) {
  const history = useHistory();

  var [emailShow, setEmailShow] = useState(false);
  const [_id, setId] = useState("");
  const [email, setEmail] = useState("");

  const onIdHandler = (e) => {
    // console.log("id : " + e.target.value);
    setId(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setEmail("test : " + e.target.value);
      setEmailShow(true);
    }
  };

  const emailHandleKeyPress = useCallback((e) => {
    if (e.key === "Enter") {
      setEmail(e.target.value);
      // console.log(e.target.value);
      onSubmit();
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("비밀번호 찾기");
    // console.log(userSlice);
    const data = {
      userEmail: email,
      userId: _id,
    };

    Send.put("/user/email", JSON.stringify(data))
      .then((data) => {
        if (data.status === 200) {
          history.push("./pw_inquiry/result");
        } else {
          alert("ID 또는 Email을 확인해 주세요.");
        }
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

      <p align="center">가입한 ID을 입력해 주세요.</p>

      <div className="mt-3 mb-4 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon
            type="text"
            color="lightBlue"
            placeholder="ID"
            outline={true}
            iconName="person"
            onChange={onIdHandler}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      {emailShow ? <EmailComp emailHandleKeyPress={emailHandleKeyPress}></EmailComp> : null}

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark" onClick={onSubmit}>
            비밀번호 찾기
          </Button>
        </div>

        <div>
          <Link className="flex justify-center" to="../accounts/login">
            Login
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}

const EmailComp = ({ emailHandleKeyPress }) => {
  return (
    <>
      <p align="center">가입한 이메일을 입력해 주세요.</p>

      <div className="mt-3 mb-5 px-11">
        <div className="bg-white rounded-lg">
          <InputIcon type="text" color="lightBlue" placeholder="E-mail" outline={true} iconName="person" onKeyPress={emailHandleKeyPress} />
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { userSlice: state.user };
}

function mapDispatchToProps(dispatch) {
  return { saveUser: (user) => dispatch(saveId(user)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(PwInquiry);
