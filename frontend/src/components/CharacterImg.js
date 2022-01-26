import "@material-tailwind/react/tailwind.css";
import { Image } from "@material-tailwind/react";
import styles from "./CharacterImg.module.css";
import defaultUserImg from "../assets/images/default_user.png";

export default function CharacterImg({
  nickname,
  updateUserImg,
  imgWidth = "100px",
  imgSrc = defaultUserImg,
}) {
  return (
    // <div className="my-4 mx-8">
    <div>
      <div className={`${styles.center}`}>
        <Image
          src={imgSrc}
          alt="user_img"
          width={imgWidth}
          rounded={true}
          className={(`${styles.profileWrapper}`, `${styles.ProfileImg}`)}
        />
      </div>
      <div className={`${styles.center}`}>{nickname}</div>
      <div className={`${styles.center}`}>{updateUserImg}</div>
    </div>
  );
}
