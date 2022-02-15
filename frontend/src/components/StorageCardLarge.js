import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import styles from "./StorageCardLarge.module.css";

function StorageCardLarge({
  storageName,
  imgSrc,
  ownerNickname,
  characterSeq,
  storageSeq,
  characterSlice,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  console.log(imgSrc);
  if (imgSrc === 0) imgSrc = "/images/save_box.jpg";
  // if (imgSrc === 0) imgSrc = "../assets/images/save_box.jpg";
  const isMe = ownerNickname === characterSlice.nickname ? true : false;
  const [isOptionClick, setIsOptionClick] = useState(false);

  function OptionClick() {
    return (
      <div
        className={`absolute bg-white w-20 rounded-lg z-50 border ${
          isMouseOver ? "top-8 right-0" : "top-10 right-4"
        }`}
      >
        <div className={`flex justify-center p-1.5`} style={{ cursor: "pointer" }}>
          삭제
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex justify-center items-center px-5 my-4`}
      style={{ height: "200px" }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <div
        className={`absolute px-2 py-1 z-50 ${isMouseOver ? "right-3 top-0" : "right-7 top-2"}`}
        style={{ cursor: "pointer" }}
        onClick={isMe ? () => setIsOptionClick(!isOptionClick) : null}
      >
        ...
      </div>
      {isOptionClick && (
        <CustomModal isOpenModal={isOptionClick} setIsOpenModal={setIsOptionClick}>
          <OptionClick />
        </CustomModal>
      )}
      <Link
        to={{
          pathname: `./storages/storageSeq`,
          state: {
            characterSeq,
            storageSeq,
          },
        }}
      >
        <img
          src={require(`../assets${imgSrc}`)}
          alt={require(`../assets/images/save_box.jpg`)}
          // alt={require(`../assets${imgSrc}`)}
          className={`w-80 h-40 border rounded ${
            isMouseOver ? `${styles.highlight}` : `opacity-60`
          }`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.8) 0px 4px 4px",
          }}
        />
      </Link>
      <div
        className={`absolute top-auto left-auto w-auto px-2 ${
          isMouseOver ? `${styles.textActive}` : `${styles.textInactive} text-xl`
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

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(StorageCardLarge);
