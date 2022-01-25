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
    <div style={{ backgroundColor: "#E2EFF2", position: "sticky", top: 0}}>
      <Disclosure as="nav" className="bg-black-800">
        {({ open }) => (
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
                      <Menu.Items className="hidden md:block origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>캐릭터 변경</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>설정</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>로그아웃</a>)}
                        </Menu.Item>
                      </Menu.Items>
                      <Menu.Items className="block md:hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>게시글 작성</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>알림</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>프로필</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>캐릭터 변경</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>설정</a>)}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>로그아웃</a>)}
                        </Menu.Item>
                      </Menu.Items>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <hr style={{ backgroundColor: "grey", marginTop: 3, height: 2 }} />
    </div>
  )
}

































// export default function Navigationbar() {
//   const [openNavbar, setOpenNavbar] = useState(false);

//   return (
//     <Navbar color="purple" navbar>
//         <NavbarContainer class="flex">
//             <NavbarWrapper>
//                 <NavLink><img src={ Logo } alt="logo" width="200px"/></NavLink>
//             </NavbarWrapper>

//             <NavbarCollapse open={openNavbar}>
//                 <NavbarInput type="text" placeholder="Search here" />
//                 <Nav leftSide>
//                     <NavLink href="#navbar" ripple="light">
//                       <img src={ Add } alt="logo"/>
//                     </NavLink>
//                     <NavLink href="#navbar" ripple="light">
//                       <img src={ Alarm } alt="logo"/>
//                     </NavLink>
//                     <NavLink href="#navbar" ripple="light">
//                       <img src={ Person } alt="logo"/>
//                     </NavLink>
//                     <Menu>
//                       <Menu.Button>
//                         <img src={ MenuIcon } alt="logo"/>
//                       </Menu.Button>
//                       <Menu.Items>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                             >
//                               Your Profile
//                             </a>
//                           )}
//                         </Menu.Item>
//                       </Menu.Items>

                      
//                     </Menu>
//                 </Nav>
//             </NavbarCollapse>
//         </NavbarContainer>
//     </Navbar>
//   );
// }