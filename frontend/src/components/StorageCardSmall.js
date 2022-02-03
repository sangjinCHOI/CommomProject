import { useState } from "react";

export default function StorageCardSmall({ storageName, imgSrc }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      className="relative"
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
        className={`absolute top-4 left-4 text-xl w-40 bg-gray-100 px-2 border-gray-400 border-y ${
          isMouseOver ? `opacity-80` : `opacity-40`
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
