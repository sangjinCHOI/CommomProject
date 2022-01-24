import "@material-tailwind/react/tailwind.css";
import { Image } from "@material-tailwind/react";
import styles from "./CharacterImg.module.css";
import defaultUserImg from "../assets/images/default_user_img.png";

export default function CharacterImg({
  nickname,
  updateUserImg,
  imgWidth = "100px",
}) {
  const imgSize = imgWidth;
  return (
    <div className="my-4 mx-8">
      <div className={`${styles.center}`}>
        <Image
          src={defaultUserImg}
          alt="user_img"
          width={imgSize}
          rounded={true}
          className={(`${styles.profileWrapper}`, `${styles.ProfileImg}`)}
        />
      </div>
      <div className={`${styles.center}`}>{nickname}</div>
      <div className={`${styles.center}`}>{updateUserImg}</div>
    </div>
  );
}
