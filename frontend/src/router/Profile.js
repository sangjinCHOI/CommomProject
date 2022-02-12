import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Content from "../components/Content";
import { connect } from "react-redux";
import Send from "../config/Send";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    getCharacterProfile();
    getFeed();
  }, []);

  return (
    <div>
      <MainCard classes="border">
        <CharacterProfile
          isMe={characterSlice.nickname === nickname ? true : false}
          nickname={nickname}
          category={characterProfile.categoryName}
          introduction={
            characterSlice.nickname === nickname
              ? characterSlice.introduction
              : characterProfile.introduction
          }
          imgSrc={characterProfile.profileImagePath + characterProfile.profileImageName}
        />
      </MainCard>
      <div className="border">
        <Content contents={feedContents} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Profile);
