import React from "react";
import { connect } from "react-redux";
import { Menu } from "@headlessui/react";
import { Image, Modal, ModalHeader, ModalBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as hs } from "@fortawesome/free-solid-svg-icons";
import { faHeart as hr } from "@fortawesome/free-regular-svg-icons";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Report from "../components/Report";
import Send from "../config/Send";

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

function Comment(props) {
  const { isOpen, onCancel } = props;
  const handleCommentClose = () => {
    onCancel();
  };
  const [reportModal, setReportModal] = React.useState(false);
  const handleReportClose = () => {
    setReportModal(false);
  };

  // 좋아요
  const postLike = (replySeq, e) => {
    e.preventDefault();
    const data = {
      characterSeq: props.characterSlice.characterSeq,
      replySeq: replySeq,
    };
    Send.post("/content/reply/like", JSON.stringify(data)).then((res) => {
      console.log(res.data);
    });
  };

  // 좋아요취소
  const deleteLike = (replySeq, e) => {
    e.preventDefault();
    Send.delete("/content/reply/like", {
      params: {
        characterSeq: props.characterSlice.characterSeq,
        replySeq: replySeq,
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <Modal className="min-h-3" size="regular" active={isOpen} toggler={() => handleCommentClose(false)}>
        <ModalHeader className="text-center" toggler={() => handleCommentClose(false)}>
          <span>댓글</span>
        </ModalHeader>
        <hr className="mb-5" />
        <ModalBody>
          <div style={{ overflowY: "scroll", width: 500, height: 350 }}>
            {props.comments
              ? props.comments.map((comment, index) => {
                  return (
                    <div key={index}>
                      <div className="mb-5">
                        <div className="px-4 flex justify-between">
                          <div className="flex">
                            {comment.writerProfile ? (
                              <Image src={require(`../assets${comment.writerProfile}`)} width="32px" rounded={true} raised={false} alt="" />
                            ) : (
                              <Image src="/images/default_user.png" width="32px" rounded={true} raised={false} alt="" />
                            )}
                            <p className="pt-0.5 mx-2 text-lg">{comment.replyWriter}</p>
                          </div>
                          <Menu as="div" className="mx-2 mt-1 relative w-12">
                            <Menu.Button className="flex text-sm">
                              <span className="material-icons">more_horiz</span>
                            </Menu.Button>
                            {comment.characterSeq === props.characterSlice.characterSeq ? (
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white flex flex-col border-2">
                                <Menu.Item>
                                  <button
                                    className="mx-4 text-sm"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      Send.delete("/content/reply", {
                                        params: {
                                          replySeq: comment.replySeq,
                                        },
                                      }).then((res) => console.log(res.data));
                                    }}
                                  >
                                    삭제
                                  </button>
                                </Menu.Item>
                              </Menu.Items>
                            ) : (
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white flex flex-col border-2">
                                <Menu.Item>
                                  <button className="mx-4 text-sm" onClick={() => setReportModal(true)}>
                                    댓글 신고
                                  </button>
                                </Menu.Item>
                              </Menu.Items>
                            )}
                          </Menu>
                        </div>
                        <div className="flex justify-between">
                          <div style={{ width: 390, paddingLeft: 57 }}>
                            <ReactReadMoreReadLess
                              key={index}
                              charLimit={50}
                              readMoreText={"더보기"}
                              readLessText={"숨기기"}
                              readMoreStyle={{ color: "gray" }}
                              readLessStyle={{ color: "gray" }}
                            >
                              {comment.replyText}
                            </ReactReadMoreReadLess>
                          </div>
                          <div style={{ paddingRight: 50 }}>
                            <button>
                              {comment.replyIsLike ? (
                                <FontAwesomeIcon icon={hs} size="lg" style={{ color: "red" }} onClick={(e) => deleteLike(comment.replySeq, e)} />
                              ) : (
                                <FontAwesomeIcon icon={hr} size="lg" onClick={(e) => postLike(comment.replySeq, e)} />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="text-slate-400" style={{ paddingLeft: 57, fontSize: 13 }}>
                          <span>
                            {timeDifference(comment.replyCreatedDate)} · 좋아요 {comment.replyLike}
                          </span>
                        </div>
                        <Report comment={comment} isOpen={reportModal} onCancel={handleReportClose} style={{ zIndex: 3 }} />
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Comment);
