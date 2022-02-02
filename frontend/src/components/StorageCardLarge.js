import { useState } from "react";
import styles from "./StorageCardLarge.module.css";

export default function StorageCardLarge({ storageName, imgSrc }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      className={`relative flex justify-center items-center px-4 py-2`}
      style={{ height: "200px" }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <img
        src={imgSrc}
        alt={imgSrc}
        className={`w-80 h-40 border rounded ${isMouseOver ? `${styles.highlight}` : `opacity-40`}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
          boxShadow: "rgba(0, 0, 0, 0.8) 0px 4px 4px",
        }}
      />
      <div
        className={`absolute top-auto left-auto w-auto text-xl bg-gray-100 px-2 ${
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
