import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CharacterImg from "./CharacterImg";
import { connect } from "react-redux";
import Send from "../config/Send";

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
  }
  // n일 전
  if (nowDay > day) {
    if ((nowDay - day) * 24 + nowHour - hour >= 24) {
      let n = nowDay - day;
      return `${n}일 전`;
    }
  }
  // n시간 전
  if (nowHour > hour) {
    if ((nowHour - hour) * 60 + nowMinute - minute >= 60) {
      let n = nowHour - hour;
      return `${n}시간 전`;
    }
  }
  // n분 전
  if (nowMinute > minute) {
    if ((nowMinute - minute) * 60 + nowSecond - second >= 60) {
      let n = nowMinute - minute;
      return `${n}분 전`;
    }
  }
  // n초 전
  if (nowSecond > second) {
    let n = nowSecond - second;
    return `${n}초 전`;
  }
  // n초 전 예외
  if (nowMinute !== minute) {
    let n = nowSecond + 60 - second;
    return `${n}초 전`;
  }
  return `미래에서 오셨나요?`;
};

function AlarmShow({ characterSlice }) {
  const [alarmList, setAlarmList] = useState([]);

  const getAlarmList = () => {
    Send.get(`/character/alarms/${characterSlice.characterSeq}`).then((res) => {
      console.log(res.data);
      setAlarmList(res.data);
    });
  };

  // console.log(timeDifference("2022-02-07T16:29:59"));

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
        {alarmList.map((alarm) => (
          <Menu.Item key={alarm.alarmSeq}>
            <div className="px-4 py-2">
              <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
                <CharacterImg imgWidth="40px" classes="mr-4" />
                <div style={{ width: "220px" }}>{alarm.alarmText}</div>
              </Link>
              <div className="flex justify-end mr-2" style={{ fontSize: "12px" }}>
                {timeDifference(alarm.alarmDate)}
              </div>
            </div>
          </Menu.Item>
        ))}
        {/* <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg imgWidth="40px" classes="mr-4" />
              <div style={{ width: "220px" }}>초밥왕님이 회원님을 팔로우하기 시작했습니다.</div>
            </Link>
            <div className="flex justify-end mr-2" style={{ fontSize: "12px" }}>
              1시간 전
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg
                imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
                imgWidth="40px"
                classes="mr-4"
              />
              <div style={{ width: "220px" }}>
                저장소 '불타는 요리 맛집'에 게시물이 삭제되었습니다.
              </div>
            </Link>
            <div className="flex justify-end text-sm mr-2" style={{ fontSize: "12px" }}>
              11시간 전
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg
                imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
                imgWidth="40px"
                classes="mr-4"
              />
              <div style={{ width: "220px" }}>
                저장소 '불타는 요리 맛집'에 게시물이 수정되었습니다.
              </div>
            </Link>
            <div className="flex justify-end text-sm mr-2" style={{ fontSize: "12px" }}>
              14시간 전
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg
                imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
                imgWidth="40px"
                classes="mr-4"
              />
              <div style={{ width: "220px" }}>
                저장소 '불타는 요리 맛집'에 게시물이 추가되었습니다.
              </div>
            </Link>
            <div className="flex justify-end text-sm mr-2" style={{ fontSize: "12px" }}>
              2일 전
            </div>
          </div>
        </Menu.Item> */}
      </Menu.Items>
    </Menu>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(AlarmShow);
