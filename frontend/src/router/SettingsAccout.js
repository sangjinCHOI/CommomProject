import { Card, CardBody } from "@material-tailwind/react";

export default function SettingsAccount() {
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
                      <span className="material-icons">arrow_forward_ios</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">생년월일</span>
                      <br />
                      <span>1995-10-25</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      <span className="material-icons">arrow_forward_ios</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
