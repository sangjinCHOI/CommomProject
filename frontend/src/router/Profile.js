import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Content from "../components/Content";
import { connect } from "react-redux";
import Send from "../config/Send";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import ContentCreate from "../components/ContentCreate";

function Profile({ characterSlice }) {
  const { nickname } = useParams();
  const [characterProfile, setCharacterProfile] = useState({});
  const [feedContents, setFeedContents] = useState([]);
  const getCharacterProfile = () => {
    Send.get(`/character/profile/${nickname}`).then((res) => {
      setCharacterProfile(res.data);
    });
  };

  const getFeed = () => {
    Send.get(`/character/profile/${nickname}`).then((res) => {
      Send.get(`/content/person/${res.data.characterSeq}`, {
        params: {
          characterNow: characterSlice.characterSeq,
          characterSeq: res.data.characterSeq,
        },
      }).then((res) => {
        if (res.data) {
          setFeedContents(res.data);
        }
      });
    });
  };

  const [contentCreateModal, setContentCreateModal] = useState(false);
  const handleClose = () => {
    setContentCreateModal(false);
  };

  useEffect(() => {
    getCharacterProfile();
    getFeed();
  }, []);

  return (
    <div>
      <ContentCreate isOpen={contentCreateModal} onCancel={handleClose} />
      <MainCard classes="border">
        <CharacterProfile
          isMe={characterSlice.nickname === nickname ? true : false}
          nickname={nickname}
          category={characterProfile.categoryName}
          introduction={characterSlice.nickname === nickname ? characterSlice.introduction : characterProfile.introduction}
        />
      </MainCard>
      {feedContents.length ? (
        <div className="border">
          <Content contents={feedContents} />
        </div>
      ) : (
        <div className="text-center flex-col" style={{ marginTop: 250 }}>
          <div className="text-2xl">게시물을 작성해 persona를 시작하세요.</div>
          <Button
            size="regular"
            rounded={true}
            className="mt-5"
            color="lightBlue"
            style={{ marginLeft: 170, width: 250 }}
            onClick={() => setContentCreateModal(true)}
          >
            게시물 작성하기
          </Button>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Profile);
