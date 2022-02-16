import { connect } from "react-redux";
import MainCard from "../components/MainCard";
import StorageCardLarge from "../components/StorageCardLarge";

function SearchCharacters({ location, characterSlice }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  const { storagesResultList } = location.props;
  console.log(location);
  console.log(storagesResultList);

  return (
    <div>
      <div className="my-4">'{query}' 저장소 검색 결과</div>
      <MainCard classes="border rounded-xl py-5">
        {storagesResultList.map((storage) => (
          // 현재 nickname -> ninkname인 상태
          <StorageCardLarge
            key={storage.storageSeq}
            storageName={storage.storageName}
            imgSrc={storage.filePath + storage.fileName}
            ownerNickname={storage.ninkname}
            characterSeq={characterSlice.characterSeq}
            storageSeq={storage.storageSeq}
          />
        ))}
        {/* <StorageCardLarge
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
        /> */}
      </MainCard>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(SearchCharacters);
