import Content from "../components/Content";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Send from "../config/Send";
import { useParams } from "react-router-dom";

function StoragesDetail(props) {
  const [storageContent, setStorageContent] = useState([]);
  const { storageSeq } = useParams();
  //^^ characterNow, characterSeq 차이점 알아내면 새로 적어야함
  const data = {
    characterNow: props.characterSlice.characterSeq,
    //characterSeq: props.location.state.characterSeq,
    // storageSeq: props.location.state.storageSeq,
    storageSeq,
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
