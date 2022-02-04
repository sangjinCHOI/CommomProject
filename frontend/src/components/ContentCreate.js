import React from "react";
import { Button, ClosingLabel, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";

export default function ContentCreate(props) {
  const [tag, setTag] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const onChange = (e) => setTag(e.target.value);
  const onSubmit = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (tag === "") {
        return;
      }
      if (tags.length < 10 && !tags.includes(tag)) {
        setTags((currentArray) => [...currentArray, tag]);
        setTag("");
      }
    }
  };
  const onRemove = (index) => {
    setTags(tags.filter((tag, tagIndex) => index != tagIndex));
  };
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
          className="bg-white rounded-lg w-94 h-9 mx-1 mb-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
          maxLength="20"
          value={tag}
          onChange={onChange}
          onKeyPress={onSubmit}
        />
        <div className="bg-slate-100 h-9 rounded mb-1 h-fit flex flex-wrap items-center" style={{ width: 574 }}>
          {tags.map((item, id) => (
            <div className="m-1 px-2 rounded-md bg-purple-200 flex" key={id}>
              {item}
              <button className="material-icons text-sm ml-2 pt-0.5" onClick={() => onRemove(id)}>
                close
              </button>
            </div>
          ))}
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
