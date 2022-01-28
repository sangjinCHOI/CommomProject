import "@material-tailwind/react/tailwind.css";
import { Image } from "@material-tailwind/react";
import styles from "./CharacterImg.module.css";
import defaultUserImg from "../assets/images/default_user.png";

export default function CharacterImg({
  underText,
  imgWidth = "100px",
  imgSrc = defaultUserImg,
  classes,
}) {
  return (
    <div>
      <div className={`${styles.center} ${classes}`} style={{ height: imgWidth }}>
        <Image
          src={imgSrc}
          alt="user_img"
          width={imgWidth}
          rounded={true}
          className={(`${styles.profileWrapper}`, `${styles.ProfileImg}`)}
          style={{
            border: "1px solid gray",
          }}
        />
      </div>
      <div className={`${styles.center}`}>{underText}</div>
    </div>
  );
}
