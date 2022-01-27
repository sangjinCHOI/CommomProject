import React from "react";
import { Menu, Popover } from "@headlessui/react";
import { Label } from "@material-tailwind/react";
import MainCard from "../components/MainCard";

export default function Home() {
  return (
    <>
      <MainCard max-height="900px">
        <div style={{ height: 60 }} className="p-4 flex justify-between">
          <div className="text-xl">
            <p>초밥왕김탁구</p>
          </div>
          <Menu as="div" className="mx-2 relative">
            <Menu.Button className="flex text-sm">
              <span className="material-icons">more_horiz</span>
            </Menu.Button>
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white flex flex-col border-2">
              <Menu.Item>
                <button className="mx-4">게시글 신고</button>
              </Menu.Item>
              <Menu.Item>
                <button className="mx-4">팔로우</button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="flex justify-center bg-slate-100" style={{ height: 600 }}>
          <img style={{ maxWidth: 600, maxHeight: 600, objectFit: "cover" }} src="https://url.kr/4ce1sl" alt="" />
        </div>
        <div className="px-4 py-2">오늘 초밥을 점심으로 먹었다. 사실 만든게 아니라 사먹은거다.</div>
        <div className="px-4 pt-2 flex flex-wrap">
          <Label className="mb-1" color="lightGreen">
            초밥
          </Label>
        </div>
        <div className="text-slate-400 px-4">2022.01.26</div>
        <div className="px-4 py-2 flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="material-icons">favorite_border</span>
              <span className="pb-1">456</span>
            </div>
            <div className="invisible">---</div>
            <div className="flex items-center">
              <span className="material-icons">chat_bubble_outline</span>
              <span className="pb-1">123</span>
            </div>
          </div>
          <div className="flex items-center">
            <Menu as="div" className="mx-2 relative">
              <Menu.Button className="flex text-sm">
                <span className="material-icons">library_add_check</span>
              </Menu.Button>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md border-2 shadow-lg py-1 bg-white flex flex-col">
                <Menu.Item>
                  <button className="mx-4">새 저장목록 생성</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="mx-4">요리</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="mx-4">맛집</button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <span className="pb-1">51</span>
          </div>
        </div>
        <hr />
        <div className="px-4 py-2 flex justify-between self-center">
          <div className="flex">
            <div>프로필사진</div>
            <input className="mx-4" type="text" size="40" placeholder="댓글 달기..." />
          </div>
          <button>작성</button>
        </div>
      </MainCard>
    </>
  );
}
