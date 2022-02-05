import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";
import MainCard from "../components/MainCard";
import Content from "../components/Content";
import { connect } from "react-redux";

function Profile({ characterSlice }) {
  const { nickname } = useParams();
  return (
    <div>
      <MainCard classes="border">
        {/* 현재 상대방 캐릭터 불러오려면 닉네임밖에 모르는데, API는 일련번호 */}
        <CharacterProfile
          isMe={characterSlice.nickname === nickname ? true : false}
          nickname={nickname}
          category={characterSlice.nickname === nickname ? characterSlice.categorySeq : "상대방"}
          introduction={
            characterSlice.nickname === nickname
              ? characterSlice.introduction
              : "내 캐릭터가 아니랍니다"
          }
        />
      </MainCard>
      <div className="border">
        <Content />
      </div>
      <div className="border">
        <Content />
      </div>
      <div className="border">
        <Content />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Profile);
