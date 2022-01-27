import { useState } from "react";
import styles from "./StorageCard.module.css";

export default function StorageCard({ storageName, imgSrc }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center px-4 py-2"
      style={{ height: "200px" }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <img
        src={require({ imgSrc })}
        alt="storage_img"
        className={`${styles.expand} w-80 h-40 border border-gray-500 rounded ${
          isMouseOver ? null : `opacity-40`
        }`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        className={`absolute top-8 left-8 text-xl bg-gray-100 px-2 border-gray-400 border-y ${
          isMouseOver ? `text-2xl opacity-80` : `opacity-40`
        }`}
      >
        {storageName}
      </div>
    </div>
  );
}
