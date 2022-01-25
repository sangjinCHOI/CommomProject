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
          <p align="center">귀하의 아이디는 {} 입니다.</p>

          <div align="center" className="mt-3 mb-5 px-4">

          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            전체 아이디를 이메일러 전송
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
