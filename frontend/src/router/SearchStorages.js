import MainCard from "../components/MainCard";
import StorageCard from "../components/StorageCard";

export default function SearchCharacters({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  return (
    <div>
      <div className="my-4">'{query}' 저장소 검색 결과</div>
      <MainCard classes="border rounded py-2">
        <StorageCard
          storageName="요리하는 부부 저장소"
          imgSrc="../assets/images/storageImg_sample_1.jpg"
        />
        <StorageCard
          storageName="맛있는 요리 모음"
          imgSrc="../assets/images/storageImg_sample_2.jpg"
        />
        <StorageCard
          storageName="불타는 요리 맛집"
          imgSrc="../assets/images/storageImg_sample_3.jpg"
        />
      </MainCard>
    </div>
  );
}
