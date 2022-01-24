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
          {/* <Input type="email" placeholder="Full Name" color="lightBlue" outline={true} /> */}

          <div className="mt-3 mb-5 px-4">
            <InputIcon
              type="text"
              color="lightBlue"
              placeholder="USER ID"
              outline={true}
              iconName="person"
            />
          </div>

          <div className="mb-5 px-4">
            <InputIcon
              type="password"
              color="lightBlue"
              placeholder="Password"
              outline={true}
              iconName="pin"
            />
          </div>

          <div className="mb-5 px-4">
            <InputIcon
              type="password"
              color="lightBlue"
              placeholder="Password"
              outline={true}
              iconName="pin"
            />
          </div>

          <div className="mb-4 px-4">
            <InputIcon
              type="email"
              color="lightBlue"
              placeholder="Email Address"
              outline={true}
              iconName="email"
            />
          </div>
        </CardBody>
      </Card>

      <CardFooter>
        <div className="flex justify-center">
          <Button color="lightBlue" buttonType="link" size="lg" ripple="dark">
            Register
          </Button>
        </div>

        <div>
          <a className="flex justify-center" href="../login">
            이미 회원이십니까?
          </a>
        </div>
      </CardFooter>
    </div>
  );
}
