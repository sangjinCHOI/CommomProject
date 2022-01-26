import { Card, CardBody, CardHeader } from "@material-tailwind/react";

export default function SettingsAlarm() {
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
                      <span className="text-lg font-bold">모든 알림 허용</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">좋아요 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">댓글 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">팔로우 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">저장한 게시물 수정 및 삭제 알림</span>
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
