import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CharacterImg from "./CharacterImg";
import { connect } from "react-redux";
import Send from "../config/Send";
import { useHistory } from "react-router-dom";
import styles from "./AlarmShow.module.css";

// DB상에서 현재 한국 시간을 기준으로 불러옴
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

function AlarmShow({ characterSlice }) {
  const history = useHistory();
  const [alarmList, setAlarmList] = useState([]);

  const getAlarmList = () => {
    Send.get(`/character/alarms/${characterSlice.characterSeq}`).then((res) => {
      const alarmList = res.data.reverse();
      setAlarmList(alarmList.filter((alarm) => !alarm.alarmIsRead));
    });
  };

  const alarmClick = (alarmSeq, alarmType, targetSeq, targetNickname, e) => {
    e.preventDefault();
    // 신규 알림 -> 기존 알림으로 변경
    Send.get(`/character/alarm/${alarmSeq}`).then((res) => console.log(res));

    if (alarmType === 1) {
      // targetSeq === characterSeq
      Send.get(`/character/${targetSeq}`).then((res) => history.push(`../${res.data.nickname}`));
    } else if (2 <= alarmType <= 6) {
      // targetSeq === storageSeq
      // 내 저장소면 상관 없지만 상대방 저장소 가려면 닉네임도 필요함
      history.push(`../${targetNickname}/storages/${targetSeq}`);
    } else if (alarmType === 7) {
      history.push(`../${targetNickname}/achievement`);
    }
  };

  return (
    <Menu as="div" className="mx-2 relative hidden md:block">
      <div>
        <Menu.Button className="flex text-sm">
          <span
            className="material-icons h-10 w-10 mx-2"
            style={{ fontSize: 40 }}
            onClick={getAlarmList}
          >
            notifications_none
          </span>
        </Menu.Button>
      </div>
      <Menu.Items
        className="origin-top-right absolute mt-2 w-80 rounded-md shadow-lg py-1 bg-white"
        style={{ right: "-128px" }}
      >
        <div className="flex justify-between">
          <div className="text-2xl px-4 py-2">알림</div>
          <Link to="../alarm/center">
            <div className="px-4 py-2 mt-2">모두 보기</div>
          </Link>
        </div>
        <hr className="mb-1 mx-2" />
        <div className="px-4 py-2">신규 알림</div>
        <div className={`overflow-y-auto ${styles.box}`} style={{ maxHeight: "550px" }}>
          {alarmList.map((alarm) => (
            <Menu.Item key={alarm.alarmSeq}>
              <div className="px-4 py-2">
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
                  <CharacterImg imgWidth="40px" classes="mr-4" />
                  <div style={{ width: "220px" }}>{alarm.alarmText}</div>
                </Link>
                <div className="flex justify-end mr-2" style={{ fontSize: "12px" }}>
                  {timeDifference(alarm.alarmDate)}
                </div>
              </div>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(AlarmShow);
