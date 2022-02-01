import MainCard from "../components/MainCard";
import { useParams } from "react-router-dom";
import StorageCardLarge from "../components/StorageCardLarge";

export default function SearchCharacters({ location }) {
  const { nickname } = useParams();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  return (
    <div>
      <div className="my-4">'{nickname}'의 저장소</div>
      <MainCard classes="border rounded py-2">
        <StorageCardLarge
          storageName="요리모음 저장목록"
          imgSrc="https://t1.daumcdn.net/cfile/tistory/99E3B54C5C1DEB9C38"
        />
        <StorageCardLarge
          storageName="코딩 저장목록"
          imgSrc="http://media.fastcampus.co.kr/wp-content/uploads/2021/03/fastcampus-media-coding-img-1-1030x539.png"
        />
        <StorageCardLarge
          storageName="고양이 저장목록"
          imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
        />
      </MainCard>
    </div>
  );
}
