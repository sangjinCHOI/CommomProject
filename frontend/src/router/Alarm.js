import CharacterImg from "../components/CharacterImg";
import { Button, Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import MainCard from "../components/MainCard";
import { connect } from "react-redux";
import Send from "../config/Send";
import { useHistory } from "react-router-dom";
import styles from "./Alarm.module.css";

const timeDifference = (time) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const nowTime = new Date(Date.parse(new Date()) - offset).toISOString(); // 현재 한국 시간
  const [nowYear, nowMonth, nowDay] = nowTime
    .split("T")[0]
    .split("-")
    .map((item) => parseInt(item));
  const [nowHour, nowMinute, nowSecond] = nowTime
    .split("T")[1]
    .split(":")
    .map((item) => parseInt(item));
  const [year, month, day] = time
    .split("T")[0]
    .split("-")
    .map((item) => parseInt(item));
  const [hour, minute, second] = time
    .split("T")[1]
    .split(":")
    .map((item) => parseInt(item));

  // n일 전을 정확하게 구하기 위한 presetMonth
  let presetMonth = 30;
  if (month === 2) {
    presetMonth = 28;
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    presetMonth = 31;
  } else {
    presetMonth = 30;
  }

  // n년 전
  if (nowYear > year) {
    if ((nowYear - year) * 12 + nowMonth - month >= 12) {
      let n = nowYear - year;
      return `${n}년 전`;
    }
  }
  // n달 전
  // 한 달이 28, 29, 30, 31일인 경우는 현재 고려하지 않은 상태
  if (nowMonth > month) {
    if ((nowMonth - month) * 30 + nowDay - day >= 30) {
      let n = nowMonth - month;
      return `${n}달 전`;
    }
  } else if (nowMonth < month) {
    let n = nowMonth + 12 - month;
    return `${n}달 전`;
  }
  // n일 전
  if (nowDay > day) {
    if ((nowDay - day) * 24 + nowHour - hour >= 24) {
      let n = nowDay - day;
      return `${n}일 전`;
    }
  } else if (nowDay < day && nowMonth % 12 === (month + 1) % 12) {
    let n = nowDay + presetMonth - day;
    return `${n}일 전`;
  }
  // n시간 전
  if (nowHour > hour) {
    if ((nowHour - hour) * 60 + nowMinute - minute >= 60) {
      let n = nowHour - hour;
      return `${n}시간 전`;
    }
  } else if (nowHour < hour && nowDay % 30 === (day + 1) % 30) {
    let n = nowHour + 24 - hour;
    return `${n}시간 전`;
  }
  // n분 전
  if (nowMinute > minute) {
    if ((nowMinute - minute) * 60 + nowSecond - second >= 60) {
      let n = nowMinute - minute;
      return `${n}분 전`;
    }
  } else if (nowMinute < minute && nowHour % 24 === (hour + 1) % 24) {
    let n = nowMinute + 60 - minute;
    return `${n}분 전`;
  }
  // n초 전
  if (nowSecond > second) {
    let n = nowSecond - second;
    return `${n}초 전`;
  } else if (nowSecond < second && nowMinute % 60 === (minute + 1) % 60) {
    let n = nowSecond + 60 - second;
    return `${n}초 전`;
  }
  // n초 전 예외
  if (nowMinute !== minute) {
    let n = nowSecond + 60 - second;
    return `${n}초 전`;
  }
  return `방금 전`;
};

