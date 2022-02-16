import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "../components/Content";
import Send from "../config/Send";

function SearchTagsDetail({ location, characterSlice }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const detail = params.get("detail");

  const [feedContents, setFeedContents] = useState([]);
  const getTagList = () => {
    Send.get(`/content/tags/${detail}`, {
      params: {
        characterNow: characterSlice.characterSeq,
        tagText: detail,
      },
    }).then((res) => {
      if (res.data) {
        // console.log(res.data);
        setFeedContents(res.data);
      }
    });
  };
  useEffect(() => {
    getTagList();
  }, []);

  return (
    <>
      <div className="my-4 flex items-center">
        <div className="material-icons font-bold px-2 pt-2 pb-2">tag</div>
        <div className="pb-0.5 text-2xl font-bold">{detail.length > 24 ? detail.slice(0, 24) + "..." : detail}</div>
      </div>
      <Content contents={feedContents} />
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(SearchTagsDetail);
