import MainCard from "../components/MainCard";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function NotFound() {
  let history = useHistory();
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <MainCard classes="rounded-xl h-80 mt-4">
      <div className="flex justify-center items-center">
        <div className="text-center mt-14" style={{ width: "250px" }}>
          <div style={{ fontSize: "80px" }}>404</div>
          <div style={{ fontSize: "20px" }}>NOT FOUND</div>
        </div>

        <div className="text-center mt-16" style={{ width: "250px" }}>
          <img src={require("../assets/images/main_logo.png")} alt="main_logo" style={{ width: "120px" }} className="mt-10 mb-2 ml-8" />
          <p>페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
      <div
        onClick={() => history.push("/")}
        className={`mx-auto mt-10 w-24 ${isMouseOver ? "" : "text-gray-400"}`}
        style={{ cursor: "pointer" }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        메인 페이지로
      </div>
    </MainCard>
  );
}
