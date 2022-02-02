import React from "react";
import { Switch } from "@headlessui/react";
import { Button, Modal, ModalHeader, ModalBody } from "@material-tailwind/react";
import StoreCompleted from "./StoreCompleted";

export default function NewStorage(props) {
  const [isPublic, setPublic] = React.useState(true);
  const { isOpen, onCancel } = props;
  const handleClose = () => {
    onCancel();
  };
  const [storeCompletedModal, setStoreCompletedModal] = React.useState(false);
  const handleStoreCompletedClose = () => {
    setStoreCompletedModal(false);
  };

  return (
    <>
      <StoreCompleted isOpen={storeCompletedModal} onCancel={handleStoreCompletedClose} style={{ zIndex: 3 }} />
      <Modal size="regular" active={isOpen} toggler={() => handleClose(false)}>
        <ModalHeader className="text-center" toggler={() => handleClose(false)}>
          <span>새 저장목록</span>
        </ModalHeader>
        <hr className="mb-5" />
        <ModalBody>
          <div className="flex flex-col items-center">
            <input
              placeholder="새 저장목록 이름"
              className="bg-white rounded-lg w-full h-9 mb-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
            />
            <div className="flex mt-3">
              <p className="mx-3">공개여부</p>
              <Switch.Group className="mx-3">
                <div className="flex items-center">
                  <Switch
                    checked={isPublic}
                    onChange={setPublic}
                    className={`${
                      isPublic ? "bg-green-500" : "bg-red-500"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <span
                      className={`${
                        isPublic ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </div>
            <p className="text-xs my-3">※ 공개 설정 시 다른 이용자에게 현재 저장소가 노출됩니다.</p>
            <Button
              className="mt-5"
              color="lightBlue"
              ripple="light"
              onClick={() => {
                setStoreCompletedModal(true);
                handleClose(false);
              }}
            >
              추가
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
