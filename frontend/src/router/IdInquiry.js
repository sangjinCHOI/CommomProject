import "@material-tailwind/react/tailwind.css";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Card from "@material-tailwind/react/Card";
import Button from "@material-tailwind/react/Button";
import Logo from "../assets/images/main_logo.png";
import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={`${styles.center}`}>
      <div id="logo" className={`${styles.logo}`}>
        <img src={Logo} />
      </div>

      <Card>
        <CardBody>
          <p align="center">가입한 이메일을 입력해 주세요.</p>
          <br />

          <div className="mt-3 mb-5 px-4">
            <InputIcon
              type="text"
              color="lightBlue"
              placeholder="ID"
              outline={true}
              iconName="person"
            />
          </div>

        </CardBody>
      </Card>

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            아이디 찾기
          </Button>
          <a href=""></a><Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            비밀번호 찾기
          </Button>
        </div>

        <div>
          <a className="flex justify-center" href="../Login">
            back
          </a>
        </div>
      </CardFooter>
    </div>
  );
}
