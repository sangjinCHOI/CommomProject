import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function SettingsHelp() {
  const [customerCenter, setCustomerCenter] = React.useState(false);
  const [communityRule, setCommunityRule] = React.useState(false);
  const [dataPolicy, setDataPolicy] = React.useState(false);
  const [termAndCondition, setTermAndCondition] = React.useState(false);
  const [info, setInfo] = React.useState(false);

  function CustomerCenter() {
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
                        <button className="material-icons" onClick={() => setCustomerCenter(false)}>
                          arrow_backward_ios
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">고객센터</th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
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

  function CommunityRule() {
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
                        <button className="material-icons" onClick={() => setCommunityRule(false)}>
                          arrow_backward_ios
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                        커뮤니티규정
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
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

  function DataPolicy() {
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
                        <button className="material-icons" onClick={() => setDataPolicy(false)}>
                          arrow_backward_ios
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">데이터정책</th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
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

  function TermAndCondition() {
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
                        <button className="material-icons" onClick={() => setTermAndCondition(false)}>
                          arrow_backward_ios
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">이용약관</th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
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

  function Info() {
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
                        <button className="material-icons" onClick={() => setInfo(false)}>
                          arrow_backward_ios
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">정보</th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
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

  if (customerCenter) {
    return <CustomerCenter />;
  } else if (communityRule) {
    return <CommunityRule />;
  } else if (dataPolicy) {
    return <DataPolicy />;
  } else if (termAndCondition) {
    return <TermAndCondition />;
  } else if (info) {
    return <Info />;
  } else {
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
                        <span className="text-lg font-bold">고객센터</span>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        <button className="material-icons" onClick={() => setCustomerCenter(true)}>
                          arrow_forward_ios
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                        <span className="text-lg font-bold">커뮤니티 규정</span>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        <button className="material-icons" onClick={() => setCommunityRule(true)}>
                          arrow_forward_ios
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                        <span className="text-lg font-bold">데이터 정책</span>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        <button className="material-icons" onClick={() => setDataPolicy(true)}>
                          arrow_forward_ios
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                        <span className="text-lg font-bold">이용 약관</span>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        <button className="material-icons" onClick={() => setTermAndCondition(true)}>
                          arrow_forward_ios
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                        <span className="text-lg font-bold">정보</span>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        <button className="material-icons" onClick={() => setInfo(true)}>
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
      </>
    );
  }
}
