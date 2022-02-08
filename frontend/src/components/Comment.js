import React from "react";
import { connect } from "react-redux";
import { Menu } from "@headlessui/react";
import { Image, Modal, ModalHeader, ModalBody } from "@material-tailwind/react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Report from "../components/Report";
import Send from "../config/Send";

function Comment(props) {
  const { isOpen, onCancel } = props;
  const handleCommentClose = () => {
    onCancel();
  };
  const [reportModal, setReportModal] = React.useState(false);
  const handleReportClose = () => {
    setReportModal(false);
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
                  console.log(comment);
                  return (
                    <div className="mb-5" key={index}>
                      <div className="px-4 flex justify-between">
                        <div className="flex">
                          <Image src="https://url.kr/p6xvn5" width="32px" rounded={true} raised={false} alt="Rounded Image" />
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
                      <div style={{ width: 400, paddingLeft: 57 }}>
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
                    </div>
                  );
                })
              : null}
          </div>
        </ModalBody>
      </Modal>
      <Report isOpen={reportModal} onCancel={handleReportClose} style={{ zIndex: 3 }} />
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Comment);
