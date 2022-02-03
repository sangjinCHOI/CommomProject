import React from "react";
import { Button, ClosingLabel, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";

export default function ContentCreate(props) {
  const { isOpen, onCancel } = props;
  const handleClose = () => {
    onCancel();
  };

  return (
    <Modal size="regular" active={isOpen} toggler={() => handleClose(false)}>
      <ModalHeader className="text-center" toggler={() => handleClose(false)}>
        <span>게시글 작성</span>
        <select className="bg-white rounded-lg w-24 h-9 mx-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black">
          <option className="rounded-lg h-10" value="0">
            전체공개
          </option>
          <option className="rounded-lg h-10" value="1">
            팔로워공개
          </option>
          <option className="rounded-lg h-10" value="2">
            비공개
          </option>
        </select>
      </ModalHeader>
      <hr className="mb-5" />
      <ModalBody>
        <input
          type="text"
          placeholder="태그를 입력해주세요."
          className="bg-white rounded-lg w-94 h-9 mx-3 mb-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
        />
        <div className="bg-slate-100 h-9 rounded mb-1 h-fit flex flex-wrap items-center" style={{ width: 574 }}>
          <ClosingLabel className="my-1" color="lightGreen">
            Label
          </ClosingLabel>
          <ClosingLabel color="lightGreen">Label</ClosingLabel>
          <ClosingLabel color="lightGreen">Label</ClosingLabel>
        </div>
        <textarea className="bg-slate-100 rounded" name="" id="" cols="70" rows="10" placeholder="이 곳에 게시글을 작성해주세요."></textarea>
        <div>
          <img src="{{ fileImage }}" alt="" />
        </div>
        <div className="bg-slate-100 rounded mb-1 flex justify-between">
          <input type="file" multiple="multiple" />
          <Button color="red">파일삭제</Button>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="lightBlue" ripple="light">
          작성
        </Button>
      </ModalFooter>
    </Modal>
  );
}
