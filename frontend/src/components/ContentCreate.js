import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";

export default function ContentCreate(props) {
  const [fileImage, setFileImage] = React.useState([]);
  const saveFileImage = (e) => {
    const nowImageList = e.target.files;
    const nowImageURLList = [...fileImage];
    for (let i = 0; i < nowImageList.length; i += 1) {
      const nowImageURL = URL.createObjectURL(nowImageList[i]);
      nowImageURLList.push(nowImageURL);
    }
    setFileImage(nowImageURLList);
    console.log(fileImage);
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

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
        <textarea className="bg-slate-100 rounded" name="" id="" cols="70" rows="10" placeholder="이 곳에 게시글을 작성해주세요."></textarea>
        <div>
          <img src="{{ fileImage }}" alt="" />
        </div>
        <div className="bg-slate-100 rounded mb-1 flex justify-between">
          <input type="file" multiple="multiple" onChange={saveFileImage} />
          <Button color="red" onClick={() => deleteFileImage()}>
            파일삭제
          </Button>
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
