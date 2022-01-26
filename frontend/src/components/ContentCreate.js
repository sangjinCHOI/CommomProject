export default function SettingsCharacter() {
  const [contentCreateModal, setcontentCreateModal] = React.useState(false);

  return (
    <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
      <ModalHeader toggler={() => setShowModal(false)} className="text-center">
        게시글 작성
      </ModalHeader>
      <hr className="mb-5" />
      <ModalBody>
        <div className="bg-slate-100 rounded mb-1">캐릭터</div>
        <div className="bg-slate-100 rounded mb-1">태그</div>
        <textarea className="bg-slate-100 rounded" name="" id="" cols="70" rows="10" placeholder="이 곳에 게시글을 작성해주세요."></textarea>
        <div className="bg-slate-100 rounded mb-1">파일첨부</div>
      </ModalBody>
      <ModalFooter>
        <Button color="lightBlue" onClick={(e) => setShowModal(false)} ripple="light">
          작성
        </Button>
      </ModalFooter>
    </Modal>
  );
}
