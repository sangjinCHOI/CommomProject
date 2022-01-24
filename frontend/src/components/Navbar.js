import React, { useState } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Logo from "../assets/images/main_logo.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div style={{ backgroundColor: "#E2EFF2", position: "sticky", top: 0}}>
      <Disclosure as="nav" className="bg-black-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">

                <div className="sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="h-10 w-auto"
                      src={ Logo }
                      alt="logo"
                    />
                  </div>
                </div>

                <div className="">
                  <input class="rounded-full h-10 ml-10 px-5" style={{width: "300px"}} type="text" placeholder="search" onFocus="this.placeholder='search'"/>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <span class="material-icons h-10 w-10 mx-2" style={{ fontSize:40 }}>add_circle_outline</span>
                  <span class="material-icons h-10 w-10 mx-2" style={{ fontSize:40 }}>notifications_none</span>
                  <span class="material-icons h-10 w-10 mx-2" style={{ fontSize:40 }}>person_outline</span>
                  {/* Profile dropdown */}
                  <Menu as="div" className="mx-2 relative">
                    <div>
                      <Menu.Button className="flex text-sm">
                        <span class="material-icons h-10 w-10 mx-2" style={{ fontSize:40 }}>menu</span>
                      </Menu.Button>
                    </div>
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              캐릭터 변경
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              설정
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              로그아웃
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">

              </div>
            </Disclosure.Panel>
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