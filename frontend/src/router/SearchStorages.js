import MainCard from "../components/MainCard";
import StorageCardLarge from "../components/StorageCardLarge";

export default function SearchCharacters({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  return (
    <div>
      <div className="my-4">'{query}' 저장소 검색 결과</div>
      <MainCard classes="border rounded-2xl py-5">
        <StorageCardLarge
          storageName="요리하는 부부 저장소"
          imgSrc="https://cdn2.thecatapi.com/images/43n.png"
        />
        <StorageCardLarge
          storageName="맛있는 요리 모음"
          imgSrc="https://cdn2.thecatapi.com/images/dnz0xXA6a.jpg"
        />
        <StorageCardLarge
          storageName="불타는 요리 맛집"
          imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
        />
      </MainCard>
    </div>
  );
}
