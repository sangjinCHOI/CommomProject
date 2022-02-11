import MainCard from "../components/MainCard";
import { Link, useParams } from "react-router-dom";
import StorageCardLarge from "../components/StorageCardLarge";
import { connect } from "react-redux";
import Send from "../config/Send";
import { useEffect, useState } from "react";

function SearchCharacters({ location, characterSlice }) {
  const [contentArr, setContentArr] = useState([]);

  const { nickname } = useParams();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  //const query = params.get("query");

  // console.log(location);
  // console.log(characterSlice);

  function initFun(data) {
    Send.get("/storage/" + data)
      .then((res) => {
        setContentArr(res.data);
      })
      .catch((res) => console.log(res));
  }
  useEffect(() => {
    console.log(contentArr);
  }, [contentArr]);

  useEffect(() => {
    initFun(characterSlice.characterSeq);
  }, []);

  return (
    <div>
      <div className="my-4">'{nickname}'의 저장소</div>
      <MainCard classes="border rounded py-2">
        <div>
          {contentArr.map((content) => (
            <Link
              to={{
                pathname: `./storages/${content.storageSeq}`,
                state: {
                  characterSeq: characterSlice.characterSeq,
                  storageSeq: content.storageSeq,
                },
              }}
            >
              <StorageCardLarge key={content.storageSeq} storageName={content.storageName} imgSrc={"../assets/" + content.storageImagePath + content.storageImageName}></StorageCardLarge>
            </Link>
          ))}
        </div>
      </MainCard>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(SearchCharacters);
