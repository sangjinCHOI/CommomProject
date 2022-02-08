// import { Image } from "@material-tailwind/react";
import styles from "./CharacterImg.module.css";
import defaultUserImg from "../assets/images/default_user.png";
import { useState } from "react";

export default function CharacterImg({
  underText,
  imgWidth = "100px",
  imgSrc = defaultUserImg,
  classes,
  lock = false,
  isChange = false,
}) {
  const [clickShow, setClickShow] = useState(false);

  const resetImage = () => {
    const previewImage = document.getElementById("profileImg");
    // 기본 이미지도 서버에 저장해야함!(require 이슈)
    previewImage.src = "https://cdn2.thecatapi.com/images/MTcyMDExMw.jpg";
    setClickShow(!clickShow);
  };

  const readImage = (input) => {
    // 인풋 태그에 파일이 있는 경우
    if (input.files && input.files[0]) {
      // 이미지 파일인지 검사 (생략)

      // FileReader 인스턴스 생성
      const reader = new FileReader();
      // 이미지가 로드가 된 경우
      reader.onload = (e) => {
        const previewImage = document.getElementById("profileImg");
        console.log(e.target);
        previewImage.src = e.target.result;
      };
      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(input.files[0]);
      setClickShow(!clickShow);
    }
  };

  function ProfileClick() {
    return (
      <div className={`${styles.filebox} absolute bg-white w-36 rounded-lg z-50 border`}>
        <div className={`flex justify-center p-1.5`}>
          <label htmlFor="profileChange" style={{ cursor: "pointer" }}>
            파일 선택
          </label>
          <input id="profileChange" type="file" onChange={(e) => readImage(e.target)} />
        </div>
        <hr />
        <div
          className={`flex justify-center p-1.5`}
          style={{ cursor: "pointer" }}
          onClick={resetImage}
        >
          기본 이미지로
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`${styles.center} ${classes}`}
        style={{
          height: imgWidth,
          cursor: "pointer",
        }}
      >
        <img
          id="profileImg"
          src={imgSrc}
          alt="user_img"
          width={imgWidth}
          className={`rounded-full ${styles.profileWrapper} ${styles.ProfileImg} ${
            lock ? "bg-gray-400" : null
          }`}
          style={{
            border: "1px solid lightgray",
          }}
        />
      </div>
      <div className={`${styles.center}`}>
        {isChange ? (
          <div className={`p-2`}>
            <div className="relative" onClick={() => setClickShow(!clickShow)}>
              <div style={{ cursor: "pointer" }}>변경</div>
            </div>
            {clickShow ? <ProfileClick /> : null}
          </div>
        ) : (
          <span className="text-center" style={{ maxWidth: "8rem" }}>
            {underText}
          </span>
        )}
      </div>
    </div>
  );
}
