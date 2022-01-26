import MainCard from "../components/MainCard";
import styles from "./SearchStorages.module.css";

export default function SearchCharacters({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  return (
    <div>
      <div className="my-4">'{query}' 저장소 검색 결과</div>
      <MainCard>
        <div
          className="relative flex justify-center items-center px-4 py-2"
          style={{ height: "200px" }}
        >
          <img
            src={require("../assets/images/storageImg_sample_1.jpg")}
            alt="storage_img"
            className={`${styles.test} w-80 h-40 border border-gray-500`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
          <div className="absolute top-8 left-8 text-xl">요리하는 부부 저장소</div>
        </div>
        <div
          className="relative flex justify-center items-center px-4 py-2"
          style={{ height: "200px" }}
        >
          <img
            src={require("../assets/images/storageImg_sample_2.jpg")}
            alt="storage_img"
            className={`${styles.test} w-80 h-40 border border-gray-500`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
          <div className="absolute top-8 left-8 text-xl">맛있는 요리 모음</div>
        </div>
        <div
          className="relative flex justify-center items-center px-4 py-2"
          style={{ height: "200px" }}
        >
          <img
            src={require("../assets/images/storageImg_sample_3.jpg")}
            alt="storage_img"
            className={`${styles.test} w-80 h-40 border border-gray-500`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
          <div className="absolute top-8 left-8 text-xl">불타는 요리 맛집</div>
        </div>
      </MainCard>
    </div>
  );
}
