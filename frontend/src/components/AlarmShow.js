import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import CharacterImg from "./CharacterImg";

export default function AlarmShow() {
  return (
    <Menu as="div" className="mx-2 relative hidden md:block">
      <div>
        <Menu.Button className="flex text-sm">
          <span className="material-icons h-10 w-10 mx-2" style={{ fontSize: 40 }}>
            notifications_none
          </span>
        </Menu.Button>
      </div>
      <Menu.Items
        className="origin-top-right absolute mt-2 w-80 rounded-md shadow-lg py-1 bg-white"
        style={{ right: "-128px" }}
      >
        <div className="flex justify-between">
          <div className="text-2xl px-4 py-2">알림</div>
          <Link to="../alarm/center">
            <div className="px-4 py-2 mt-2">모두 보기</div>
          </Link>
        </div>
        <hr className="mb-1 mx-2" />
        <div className="px-4 py-2">신규 알림</div>
        <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg imgWidth="40px" classes="mr-4" />
              <div style={{ width: "220px" }}>초밥왕님이 회원님을 팔로우하기 시작했습니다.</div>
            </Link>
            <div className="flex justify-end text-sm mr-2" style={{ fontSize: "12px" }}>
              1시간 전
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg imgWidth="40px" classes="mr-4" />
              <div style={{ width: "220px" }}>짜왕님이 회원님의 게시글에 댓글을 남겼습니다.</div>
            </Link>
            <div className="flex justify-end text-sm mr-2" style={{ fontSize: "12px" }}>
              11시간 전
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="px-4 py-2">
            <Link to="" className="text-sm text-gray-700 flex justify-center items-center">
              <CharacterImg
                imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
                imgWidth="40px"
                classes="mr-4"
              />
              <div style={{ width: "220px" }}>
                저장소 '불타는 요리 맛집'에 상태가 변동된 게시물이 있습니다.
              </div>
            </Link>
            <div className="flex justify-end text-sm mr-2" style={{ fontSize: "12px" }}>
              2일 전
            </div>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
