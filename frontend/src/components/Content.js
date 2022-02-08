import { useState } from "react";
import { connect } from "react-redux";
import { Menu } from "@headlessui/react";
import { Label } from "@material-tailwind/react";
import MainCard from "../components/MainCard";
import Report from "../components/Report";
import NewStorage from "./NewStorage";
import Comment from "./Comment";
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
  return `error`;
};

function Content(props) {
  const [reportModal, setReportModal] = useState(false);
  const handleReportClose = () => {
    setReportModal(false);
  };
  const [newStorageModal, setNewStorageModal] = useState(false);
  const handleNewStorageClose = () => {
    setNewStorageModal(false);
  };
  const [commentModal, setCommentModal] = useState(false);
  const handleCommentClose = () => {
    setCommentModal(false);
  };

  // 피드 게시물
  const feedContents = props.contents;
  if (feedContents.length > 1) {
    feedContents.sort((a, b) => (a.contentSeq > b.contentSeq ? 1 : -1));
  }
  // console.log(feedContents);

  // 댓글 작성
  const [replyText, setReplyText] = useState("");
  const handleReplyTextChange = (e) => {
    setReplyText(e.target.value);
  };
  const postComment = (contentSeq, replyText, e) => {
    e.preventDefault();
    const data = {
      characterSeq: props.characterSlice.characterSeq,
      contentSeq: contentSeq,
      replyText: replyText,
    };
    Send.post("/content/reply", JSON.stringify(data)).then((res) => setReplyText(""));
  };

  //댓글 불러오기
  const [comments, setComments] = useState([]);
  const getComment = (contentSeq, e) => {
    e.preventDefault();
    Send.get(`/content/reply/${contentSeq}`, {
      params: {
        characterNow: props.characterSlice.characterSeq,
        contentSeq: contentSeq,
      },
    })
      .then((res) => {
        if (res.data) {
          setComments(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {feedContents.reverse().map((content, index) => {
        return (
          <div key={index}>
            <Comment comments={comments} isOpen={commentModal} onCancel={handleCommentClose} style={{ zIndex: 2 }} />
            <Report content={content} isOpen={reportModal} onCancel={handleReportClose} style={{ zIndex: 2 }} />
            <NewStorage isOpen={newStorageModal} onCancel={handleNewStorageClose} style={{ zIndex: 2 }} />
            <MainCard classes="mb-3" max-height="900px">
              <div style={{ height: 60 }} className="p-4 flex justify-between">
                <div className="text-xl">
                  <p>{content.contentWriter}</p>
                </div>
                <Menu as="div" className="mx-2 relative">
                  <Menu.Button className="flex text-sm">
                    <span className="material-icons">more_horiz</span>
                  </Menu.Button>
                  {content.characterSeq === props.characterSlice.characterSeq ? (
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white flex flex-col border-2">
                      <Menu.Item>
                        <button
                          className="mx-4"
                          onClick={() => {
                            console.log(content.contentSeq);
                            Send.delete("/content", {
                              params: {
                                contentSeq: content.contentSeq,
                              },
                            }).then((res) => {
                              console.log(res.data);
                            });
                          }}
                        >
                          삭제
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  ) : (
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white flex flex-col border-2">
                      <Menu.Item>
                        <button className="mx-4" onClick={() => setReportModal(true)}>
                          게시글 신고
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="mx-4">팔로우</button>
                      </Menu.Item>
                    </Menu.Items>
                  )}
                </Menu>
              </div>
              <div className="flex justify-center bg-slate-100" style={{ height: 600 }}>
                <img style={{ maxWidth: 600, maxHeight: 600, objectFit: "cover" }} src="https://url.kr/4ce1sl" alt="" />
              </div>
              <div className="px-4 py-2">{content.contentText}</div>
              <div className="px-4 pt-2 flex flex-wrap">
                {content.tags
                  ? content.tags.split("|").map((tag, index) => {
                      return (
                        <Label className="mb-1" color="lightGreen" key={index}>
                          {tag}
                        </Label>
                      );
                    })
                  : null}
              </div>
              <div className="text-slate-400 px-4">{timeDifference(content.contentCreatedDate)}</div>
              <div className="px-4 py-2 flex justify-between">
                <div className="flex items-center">
                  <button className="flex items-center">
                    <span className="material-icons">favorite_border</span>
                    <span className="pb-1">{content.contentLike}</span>
                  </button>
                  <div className="invisible">---</div>
                  <button
                    className="flex items-center"
                    onClick={(e) => {
                      setCommentModal(true);
                      getComment(content.contentSeq, e);
                    }}
                  >
                    <span className="material-icons">chat_bubble_outline</span>
                    <span className="pb-1">{content.replyCount}</span>
                  </button>
                </div>
                <div className="flex items-center">
                  <Menu as="div" className="mx-2 relative">
                    <Menu.Button className="flex text-sm">
                      <span className="material-icons">library_add_check</span>
                    </Menu.Button>
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md border-2 shadow-lg py-1 bg-white flex flex-col">
                      <Menu.Item>
                        <button className="mx-4" onClick={() => setNewStorageModal(true)}>
                          새 저장목록 생성
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="mx-4">요리</button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="mx-4">맛집</button>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <span className="pb-1">{content.contentSave}</span>
                </div>
              </div>
              <hr />
              <div className="px-4 py-2 flex justify-between self-center">
                <div className="flex">
                  <div>프로필사진</div>
                  <textarea
                    value={replyText}
                    onChange={handleReplyTextChange}
                    className="mx-4"
                    type="text"
                    placeholder="댓글 달기..."
                    style={{ height: 25, width: 400 }}
                  />
                </div>
                <button
                  className="px-2 pb-0.5 rounded-md bg-slate-200"
                  onClick={(e) => {
                    if (replyText) {
                      postComment(content.contentSeq, replyText, e);
                    }
                  }}
                >
                  작성
                </button>
              </div>
            </MainCard>
          </div>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Content);
