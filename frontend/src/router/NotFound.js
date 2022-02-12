import MainCard from "../components/MainCard";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  let history = useHistory();
  return (
    <MainCard classes="rounded-xl h-80 mt-12">
      <div className="flex justify-center items-center">
        <div className="text-center mt-12" style={{ width: "250px" }}>
          <div style={{ fontSize: "80px" }}>404</div>
          <div style={{ fontSize: "20px" }}>NOT FOUND</div>
        </div>

        <div className="text-center mt-16" style={{ width: "250px" }}>
          <img
            src={require("../assets/images/main_logo.png")}
            alt="main_logo"
            style={{ width: "120px" }}
            className="mt-10 mb-2 ml-8"
          />
          <p>페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
      <div
        onClick={() => history.goBack()}
        className="flex justify-center mt-12"
        style={{ cursor: "pointer" }}
      >
        이전 페이지로
      </div>
    </MainCard>
  );
}
