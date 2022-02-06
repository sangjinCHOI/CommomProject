import React, { useEffect, useState } from "react";
//import userStore from "../store/userStore";
import styles from "./Signup.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardBody, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, InputIcon } from "@material-tailwind/react";
import axios from "axios";
import Send from "../config/Send";
import { save } from "../store/characterStore";
import { connect } from "react-redux";

function SettingsAccount({ userSlice }) {
  //console.log(userSlice);
  //export default function SettingsAccount() {
  const [showPwModal, setShowPwModal] = useState(false);
  const [showBirthModal, setShowBirthModal] = useState(false);

  const [birth, setBirth] = useState(new Date());
  const [date, setDate] = useState(false);
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [passwordcheck, setpasswordCheck] = useState("");
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [showPassEqual, setShowPassEqual] = useState(false);
  const [PassCheckEqual, setPassCheckEqual] = useState(false);
  const [showPassCheckConfirm, setShowPassCheckConfirm] = useState(false);
  const [iddata, setIddata] = useState(userSlice.userId);
  const [emildata, setEmildata] = useState(userSlice.userEmail);
  const [mode, setMode] = useState("pass");

  //console.log("iddata");
  //console.log(iddata);
  useEffect(() => {
    //  setIddata({ iddata: userSlice.iddata });
    //  setEmildata({ emildata: userSlice.emildata });
  }, []);

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const ChangePasswordHandler = (e) => {
    setChangePassword(e.target.value);
    const specialLetter = e.target.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    const isValidPassword = e.target.value.length >= 8 && specialLetter >= 1;

    if (!isValidPassword) {
      setShowPassConfirm(true);
    } else {
      setShowPassConfirm(false);
    }
    if (password == e.target.value) {
      setPassCheckEqual(true);
    } else {
      setPassCheckEqual(false);
    }
  };

  const ChangePasswordCheckHandler = (e) => {
    setpasswordCheck(e.target.value);

    if (changePassword === e.target.value) {
      setShowPassCheckConfirm(false);
    } else {
      setShowPassCheckConfirm(true);
    }
    if (changePassword === passwordcheck) {
      console.log("!");
      setShowPassEqual(true);
    } else {
      setShowPassEqual(false);
      console.log("@");
    }
  };

  const pwData = {
    userId: iddata,
    userPw: passwordcheck,
  };
  const ChangePassBtn = (e) => {
    //^^ 비밀번호 유효성검사 어떻게 되는지 확인해야함
    console.log(PassCheckEqual);
    console.log(showPassEqual);
    if (!(!PassCheckEqual && showPassEqual)) {
      alert("비밀번호를 확인해 주세여");
      console.log(changePassword);
      console.log(passwordcheck);
      console.log(pwData);
    } else {
      Send.put("/user/setting/account", JSON.stringify(pwData))
        // axios
        //   .put("http://localhost:8080/user/setting/account", JSON.stringify(pwData), {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   })
        .then((data) => {
          if (data.status === 200) {
            setPassword(passwordcheck);
            alert("비밀번호를 성공적으로 변경하였습니다.");
            setpasswordCheck(() => "");
            setChangePassword("");
            setShowPwModal(false);
          }
        })
        .catch((e) => {
          console.log(e);
          alert("비밀번호 변경을 실패하였습니다.");
        });
    }
  };

  const deleteInput = () => {
    setShowPwModal(false);
    setpasswordCheck("");
    console.log(passwordcheck);
    setChangePassword("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setPassword(e.target.value);

      settingChange();
    }
  };

  const onBirthHandler = (e) => {
    var year = birth.getFullYear();
    var month = birth.getMonth() + 1;
    var day = birth.getDate();
    console.log(year);
    console.log(month);
    console.log(day);
    setDate(String(year + "-" + month + "-" + day));
    // console.log(date2);

    changeBirthHandler();
  };

  const birthData = {
    userBirth: date,
    userId: iddata.iddata,
  };
  const changeBirthHandler = (e) => {
    //^^ 여기 put 정상작동하는지 확인
    axios
      .put("http://localhost:8080/user/setting/account", JSON.stringify(birthData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        if (data.status === 200) {
          alert("생년월일을 성공적으로 변경하였습니다.");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("생년월일 변경을 실패하였습니다.");
      });
  };

  const data = {
    userId: iddata,
    userPw: password,
  };

  const settingChange = (e) => {
    console.log(data);

    Send.post("/user/setting/verification", JSON.stringify(data))
      // axios
      //   .post("http://localhost:8080/user/setting/verification", JSON.stringify(data), {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      .then((data) => {
        console.log(data);
        console.log(iddata);
        console.log(password);
        if (data.status === 200) {
          console.log(data);
          setMode("setting");
        } else {
          alert("비밀번호를 확인해주세요");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getContent = () => {
    if (mode === "pass") {
      return (
        <div className={`${styles.center2}`}>
          <div className="flex mx-20 px-5">
            <div className="bg-white rounded-lg">
              <InputIcon
                type="password"
                color="lightBlue"
                placeholder="password를 입력해주세요"
                outline={true}
                iconName="pin"
                // value={_id}
                onChange={onPasswordHandler}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>
      );
    } else if (mode === "setting") {
      return (
        <>
          <div className="flex mx-10 mt-20">
            <Card>
              <CardBody className="pt-0 mx-5">
                <div className="overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <tbody>
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                          <span className="text-lg font-bold">아이디</span>
                          <br />
                          <span>{iddata.iddata}</span>
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                      </tr>
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                          <span className="text-lg font-bold">이메일</span>
                          <br />
                          <span>helloworld@gmail.com </span>
                          {/* <span>{emildata.emildata}</span> */}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                      </tr>
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                          <span className="text-lg font-bold">비밀번호</span>
                          <br />
                          <span className="invisible">password</span>
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                          <button className="material-icons" onClick={(e) => setShowPwModal(true)}>
                            arrow_forward_ios
                          </button>
                        </th>
                      </tr>
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                          <span className="text-lg font-bold">생년월일</span>
                          <br />
                          <span>{date}</span>
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                          <button className="material-icons" onClick={(e) => setShowBirthModal(true)}>
                            arrow_forward_ios
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* 비밀번호 변경 modal */}
          <Modal size="regular" active={showPwModal} toggler={() => setShowPwModal(false)}>
            <ModalHeader toggler={() => setShowPwModal(false)} className="text-center">
              비밀번호 변경
            </ModalHeader>
            <hr className="mb-5" />
            <ModalBody>
              <p className="text-base leading-relaxed text-gray-600 font-normal">새로운 비밀번호를 입력하세요.</p>
              <Input type="password" placeholder="" onKeyUp={ChangePasswordHandler}></Input>
              {showPassConfirm ? <PassConf></PassConf> : null}
              {PassCheckEqual ? <PassCheckEqualConf></PassCheckEqualConf> : null}
              <span className="invisible">-------------------------------------------------</span>
              <p className="text-base leading-relaxed text-gray-600 font-normal">새로운 비밀번호를 다시 한 번 입력하세요.</p>
              <Input type="password" placeholder="" onKeyUp={ChangePasswordCheckHandler}></Input>
              {showPassCheckConfirm ? <PassCheckConf></PassCheckConf> : null}
            </ModalBody>
            <ModalFooter>
              {/* <Button color="black" buttonType="link" onClick={(e) => setShowPwModal(false)} ripple="dark"> */}
              <Button color="black" buttonType="link" onClick={() => deleteInput()} ripple="dark">
                Close
              </Button>

              <Button color="lightBlue" onClick={(e) => ChangePassBtn()} ripple="light">
                변경
              </Button>
            </ModalFooter>
          </Modal>

          {/* 생년월일 변경 modal */}
          <Modal size="regular" active={showBirthModal} toggler={() => setShowBirthModal(false)}>
            <ModalHeader toggler={() => setShowBirthModal(false)} className="text-center">
              생년월일 변경
            </ModalHeader>
            <hr className="mb-5" />
            <ModalBody>
              <p className="text-base leading-relaxed text-gray-600 font-normal">생년월일을 입력하세요.</p>
              {/* <Input
                id="birthDate"
                name="birthDate"
                type="date"
                placeholder=""
                min="1900-01-01"
                max="2500-12-31"
              ></Input> */}
              <DatePicker selected={birth} onChange={(date) => setBirth(date)}></DatePicker>
              <span className="invisible">-------------------------------------------------</span>
            </ModalBody>
            <ModalFooter>
              <Button color="black" buttonType="link" onClick={(e) => setShowBirthModal(false)} ripple="dark">
                Close
              </Button>

              <Button color="lightBlue" onClick={onBirthHandler} ripple="light">
                변경
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  };

  return <div>{getContent()}</div>;
}

function PassConf(props) {
  return (
    <div className="mb-5">
      <p>비밀번호는 문자와 숫자, 특수문자를 섞어 8자 이상 16자리 이하로 만들어 주세요.</p>
    </div>
  );
}

function PassCheckConf(props) {
  return (
    <div className="mb-5">
      <p>비밀번호가 동일 하지 않습니다.</p>
    </div>
  );
}

function PassCheckEqualConf(props) {
  return (
    <div className="mb-5">
      <p>이미 사용중인 비밀번호입니다.</p>
    </div>
  );
}

function mapStateToProps(state) {
  return { userSlice: state.user };
}

function mapDispatchToProps(dispatch) {
  return { saveCharacter: (user) => dispatch(save(user)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsAccount);
