import MainCard from "../components/MainCard";
import { useHistory } from "react-router-dom";

export default function ForbiddenPage() {
  let history = useHistory();
  return (
    <MainCard classes="rounded-xl h-80 mt-12">
      <div className="flex justify-center items-center">
        <div className="text-center mt-14" style={{ width: "250px" }}>
          <div style={{ fontSize: "80px" }}>403</div>
          <div style={{ fontSize: "20px" }}>Forbidden</div>
        </div>

        <div className="text-center mt-16" style={{ width: "250px" }}>
          <img src={require("../assets/images/main_logo.png")} alt="main_logo" style={{ width: "120px" }} className="mt-10 mb-2 ml-8" />
          <p>해당 페이지에 접속할 권한이 없습니다.</p>
        </div>
      </div>
      <div onClick={() => history.push("/")} className="flex justify-center mt-10" style={{ cursor: "pointer" }}>
        메인 페이지로
      </div>
    </MainCard>
  );
}
