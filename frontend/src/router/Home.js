import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "../components/Content";
import ContentCreate from "../components/ContentCreate";
import { Button } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";
import Send from "../config/Send";
import File from "../config/File";

function Home({ characterSlice }) {
  const [feedContents, setFeedContents] = useState([]);
  const [storages, setStorages] = useState([]);

  const getFeed = () => {
    File.get("/contents", {
      params: {
        characterNow: characterSlice.characterSeq,
      },
    })
      .then((res) => {
        if (res.data) {
          setFeedContents(res.data);
          Send.get(`/storage/${characterSlice.characterSeq}`).then((res) => {
            setStorages(res.data);
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const [characterProfile, setCharacterProfile] = useState({});
  const getCharacterProfile = () => {
    Send.get(`/character/profile/${characterSlice.nickname}`).then((res) => {
      setCharacterProfile(res.data);
    });
  };

  const [contentCreateModal, setContentCreateModal] = useState(false);
  const handleClose = () => {
    setContentCreateModal(false);
  };

  const history = useHistory();
  const handlePress = () => {
    const data = {
      characterSeq: characterSlice.characterSeq,
      searchHistoryText: characterProfile.categoryName,
    };
    Send.post("/search", JSON.stringify(data)).then((res) => console.log(res));
    history.push(`/search?query=${characterProfile.categoryName}`);
  };

  useEffect(() => {
    getFeed();
    getCharacterProfile();
  }, []);

  return (
    <>
      <ContentCreate isOpen={contentCreateModal} onCancel={handleClose} />
      {feedContents.length ? (
        <div className="mb-4">
          <Content contents={feedContents} storages={storages} />
        </div>
      ) : (
        <div className="text-center flex-col" style={{ marginTop: 350 }}>
          <div className="text-2xl">Persona 시작하기</div>
          <Button
            size="regular"
            rounded={true}
            className="mt-5"
            color="lightBlue"
            style={{ marginLeft: 225, width: 150 }}
            onClick={() => setContentCreateModal(true)}
          >
            게시물 작성하기
          </Button>
          <Button
            size="regular"
            rounded={true}
            className="mt-3"
            color="lightBlue"
            style={{ marginLeft: 225, width: 150 }}
            onClick={() => handlePress()}
          >
            탐색하기
          </Button>
        </div>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Home);
