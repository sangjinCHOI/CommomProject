import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "../components/Content";
import Send from "../config/Send";

function SearchTexts({ location, characterSlice }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const [feedContents, setFeedContents] = useState([]);
  const getTagList = () => {
    Send.get(`/content/text/${query}`, {
      params: {
        characterNow: characterSlice.characterSeq,
        tagText: query,
      },
    }).then((res) => {
      if (res.data) {
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
        <div className="material-icons font-bold px-2 pt-2 pb-2">article</div>
        <div className="pb-0.5 text-2xl font-bold">{query.length > 24 ? query.slice(0, 24) + "..." : query}</div>
      </div>
      <Content contents={feedContents} />
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(SearchTexts);
