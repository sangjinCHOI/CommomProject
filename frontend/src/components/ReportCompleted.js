import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "@material-tailwind/react";

export default function ReportCompleted(props) {
  const { isOpen, onCancel } = props;
  const handleReportCompletedClose = () => {
    onCancel();
  };

  return (
    <Modal size="regular" active={isOpen} toggler={() => handleReportCompletedClose(false)}>
      <ModalHeader toggler={() => handleReportCompletedClose(false)}>신고 완료</ModalHeader>
      <ModalBody>
        <div className="flex flex-col items-center mt-5">
          <p className="mb-1">신고가 완료되었습니다.</p>
          <p className="invisible">-----------------------------------------------</p>
          <Button className="w-24" color="gray" ripple="light" onClick={() => onCancel(false)}>
            확인
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}
