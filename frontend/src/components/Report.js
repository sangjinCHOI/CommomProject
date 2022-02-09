import { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";
import ReportCompleted from "./ReportCompleted";
import Send from "../config/Send";

function Report(props) {
  const { isOpen, onCancel } = props;
  const handleReportClose = () => {
    onCancel();
  };
  const [reportCompletedModal, setReportCompletedModal] = useState(false);
  const handleReportCompletedClose = () => {
    setReportCompletedModal(false);
  };

  // 신고하기
  const [reportText, setReportText] = useState("");
  const handleReportText = (e) => {
    setReportText(e.target.value);
  };
  const [whyReport, setWhyReport] = useState();
  const handleWhyReport = (e) => {
    setWhyReport(e.target.value);
  };
  const postContentReport = (e) => {
    e.preventDefault();
    const data = {
      reportText: reportText,
      reportType: whyReport,
      reportedContent: props.content.contentSeq,
      reportingCharacter: props.characterSlice.characterSeq,
    };
    Send.post("/content/report", JSON.stringify(data)).then((res) => console.log(res.data));
  };
  const postCommentReport = (e) => {
    e.preventDefault();
    const data = {
      reportText: reportText,
      reportType: whyReport,
      reportedReply: props.comment.replySeq,
      reportingCharacter: props.characterSlice.characterSeq,
    };
    Send.post("/content/reply/report", JSON.stringify(data)).then((res) => console.log(res.data));
  };
  // console.log(props);
  return (
    <>
      <ReportCompleted isOpen={reportCompletedModal} onCancel={handleReportCompletedClose} style={{ zIndex: 3 }} />
      <Modal size="regular" active={isOpen} toggler={() => handleReportClose(false)}>
        <ModalHeader className="text-center" toggler={() => handleReportClose(false)}>
          <span>신고</span>
        </ModalHeader>
        <hr className="mb-5" />
        <ModalBody>
          <select
            value={whyReport}
            onChange={handleWhyReport}
            className="bg-white rounded-lg w-full h-9 mb-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
          >
            <option className="rounded-lg h-10" value="0">
              욕설 / 도배
            </option>
            <option className="rounded-lg h-10" value="1">
              스팸 / 광고
            </option>
            <option className="rounded-lg h-10" value="2">
              거짓 정보
            </option>
            <option className="rounded-lg h-10" value="3">
              기타 사유
            </option>
          </select>
          <br />
          <textarea
            value={reportText}
            onChange={handleReportText}
            className="bg-slate-100 rounded"
            name=""
            id=""
            cols="50"
            rows="5"
            placeholder="신고 내용을 작성해주세요."
          ></textarea>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            ripple="light"
            onClick={(e) => {
              setReportCompletedModal(true);
              handleReportClose(false);
              if (props.comment) {
                postCommentReport(e);
              } else if (props.content) {
                postContentReport(e);
              }
            }}
          >
            신고하기
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Report);
