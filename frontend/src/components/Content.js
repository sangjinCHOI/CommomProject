import { useState } from "react";
import { connect } from "react-redux";
import { Menu } from "@headlessui/react";
import { Label } from "@material-tailwind/react";
import MainCard from "../components/MainCard";
import Report from "../components/Report";
import NewStorage from "./NewStorage";
import Comment from "./Comment";
import Send from "../config/Send";

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
  console.log(feedContents);

  return (
    <>
      {feedContents.reverse().map((content, index) => {
        return (
          <div key={index}>
            <Comment isOpen={commentModal} onCancel={handleCommentClose} style={{ zIndex: 2 }} />
            <Report isOpen={reportModal} onCancel={handleReportClose} style={{ zIndex: 2 }} />
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
                <Label className="mb-1" color="lightGreen">
                  초밥
                </Label>
              </div>
              <div className="text-slate-400 px-4">
                {content.contentCreatedDate.slice(0, 10)} {content.contentCreatedDate.slice(11, 16)}
              </div>
              <div className="px-4 py-2 flex justify-between">
                <div className="flex items-center">
                  <button className="flex items-center">
                    <span className="material-icons">favorite_border</span>
                    <span className="pb-1">{content.contentLike}</span>
                  </button>
                  <div className="invisible">---</div>
                  <button className="flex items-center" onClick={() => setCommentModal(true)}>
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
                  <textarea className="mx-4" type="text" placeholder="댓글 달기..." style={{ height: 25, width: 400 }} />
                </div>
                <button>작성</button>
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
