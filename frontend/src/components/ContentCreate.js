import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";

export default function ContentCreate(props) {
  const { isOpen, onCancel } = props;
  const handleClose = () => {
    onCancel();
  };

  return (
    <Modal size="regular" active={isOpen} toggler={() => handleClose(false)}>
      <ModalHeader className="text-center" toggler={() => handleClose(false)}>
        게시글 작성
      </ModalHeader>
      <hr className="mb-5" />
      <ModalBody>
        <div className="bg-slate-100 rounded mb-1">캐릭터</div>
        <div className="bg-slate-100 rounded mb-1">태그</div>
        <textarea
          className="bg-slate-100 rounded"
          name=""
          id=""
          cols="70"
          rows="10"
          placeholder="이 곳에 게시글을 작성해주세요."
        ></textarea>
        <div className="bg-slate-100 rounded mb-1">파일첨부</div>
      </ModalBody>
      <ModalFooter>
        <Button color="lightBlue" ripple="light">
          작성
        </Button>
      </ModalFooter>
    </Modal>
  );
}
