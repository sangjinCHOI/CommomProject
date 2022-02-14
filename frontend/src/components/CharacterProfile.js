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
  const [tempImgSrc, setTempImgSrc] = useState("/images/default_user.png");
  const getCharacterProfile = () => {
    Send.get(`/character/profile/${nickname}`).then((res) => {
      console.log("!!!!!!!", res.data);
      setCharacterProfile(res.data);
      setTempImgSrc(res.data.profileImagePath + res.data.profileImageName);
      console.log(
        res.data.profileImagePath + res.data.profileImageName,
        typeof (res.data.profileImagePath + res.data.profileImageName)
      );
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
      <Link to={`../${nickname}`}>
        <CharacterImg
          // imgSrc={
          //   isNaN(characterProfile.profileImagePath + characterProfile.profileImageName) ||
          //   characterProfile.profileImagePath === null ||
          //   characterProfile.profileImageName === null
          //     ? "/images/default_user.png"
          //     : characterProfile.profileImagePath + characterProfile.profileImageName
          // }
          imgSrc={
            characterProfile.profileImagePath === null || characterProfile.profileImageName === null
              ? "/images/default_user.png"
              : tempImgSrc
          }
        />
      </Link>
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
          <Link to={`../${nickname}`}>
            {nickname} ({characterProfile.categoryName})
          </Link>
        </div>
        <div className="py-1">
          <div className="inline-block mr-12">
            <Link to={`../${nickname}`}>
              <span>
                게시물 <span className="font-bold">{characterProfile.contentCount}</span>
              </span>
            </Link>
          </div>
          <div className="inline-block mr-12">
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

        <div className="w-80 h-7" style={{ fontSize: "13px" }}>
          {characterProfile.introduction}
        </div>
        {isMe ? (
          <div className="mt-4">
            <div className="inline-block px-2">
              <Link to={`../${nickname}/achievement`}>
                <Label
                  color="dark"
                  className={`${styles.customRadius} ${styles.clickAchievementBtn} bg-white border`}
                >
                  업적 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link to={`${nickname}/storages`}>
                <Label
                  color="dark"
                  className={`${styles.customRadius} ${styles.clickSubcharacterBtn} bg-white border`}
                >
                  저장목록 보기
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
                <Label
                  color="dark"
                  className={`${styles.customRadius} ${styles.clickProfileBtn} bg-white border`}
                >
                  프로필 편집
                </Label>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <div className="inline-block px-2">
              <Link to={`../${nickname}/achievement`}>
                <Label
                  color="dark"
                  className={`${styles.customRadius} ${styles.clickAchievementBtn} bg-white border`}
                >
                  업적 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link to={`../${nickname}/storages`}>
                <Label
                  color="dark"
                  className={`${styles.customRadius} ${styles.clickSubcharacterBtn} bg-white border`}
                >
                  저장목록 보기
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
                <Label
                  color="dark"
                  className={`${styles.customRadius} ${styles.clickFollowBtn} bg-white border`}
                >
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
