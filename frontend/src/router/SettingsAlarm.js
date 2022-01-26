import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Card, CardBody } from "@material-tailwind/react";

export default function SettingsAlarm() {
  const [allEnabled, setAllEnabled] = useState(true);
  const [likeEnabled, setLikeEnabled] = useState(true);
  const [commentEnabled, setCommentEnabled] = useState(true);
  const [followEnabled, setFollowEnabled] = useState(true);
  const [saveEnabled, setSaveEnabled] = useState(true);

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
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <Switch.Group>
                        <div className="flex items-center">
                          <Switch
                            checked={allEnabled}
                            onChange={setAllEnabled}
                            className={`${
                              allEnabled ? "bg-green-500" : "bg-red-500"
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                          >
                            <span
                              className={`${
                                allEnabled ? "translate-x-6" : "translate-x-1"
                              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                          </Switch>
                        </div>
                      </Switch.Group>
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">좋아요 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <Switch.Group>
                        <div className="flex items-center">
                          <Switch
                            checked={likeEnabled}
                            onChange={setLikeEnabled}
                            className={`${
                              likeEnabled ? "bg-green-500" : "bg-red-500"
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                          >
                            <span
                              className={`${
                                likeEnabled ? "translate-x-6" : "translate-x-1"
                              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                          </Switch>
                        </div>
                      </Switch.Group>
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">댓글 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      <Switch.Group>
                        <div className="flex items-center">
                          <Switch
                            checked={commentEnabled}
                            onChange={setCommentEnabled}
                            className={`${
                              commentEnabled ? "bg-green-500" : "bg-red-500"
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                          >
                            <span
                              className={`${
                                commentEnabled ? "translate-x-6" : "translate-x-1"
                              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                          </Switch>
                        </div>
                      </Switch.Group>
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">팔로우 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      <Switch.Group>
                        <div className="flex items-center">
                          <Switch
                            checked={followEnabled}
                            onChange={setFollowEnabled}
                            className={`${
                              followEnabled ? "bg-green-500" : "bg-red-500"
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                          >
                            <span
                              className={`${
                                followEnabled ? "translate-x-6" : "translate-x-1"
                              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                          </Switch>
                        </div>
                      </Switch.Group>
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-10 py-4 text-left">
                      <span className="text-lg font-bold">저장한 게시물 수정 및 삭제 알림</span>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      <Switch.Group>
                        <div className="flex items-center">
                          <Switch
                            checked={saveEnabled}
                            onChange={setSaveEnabled}
                            className={`${
                              saveEnabled ? "bg-green-500" : "bg-red-500"
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                          >
                            <span
                              className={`${
                                saveEnabled ? "translate-x-6" : "translate-x-1"
                              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                          </Switch>
                        </div>
                      </Switch.Group>
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
