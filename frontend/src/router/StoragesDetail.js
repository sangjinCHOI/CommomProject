import Content from "../components/Content";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Send from "../config/Send";
// import { useParams } from "react-router-dom";

function StoragesDetail(props) {
  const [storageContent, setStorageContent] = useState([]);
  // useParams로 url에서 storageSeq 추출하면 왜 게시물이 안뜨는걸까?
  // -> 에러도 안뜨는데, 이게 가능하면 어떤 페이지에서든 저장소 디테일로 갈 수 있음
  // const { storageSeq } = useParams();
  const data = {
    characterNow: props.characterSlice.characterSeq,
    storageSeq: props.location.state.storageSeq,
    // storageSeq: parseInt(storageSeq),
  };
  const getStorage = () => {
    Send.post("/storage/contents", JSON.stringify(data))
      .then((res) => {
        if (res.data) {
          setStorageContent(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <>
      <div className="my-4 flex items-center">
        <div className="material-icons font-bold px-2 pt-2 pb-2">folder_shared</div>
        <div className="pb-0.5 text-2xl font-bold">저장소</div>
      </div>
      <div className="mb-4">
        <Content contents={storageContent} />
      </div>
      {/* <Content />
      <Content />
      <Content />
      <Content />
      <Content /> */}
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(StoragesDetail);
