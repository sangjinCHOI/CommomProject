import React from "react";
import { Card, CardBody, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";

export default function SettingsAccount() {
  const [showPwModal, setShowPwModal] = React.useState(false);
  const [showBirthModal, setShowBirthModal] = React.useState(false);

  return (
    <>
      <div className="flex mx-10 mt-20">
        <Card>
          <CardBody className="pt-0 mx-5">
            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <tbody>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">아이디</span>
                      <br />
                      <span>persona</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">이메일</span>
                      <br />
                      <span>helloworld@gmail.com</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">비밀번호</span>
                      <br />
                      <span className="invisible">password</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      <button className="material-icons" onClick={(e) => setShowPwModal(true)}>
                        arrow_forward_ios
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">생년월일</span>
                      <br />
                      <span>1995-10-25</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      <button className="material-icons" onClick={(e) => setShowBirthModal(true)}>
                        arrow_forward_ios
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
      {/* 비밀번호 변경 modal */}
      <Modal size="regular" active={showPwModal} toggler={() => setShowPwModal(false)}>
        <ModalHeader toggler={() => setShowPwModal(false)} className="text-center">
          비밀번호 변경
        </ModalHeader>
        <hr className="mb-5" />
        <ModalBody>
          <p className="text-base leading-relaxed text-gray-600 font-normal">새로운 비밀번호를 입력하세요.</p>
          <Input type="password" placeholder=""></Input>
          <span className="invisible">-------------------------------------------------</span>
          <p className="text-base leading-relaxed text-gray-600 font-normal">새로운 비밀번호를 다시 한 번 입력하세요.</p>
          <Input type="password" placeholder=""></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="black" buttonType="link" onClick={(e) => setShowPwModal(false)} ripple="dark">
            Close
          </Button>

          <Button color="lightBlue" onClick={(e) => setShowPwModal(false)} ripple="light">
            변경
          </Button>
        </ModalFooter>
      </Modal>

      {/* 생년월일 변경 modal */}
      <Modal size="regular" active={showBirthModal} toggler={() => setShowBirthModal(false)}>
        <ModalHeader toggler={() => setShowBirthModal(false)} className="text-center">
          생년월일 변경
        </ModalHeader>
        <hr className="mb-5" />
        <ModalBody>
          <p className="text-base leading-relaxed text-gray-600 font-normal">생년월일을 입력하세요.</p>
          <Input type="date" placeholder=""></Input>
          <span className="invisible">-------------------------------------------------</span>
        </ModalBody>
        <ModalFooter>
          <Button color="black" buttonType="link" onClick={(e) => setShowBirthModal(false)} ripple="dark">
            Close
          </Button>

          <Button color="lightBlue" onClick={(e) => setShowBirthModal(false)} ripple="light">
            변경
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