function Alarm({ characterSlice }) {
  const history = useHistory();
  const [newAlarmList, setNewAlarmList] = useState([]);
  const [oldAlarmList, setOldAlarmList] = useState([]);

  const getAlarmList = () => {
    Send.get(`/character/alarms/${characterSlice.characterSeq}`).then((res) => {
      const alarmList = res.data.reverse();
      setNewAlarmList(alarmList.filter((alarm) => !alarm.alarmIsRead));
      setOldAlarmList(alarmList.filter((alarm) => alarm.alarmIsRead));
    });
  };
  // 알람 에러 한번 체크하기
  const alarmClick = (alarmSeq, alarmType, targetSeq, targetNickname, e) => {
    e.preventDefault();
    // 신규 알림 -> 기존 알림으로 변경
    Send.get(`/character/alarm/${alarmSeq}`).then((res) => console.log(res));

    if (alarmType === 1) {
      // targetSeq === characterSeq
      Send.get(`/character/${targetSeq}`).then((res) => history.push(`/${res.data.nickname}`));
    } else if (2 <= alarmType && alarmType <= 3) {
      // 내 저장소로 이동
      history.push(`/${targetNickname}/storages`);
    } else if (4 <= alarmType && alarmType <= 6) {
      // targetSeq === storageSeq
      // 해당 저장소 상세로 이동
      // history.push(`../${targetNickname}/storages/${targetSeq}`);
      history.push({
        pathname: `/${targetNickname}/storages/${targetSeq}`,
        state: {
          storageSeq: targetSeq,
        },
      });
    } else if (alarmType === 7) {
      // 내 업적으로 이동
      history.push(`/${targetNickname}/achievement`);
    }
  };

  // 중복 호출?
  useEffect(() => {
    getAlarmList();
  }, []);

  return (
    <div className="px-16">
      <MainCard classes="border rounded-xl pb-8">
        <div className="text-2xl px-4 py-4 text-center">알림</div>
        <hr className="mb-1 mx-2" />
        <div className="px-4 py-2 ml-4">신규 알림</div>
        <div className={`overflow-y-auto ${styles.heightScroll}`} style={{ maxHeight: "350px" }}>
          {newAlarmList.map((alarm) => (
            <div className="px-4 py-2" key={alarm.alarmSeq}>
              {/* 현재 링크 안걸려있음 */}
              <Link
                to=""
                className="text-sm text-gray-700 flex justify-center items-center"
                onClick={(e) => {
                  alarmClick(
                    alarm.alarmSeq,
                    alarm.alarmType,
                    alarm.targetSeq,
                    alarm.targetNickname,
                    e
                  );
                }}
              >
                <CharacterImg
                  imgWidth="50px"
                  classes="mr-4"
                  imgSrc={
                    alarm.filePath === null || alarm.fileName === null
                      ? alarm.alarmType === 1
                        ? "/images/default_user.png"
                        : 2 <= alarm.alarmType && alarm.alarmType <= 6
                        ? "/images/default_storage.png"
                        : "/images/default_achievement.png"
                      : alarm.filePath + alarm.fileName
                  }
                  // imgSrc={
                  //   alarm.filePath === null || alarm.fileName === null
                  //     ? alarm.alarmType === 1
                  //       ? "/images/default_user.png"
                  //       : "/images/default_storage.png"
                  //     : alarm.filePath + alarm.fileName
                  // }
                />
                <div style={{ width: "292px" }}>{alarm.alarmText}</div>
              </Link>
              <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
                {timeDifference(alarm.alarmDate)}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg
              imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
              imgWidth="50px"
              classes="mr-4"
            />
            <div style={{ width: "292px" }}>
              저장소 '불타는 요리 맛집'에 게시물이 삭제되었습니다.
            </div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            11시간 전
          </div>
        </div>
        <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg
              imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
              imgWidth="50px"
              classes="mr-4"
            />
            <div style={{ width: "292px" }}>
              저장소 '불타는 요리 맛집'에 게시물이 수정되었습니다.
            </div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            14시간 전
          </div>
        </div>
        <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg
              imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
              imgWidth="50px"
              classes="mr-4"
            />
            <div style={{ width: "292px" }}>
              저장소 '불타는 요리 맛집'에 게시물이 추가되었습니다.
            </div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            2일 전
          </div>
        </div> */}
        <div className="px-4 py-2 ml-4">기존 알림</div>
        <div className={`overflow-y-auto ${styles.heightScroll}`} style={{ maxHeight: "350px" }}>
          {oldAlarmList.map((alarm) => (
            <div className="px-4 py-2" key={alarm.alarmSeq}>
              <Link
                to=""
                className="text-sm text-gray-700 flex justify-center items-center"
                onClick={(e) => {
                  alarmClick(
                    alarm.alarmSeq,
                    alarm.alarmType,
                    alarm.targetSeq,
                    alarm.targetNickname,
                    e
                  );
                }}
              >
                <CharacterImg
                  imgWidth="50px"
                  classes="mr-4"
                  imgSrc={
                    alarm.filePath === null || alarm.fileName === null
                      ? alarm.alarmType === 1
                        ? "/images/default_user.png"
                        : 2 <= alarm.alarmType && alarm.alarmType <= 6
                        ? "/images/default_storage.png"
                        : "/images/default_achievement.png"
                      : alarm.filePath + alarm.fileName
                  }
                  // imgSrc={
                  //   alarm.filePath === null || alarm.fileName === null
                  //     ? alarm.alarmType === 1
                  //       ? "/images/default_user.png"
                  //       : "/images/default_storage.png"
                  //     : alarm.filePath + alarm.fileName
                  // }
                />
                <div style={{ width: "292px" }}>{alarm.alarmText}</div>
              </Link>
              <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
                {timeDifference(alarm.alarmDate)}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="px-4 py-2">
          <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
            <CharacterImg
              imgSrc="https://cdn2.thecatapi.com/images/43n.png"
              imgWidth="50px"
              classes="mr-4"
            />
            <div style={{ width: "292px" }}>저장소 '요리하는 부부 저장소'가 생성되었습니다.</div>
          </Link>
          <div className="flex justify-end mr-10" style={{ fontSize: "12px" }}>
            01. 28
          </div>
        </div> */}
      </MainCard>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Alarm);
