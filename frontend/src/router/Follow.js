import CharacterImg from "../components/CharacterImg";
import { Button, Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Send from "../config/Send";
import { connect } from "react-redux";
import styles from "./Follow.module.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function Follow({ characterSlice }) {
  const [followerList, setFollowerList] = useState([]);
  const [followeeList, setFolloweeList] = useState([]);

  const searchText = useInput("");

  const getFollowerList = () => {
    const data = {
      followee: characterSlice.characterSeq,
      nickname: "",
    };
    setFollowerList([]);
    Send.post("/character/followers", JSON.stringify(data)).then((res) => {
      res.data.forEach((follower) => {
        Send.get(`/character/${follower.follower}`).then((res) => {
          // 캐릭터 데이터가 있다면
          if (res.data) {
            setFollowerList((followerList) => [res.data, ...followerList]);
          }
        });
      });
    });
  };
  const getFolloweeList = () => {
    const data = {
      follower: characterSlice.characterSeq,
      nickname: "",
    };
    setFolloweeList([]);
    Send.post("/character/followees", JSON.stringify(data)).then((res) => {
      res.data.forEach((followee) => {
        Send.get(`/character/${followee.followee}`).then((res) => {
          // 캐릭터 데이터가 있다면
          if (res.data) {
            setFolloweeList((followeeList) => [res.data, ...followeeList]);
          }
        });
      });
    });
  };

  useEffect(() => {
    getFollowerList();
    getFolloweeList();
  }, []);

  const [isFollowerTab, setIsFollowerTab] = useState(true);

  const follow = (followerSeq, e) => {
    e.preventDefault();
    const data2 = {
      followee: followerSeq,
      follower: characterSlice.characterSeq,
    };
    Send.post("/character/follow", JSON.stringify(data2))
      .then((res) => {
        if (res.status === 200) {
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
          Send.post("/character/alarm", JSON.stringify(alarmData)).then((res) => console.log(res));
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteFollow = (followerSeq, e) => {
    e.preventDefault();
    const data4 = {
      followee: characterSlice.characterSeq,
      follower: followerSeq,
    };
    Send.delete("/character/follow", { data: JSON.stringify(data4) })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const unfollow = (followeeSeq, e) => {
    e.preventDefault();
    const data3 = {
      followee: followeeSeq,
      follower: characterSlice.characterSeq,
    };
    Send.delete("/character/follow", { data: JSON.stringify(data3) })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-16">
      <MainCard classes="border rounded pb-8">
        <div className="flex justify-center items-center">
          <Button
            className={`px-20 py-5 w-60 text-center text-xl border-2 border-white ${
              isFollowerTab ? "bg-sky-500" : "bg-gray-300 text-gray-300"
            }`}
            buttonType="outline"
            onClick={() => {
              setIsFollowerTab(true);
            }}
          >
            팔로워
          </Button>
          <Button
            className={`px-20 py-5 w-60 text-center text-xl border-2 border-white ${
              isFollowerTab ? "bg-gray-300 text-gray-300" : "bg-sky-500"
            }`}
            buttonType="outline"
            onClick={() => {
              setIsFollowerTab(false);
            }}
          >
            팔로우
          </Button>
        </div>
        <div className="relative flex justify-center items-center p-2">
          <input
            className="w-96 border rounded-lg px-4 py-2"
            type="text"
            placeholder="캐릭터 검색"
            {...searchText}
          />
          <span className="material-icons absolute right-12">search</span>
        </div>
        <div className={`${styles.box} overflow-y-auto`} style={{ height: "550px" }}>
          {isFollowerTab // 팔로워 탭일 때
            ? searchText.value.length >= 2 // 2글자 이상 검색 시
              ? followerList // 리스트 필터링
                  .filter((follower) => follower.nickname.includes(searchText.value))
                  .map((follower) => (
                    <div className="flex justify-center items-center" key={follower.characterSeq}>
                      <Link to={`../${follower.nickname}`}>
                        <div className="m-3">
                          <CharacterImg imgWidth="50px" />
                        </div>
                      </Link>
                      <Link to={`../${follower.nickname}`}>
                        <div className="w-44">{follower.nickname}</div>
                      </Link>
                      <div className="m-2">
                        <Link
                          to=""
                          onClick={(e) => {
                            follow(follower.characterSeq, e);
                          }}
                        >
                          <Label color="lightBlue" className={`${styles.customRadius}`}>
                            팔로우
                          </Label>
                        </Link>
                      </div>
                      <div className="mr-3">
                        <Link
                          to=""
                          onClick={(e) => {
                            deleteFollow(follower.characterSeq, e);
                          }}
                        >
                          <Label color="blueGray" className={`${styles.customRadius}`}>
                            삭제
                          </Label>
                        </Link>
                      </div>
                    </div>
                  ))
              : // 2글자 미만일 때 리스트 필터링X
                followerList.map((follower) => (
                  <div className="flex justify-center items-center" key={follower.characterSeq}>
                    <Link to={`../${follower.nickname}`}>
                      <div className="m-3">
                        <CharacterImg imgWidth="50px" />
                      </div>
                    </Link>
                    <Link to={`../${follower.nickname}`}>
                      <div className="w-44">{follower.nickname}</div>
                    </Link>
                    <div className="m-2">
                      <Link
                        to=""
                        onClick={(e) => {
                          follow(follower.characterSeq, e);
                        }}
                      >
                        <Label color="lightBlue" className={`${styles.customRadius}`}>
                          팔로우
                        </Label>
                      </Link>
                    </div>
                    <div className="mr-3">
                      <Link
                        to=""
                        onClick={(e) => {
                          deleteFollow(follower.characterSeq, e);
                        }}
                      >
                        <Label color="blueGray" className={`${styles.customRadius}`}>
                          삭제
                        </Label>
                      </Link>
                    </div>
                  </div>
                ))
            : // 팔로우 탭일 때
            searchText.value.length >= 2 // 2글자 이상 검색 시
            ? followeeList // 리스트 필터링
                .filter((followee) => followee.nickname.includes(searchText.value))
                .map((followee) => (
                  <div className="flex justify-center items-center" key={followee.characterSeq}>
                    <Link to={`../${followee.nickname}`}>
                      <div className="m-3">
                        <CharacterImg imgWidth="50px" />
                      </div>
                    </Link>
                    <Link to={`../${followee.nickname}`}>
                      <div className="w-44">{followee.nickname}</div>
                    </Link>
                    <div className="ml-12 mr-3">
                      <Link
                        to=""
                        onClick={(e) => {
                          unfollow(followee.characterSeq, e);
                        }}
                      >
                        <Label color="blueGray" className={`${styles.customRadius}`}>
                          언팔로우
                        </Label>
                      </Link>
                    </div>
                  </div>
                ))
            : // 2글자 미만일 때 리스트 필터링X
              followeeList.map((followee) => (
                <div className="flex justify-center items-center" key={followee.characterSeq}>
                  <Link to={`../${followee.nickname}`}>
                    <div className="m-3">
                      <CharacterImg imgWidth="50px" />
                    </div>
                  </Link>
                  <Link to={`../${followee.nickname}`}>
                    <div className="w-44">{followee.nickname}</div>
                  </Link>
                  <div className="ml-12 mr-3">
                    <Link
                      to=""
                      onClick={(e) => {
                        unfollow(followee.characterSeq, e);
                      }}
                    >
                      <Label color="blueGray" className={`${styles.customRadius}`}>
                        언팔로우
                      </Label>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </MainCard>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Follow);
