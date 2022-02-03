import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "@material-tailwind/react";

export default function StoreCompleted(props) {
  const { isOpen, onCancel } = props;
  const handleStoreCompletedClose = () => {
    onCancel();
  };

  return (
    <Modal size="regular" active={isOpen} toggler={() => handleStoreCompletedClose(false)}>
      <ModalHeader toggler={() => handleStoreCompletedClose(false)}>저장 완료</ModalHeader>
      <ModalBody>
        <div className="flex flex-col items-center mt-5">
          <p className="mb-1">저장이 완료되었습니다.</p>
          <p className="invisible">-----------------------------------------------</p>
          <Button className="w-24" color="gray" ripple="light" onClick={() => onCancel(false)}>
            확인
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}
