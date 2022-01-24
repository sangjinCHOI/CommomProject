import "@material-tailwind/react/tailwind.css";
import { Image } from "@material-tailwind/react";
import styles from "./CharactersProfile.module.css";
import defaultUserImg from "../assets/images/default_user_img.png";

export default function CharactersProfile({ nickname, updateUserImg }) {
  return (
    <div className="mx-16 my-8">
      <div className={`${styles.center}`}>
        <Image
          src={defaultUserImg}
          alt="user_img"
          width="100px"
          rounded={true}
          className={(`${styles.profileWrapper}`, `${styles.ProfileImg}`)}
        />
      </div>
      <div className={`${styles.center}`}>{nickname}</div>
      <div className={`${styles.center}`}>{updateUserImg}</div>
    </div>
  );
}
