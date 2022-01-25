import React from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu } from '@headlessui/react'
import Logo from "../assets/images/main_logo.png"
import ShortLogo from "../assets/images/short_logo.png"
import Search from "../assets/images/search.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div style={{ backgroundColor: "#E2EFF2", position: "sticky", top: 0, marginTop: 15}}>
      <Disclosure as="nav" className="bg-black-800">
        <>
          <div className="mx-auto px-2 lg:px-8">
            <div className="flex items-center justify-between h-16">

              <div className="">
                <Link to="/">
                  <img className="block md:hidden h-10" src={ ShortLogo } alt="logo" />
                  <img className="hidden md:block h-10" src={ Logo } alt="shortlogo" />
                </Link>
              </div>

              <div className="relative">
                <input class="rounded-full h-10 ml-10 pl-5 pr-10" style={{width: "300px"}} type="text" placeholder="search" />
                <img className="absolute inset-y-2 right-3" src={ Search } alt="" />
              </div>

              <div className="flex items-center static inset-auto ml-6 pr-0">
                <span class="hidden md:block material-icons h-10 w-10 mt-1 mx-2" style={{ fontSize:40 }}>add_circle_outline</span>
                <Link to="/alarm"><span class="hidden md:block material-icons h-10 w-10 mt-1 mx-2" style={{ fontSize:40 }}>notifications_none</span></Link>
                <Link to=""><span class="hidden md:block material-icons h-10 w-10 mt-1 mx-2" style={{ fontSize:40 }}>person_outline</span></Link>
                {/* dropdown */}
                <Menu as="div" className="mx-2 relative">
                  <div>
                    <Menu.Button className="flex text-sm">
                      <span class="material-icons h-10 w-10 mx-2" style={{ fontSize:40 }}>menu</span>
                    </Menu.Button>
                  </div>
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <Link to="/" className='block md:hidden px-4 py-2 text-sm text-gray-700'>게시글 작성</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/" className='block md:hidden px-4 py-2 text-sm text-gray-700'>알림</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/" className='block md:hidden px-4 py-2 text-sm text-gray-700'>프로필</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/" className='block px-4 py-2 text-sm text-gray-700'>캐릭터 변경</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/settings/character" className='block px-4 py-2 text-sm text-gray-700'>설정</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/" className='block px-4 py-2 text-sm text-gray-700'>로그아웃</Link>
                      </Menu.Item>
                    </Menu.Items>
                    
                </Menu>
              </div>
            </div>
          </div>
        </>
      </Disclosure>
      <hr style={{ backgroundColor: "grey", marginTop: 15, marginBottom: 5, height: 2 }} />
    </div>
  )
}