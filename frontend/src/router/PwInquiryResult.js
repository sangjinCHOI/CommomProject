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
          <p align="center">임시 비밀번호가 등록된 이메일로 전송되었습니다.</p>

          <div align="center" className="mt-6 mb-1 px-4">
            <a href="#"></a>
            <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
              메일함 이동
            </Button>
          </div>
        </CardBody>
      </Card>

      <CardFooter>
        {/* <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            로그인
          </Button>
        </div> */}

        <div>
          <a className="flex justify-center" href="../Login">
            Login
          </a>
        </div>
      </CardFooter>
    </div>
  );
}
