import { useState } from "react";
import styles from "./StorageCardLarge.module.css";

export default function StorageCardLarge({ storageName, imgSrc }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      className={`relative flex justify-center items-center px-4 py-2`}
      style={{ height: "200px" }}
    >
      <img
        src={imgSrc}
        alt={imgSrc}
        className={`w-80 h-40 border rounded ${isMouseOver ? `${styles.highlight}` : `opacity-40`}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxShadow: "rgba(0, 0, 0, 0.8) 0px 4px 4px",
        }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      />
      <div
        className={`absolute top-8 left-8 text-xl bg-gray-100 px-2 border-gray-400 border-y ${
          isMouseOver ? `text-2xl opacity-80` : `opacity-40`
        }`}
        style={{
          cursor: "pointer",
        }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        {storageName}
      </div>
    </div>
  );
}
