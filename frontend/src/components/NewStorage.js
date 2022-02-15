import { useState } from "react";
import { connect } from "react-redux";
import { Switch } from "@headlessui/react";
import { Button, Modal, ModalHeader, ModalBody } from "@material-tailwind/react";
import StoreCompleted from "./StoreCompleted";
import Send from "../config/Send";
import File from "../config/File";

function NewStorage(props) {
  const { isOpen, onCancel } = props;
  const handleClose = () => {
    onCancel();
  };
  const [storeCompletedModal, setStoreCompletedModal] = useState(false);
  const handleStoreCompletedClose = () => {
    setStoreCompletedModal(false);
  };

  // 저장목록 만들기
  const [storageName, setStorageName] = useState("");
  const handleStorageName = (e) => {
    setStorageName(e.target.value);
  };
  const [isPublic, setPublic] = useState(true);
  const handleIsPublic = () => {
    setPublic(!isPublic);
  };
  const newStorage = (contentSeq, e) => {
    const formData = new FormData();
    const data = {
      characterSeq: props.characterSlice.characterSeq,
      storageName: storageName,
      storagePublic: isPublic,
    };
    formData.append("file", []);
    formData.append("sendStorageCreateRequest", new Blob([JSON.stringify(data)], { type: "application/json" }));
    File.post("/storage", formData)
      .then((res) => {
        // 저장소 생성/삭제/게시글변동 등의 요청이 성공했다면
        if (res.status === 200) {
          // 필요하다면 상대방(알람을 받을) 캐릭터 정보 가져와서 -> 상대방한테 알림을 보낼 때
          // 알람 보내기
          if (props.characterSlice.alarmAllow) {
            // 상대방 캐릭터의 알람 허용 상태 확인
            // alarmAllow: 모든 알림, likeAlarm: 좋아요 알림, modifyAlarm: 저장한 게시글 수정 및 삭제 알림, replyAlarm: 댓글 알림,
            const alarmData = {
              alarmDate: new Date().toISOString(),
              alarmType: 2,
              characterSeq: props.characterSlice.characterSeq, // 상대방(알람을 받을) 캐릭터
              relationTb: "tb_storage", // 관련 테이블(tb_character or tb_storage or tb_achievement)
              targetSeq: res.data.storage_seq, // 본인 캐릭터or저장소or업적의 일련번호(storageSeq or achievementSeq)
            };
            // 해당 캐릭터에 알람 보내기
            Send.post("/character/alarm", JSON.stringify(alarmData)).then((res) => console.log(res));
          }
        }
        const data = {
          characterSeq: props.characterSlice.characterSeq,
          contentSeq: contentSeq,
          storageSeq: res.data.storage_seq,
        };
        Send.post("/content/store", JSON.stringify(data)).then((res) => {
          if (res.status === 200) {
            if (props.characterSlice.alarmAllow || props.characterSlice.modifyAlarm) {
              // 상대방 캐릭터의 알람 허용 상태 확인
              // alarmAllow: 모든 알림, likeAlarm: 좋아요 알림, modifyAlarm: 저장한 게시글 수정 및 삭제 알림, replyAlarm: 댓글 알림,
              const alarmData = {
                alarmDate: new Date().toISOString(),
                alarmType: 4,
                characterSeq: props.characterSlice.characterSeq, // 상대방(알람을 받을) 캐릭터
                relationTb: "tb_storage", // 관련 테이블(tb_character or tb_storage or tb_achievement)
                targetSeq: data.storageSeq, // 본인 캐릭터or저장소or업적의 일련번호(storageSeq or achievementSeq)
              };
              // 해당 캐릭터에 알람 보내기
              Send.post("/character/alarm", JSON.stringify(alarmData)).then((res) => console.log(res));
            }
          }
        });
      })
      .catch((err) => console.log(err));
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
              value={storageName}
              onChange={handleStorageName}
              placeholder="새 저장목록 이름"
              className="bg-white rounded-lg w-full h-9 mb-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
            />
            <div className="flex mt-3">
              <p className="mx-3">공개여부</p>
              <Switch.Group className="mx-3">
                <div className="flex items-center">
                  <Switch
                    checked={isPublic}
                    onChange={handleIsPublic}
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
              onClick={(e) => {
                setStoreCompletedModal(true);
                handleClose(false);
                newStorage(props.content.contentSeq, e);
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

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(NewStorage);
