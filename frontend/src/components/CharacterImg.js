import "@material-tailwind/react/tailwind.css";
import { Image } from "@material-tailwind/react";
import styles from "./CharacterImg.module.css";
import defaultUserImg from "../assets/images/default_user.png";

export default function CharacterImg({
  underText,
  imgWidth = "100px",
  imgSrc = defaultUserImg,
  classes,
  lock = false,
}) {
  return (
    <div>
      <div className={`${styles.center} ${classes}`} style={{ height: imgWidth }}>
        <Image
          src={imgSrc}
          alt="user_img"
          width={imgWidth}
          rounded={true}
          className={
            (`${styles.profileWrapper}`, `${styles.ProfileImg} ${lock ? "bg-gray-400" : null}`)
          }
          style={{
            border: "1px solid gray",
          }}
        />
      </div>
      <div className={`${styles.center}`}>
        <span className="w-32 text-center">{underText}</span>
      </div>
    </div>
  );
}
