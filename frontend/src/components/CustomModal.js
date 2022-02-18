import React, { useEffect, useRef } from "react";

function CustomModal({ isOpenModal, setIsOpenModal, children, classes }) {
  const wrapperRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <div ref={wrapperRef} value={isOpenModal} className={`modal ${classes}`}>
      {children}
    </div>
  );
}
export default CustomModal;
