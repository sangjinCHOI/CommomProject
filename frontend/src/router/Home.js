import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "../components/Content";
import Send from "../config/Send";
import File from "../config/File";

function Home({ characterSlice }) {
  const [feedContents, setFeedContents] = useState([]);

  const getFeed = () => {
    File.get("/contents", {
      params: {
        characterNow: characterSlice.characterSeq,
      },
    })
      .then((res) => {
        if (res.data) {
          setFeedContents(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <div className="mb-4">
        <Content contents={feedContents} />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Home);
