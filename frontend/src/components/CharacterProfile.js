import { Label } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CharacterImg from "./CharacterImg";
import styles from "./CharacterProfile.module.css";
import Send from "../config/Send";

function CharacterProfile({
  nickname, // 이건 필요
  category,
  introduction,
  representativeAchievement,
  classes,
  isMe = true,
  characterSlice,
}) {
  const [characterProfile, setCharacterProfile] = useState({});
  const getCharacterProfile = () => {
    Send.get(`/character/profile/${nickname}`).then((res) => {
      setCharacterProfile(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getCharacterProfile();
  }, []);

  const follow = (followerSeq, e) => {
    e.preventDefault();
    const data = {
      followee: followerSeq,
      follower: characterSlice.characterSeq,
    };
    Send.post("/character/follow", JSON.stringify(data))
      .then((res) => {
        if (res.status === 200) {
          getCharacterProfile();
          // 상대방 캐릭터 정보 가져와서
          Send.get(`/character/${followerSeq}`).then((res) => {
            const character = res.data;
            // 팔로우 알람 보내기
            if (character.followAlarm || character.alarmAllow) {
              const alarmData = {
                alarmDate: new Date().toISOString(),
                // alarmIsRead: false,
                // alarmText: `${followerNickname}님이 회원님을 팔로우하기 시작했습니다.`,
                alarmType: 1,
                characterSeq: followerSeq, // 상대방
                relationTb: "tb_character",
                targetSeq: characterSlice.characterSeq, // 본인 캐릭터or저장소or업적
                // userSeq: 0
              };
              console.log(alarmData);
              Send.post("/character/alarm", JSON.stringify(alarmData)).then((res) =>
                console.log(res)
              );
            }
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`flex justify-center items-center p-4 my-4 ${classes}`}>
      <CharacterImg />
      <div className="ml-10">
        <div>
          <div className="inline-block bg-red-500 px-1 mr-1 rounded-xl">
            <img
              src={require("../assets/images/sample_achievement.png")}
              alt="sample_achievement_img"
              width="16px"
              className="inline-block"
            />
            {/* <span className="text-xs text-yellow-300">요리왕</span> */}
          </div>
          {nickname} ({characterProfile.categoryName})
        </div>
        <div className="py-1">
          <div className="inline-block mr-8">
            <span>
              게시물 <span className="font-bold">{characterProfile.contentCount}</span>
            </span>
          </div>
          <div className="inline-block mr-8">
            <Link to={`../${nickname}/follow`}>
              <span>
                팔로워 <span className="font-bold">{characterProfile.followerCount}</span>
              </span>
            </Link>
          </div>
          <div className="inline-block">
            <Link to={`../${nickname}/follow`}>
              <span>
                팔로우 <span className="font-bold">{characterProfile.followeeCount}</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="text-sm w-80 h-7">{characterProfile.introduction}</div>
        {isMe ? (
          <div className="mt-3">
            <div className="inline-block px-2">
              <Link to={`../${nickname}/achievement`}>
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  업적 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link to="../characters/select">
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  부캐 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link
                to={{
                  pathname: "../characters/update",
                  state: {
                    characterSeq: characterSlice.characterSeq,
                  },
                }}
              >
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  프로필 편집
                </Label>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-2">
            <div className="inline-block px-2">
              <Link to={`../${nickname}/achievement`}>
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  업적 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link
                to=""
                onClick={(e) => {
                  follow(characterProfile.characterSeq, e);
                }}
              >
                <Label color="lightBlue" className={`${styles.customRadius}`}>
                  팔로우
                </Label>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character, userSlice: state.user };
}

export default connect(mapStateToProps)(CharacterProfile);
