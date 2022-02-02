import { useState } from "react";
import styles from "./StorageCardSmall.module.css";

export default function StorageCardSmall({ storageName, imgSrc }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      className="relative flex justify-center items-center"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <img
        src={imgSrc}
        alt={imgSrc}
        className={`${isMouseOver ? null : `opacity-40`}`}
        style={{
          width: "200px",
          height: "150px",
          cursor: "pointer",
        }}
      />
      <div
        className={`absolute top-auto left-auto text-lg w-auto bg-gray-100 px-2 ${
          isMouseOver ? `${styles.textActive}` : `${styles.textInactive}`
        }`}
        style={{
          cursor: "pointer",
        }}
      >
        {storageName}
      </div>
    </div>
  );
}
