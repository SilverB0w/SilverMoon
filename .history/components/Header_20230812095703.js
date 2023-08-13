import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import DarkModeButton from "/components/common/DarkModeButton";
import headerNavLinks from "/data/common/headerNavLinks";
import { IoMenu, IoLogoRss, IoPerson } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import ContactCard from "/components/common/ContactCard";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <div className="bg-color transition-all border-b border-neutral-200 dark:border-neutral-900 sticky h-max top-0 z-[39] ">
        <div className="relative flex justify-between items-center max-w-2xl mx-auto px-5 md:px-3 h-[60px] leading-[4px]">
          <Link
            href="/"
            title="隽敏的个人博客"
            alt="我的小小自留地"
            aria-label="隽敏的个人博客首页"
            className="ring-defau lt"
          >

          <div 
            className="header-text m-0 ml-10 flex">
            <span className="text-[21px] font-bold my-1">
            银月长廊
            </span>
          </div>  

          
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
              className="h-[42px] my-1"
              alt="隽敏的个人博客"
            >


         <g id="galaxy"><path d="M32 26a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM18.38 25.71A15.06 15.06 0 0 1 32 17a1 1 0 0 1 0 2 13 13 0 0 0-11.8 7.55 1 1 0 0 1-1.82-.84zM17 32v-1.13a1 1 0 0 1 2 .18V32a1 1 0 0 1-2 0zM32 47a1 1 0 0 1 0-2 13 13 0 0 0 13-13 1 1 0 0 1 2 0 15 15 0 0 1-15 15zM20.38 46.82a1 1 0 0 1-.86.49c-.9 0-5.64-4.51-7.06-11a1 1 0 0 1 2-.43 18 18 0 0 0 5 9c.6.58 1.42 1.12.92 1.94zM12 33.05v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0zM33 51a1 1 0 0 1-1 1 19.71 19.71 0 0 1-7.79-1.58 1 1 0 0 1-.46-1.42c.57-.84 1.36-.29 2.13 0 4.95 1.74 7.12.23 7.12 2zM50 32a17.3 17.3 0 0 0-.12-2.09 1 1 0 0 1 2-.24A19.07 19.07 0 0 1 52 32a1 1 0 0 1-2 0zM46.9 21.92a18 18 0 0 0-8.26-6.65 1 1 0 0 1 .74-1.86 20 20 0 0 1 9.18 7.39 1 1 0 0 1-1.66 1.12zM36.11 14.45c-.26 0-.27-.07-1.27-.23a1 1 0 0 1 .31-2c.4.06.79.13 1.17.22a1 1 0 0 1-.21 2.01zM13.08 15.66A24.94 24.94 0 0 1 28.9 7.2a1 1 0 0 1 .24 2A23 23 0 0 0 14.59 17a1 1 0 0 1-1.51-1.34zM7.33 28a24.68 24.68 0 0 1 3.6-9.41 1 1 0 0 1 1.38-.3c1.69 1.08-1.8 2.59-3 10A1 1 0 0 1 7.33 28zM7 32v-1a1 1 0 0 1 2 .08v.9A1 1 0 0 1 7 32z"/><path d="M42.32 31.05a2.85 2.85 0 0 1-1.41-4.35 1 1 0 0 0-1.12-1.53 2.87 2.87 0 0 1-3.7-2.7 1 1 0 0 0-1.8-.58 2.87 2.87 0 0 1-4.58 0 1 1 0 0 0-1.8.58 2.86 2.86 0 0 1-3.7 2.7 1 1 0 0 0-1.12 1.53 2.86 2.86 0 0 1-1.41 4.35 1 1 0 0 0 0 1.9 2.85 2.85 0 0 1 1.41 4.35 1 1 0 0 0 1.12 1.53 2.86 2.86 0 0 1 3.7 2.7 1 1 0 0 0 1.8.58 2.87 2.87 0 0 1 4.58 0 1 1 0 0 0 1.11.35c1.25-.4.08-1.91 1.87-3.21s2.85.28 3.63-.78-1.07-1.61-.37-3.7S43 33.35 43 32a1 1 0 0 0-.68-.95zm-3.82 5.67a4.93 4.93 0 0 0-4 2.92 5 5 0 0 0-5 0 4.91 4.91 0 0 0-4-2.92A4.89 4.89 0 0 0 24 32a4.89 4.89 0 0 0 1.53-4.72 4.93 4.93 0 0 0 4-2.92 5 5 0 0 0 5 0 4.93 4.93 0 0 0 4 2.92A4.89 4.89 0 0 0 40 32a4.89 4.89 0 0 0-1.5 4.72z"/><path class="cls-1" d="M40 32a4.89 4.89 0 0 1-1.53-4.72 4.93 4.93 0 0 1-4-2.92 5 5 0 0 1-5 0 4.93 4.93 0 0 1-4 2.92A4.89 4.89 0 0 1 24 32a4.89 4.89 0 0 1 1.53 4.72 4.93 4.93 0 0 1 4 2.92 5 5 0 0 1 5 0 4.91 4.91 0 0 1 4-2.92A4.89 4.89 0 0 1 40 32zm-8 6a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/><path d="M31.5 5A3.5 3.5 0 1 0 35 8.5 3.51 3.51 0 0 0 31.5 5zm0 5a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3z"/><path class="cls-1" d="M33 8.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0z"/><path d="M49.5 20a5.41 5.41 0 0 0-3.23 1.06A5.49 5.49 0 1 0 49.5 20zm0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/><circle class="cls-1" cx="49.5" cy="25.5" r="3.5"/><path d="M20.62 25.73A3.41 3.41 0 0 0 18.5 25a3.5 3.5 0 0 0-1.5 6.66 3.35 3.35 0 0 0 2 .3 3.49 3.49 0 0 0 1.62-6.23zM17 28.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0z"/><path class="cls-1" d="M20 28.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z"/><path d="M32 55a1 1 0 0 1 0-2h.92a1 1 0 0 1 .08 2zM45.48 50.63a23 23 0 0 1-9.42 4 1 1 0 0 1-1.16-.81c-.36-1.93 2.86-.48 8.6-4.27.71-.45 1.29-1.11 2-.51a2 2 0 0 0 .19.22 1 1 0 0 1-.21 1.37zM51 41a20.4 20.4 0 0 0 1.81-6 1 1 0 0 1 2 .28 22.61 22.61 0 0 1-2 6.58A1 1 0 0 1 51 41z"/><path d="M47.5 43a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5zm-2 6a2.5 2.5 0 1 1 4.5-1.5 2.5 2.5 0 0 1-4.46 1.55z"/><path class="cls-1" d="M50 47.5a2.5 2.5 0 1 1-2.5-2.5 2.51 2.51 0 0 1 2.5 2.5z"/><path d="M9 39a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 0 1 0-2 1 1 0 0 1 0 2z"/><path class="cls-1" d="M10 42a1 1 0 0 1-2 0 1 1 0 0 1 2 0z"/><path d="M45.5 8a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 45.5 8zm0 3a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1z"/><path class="cls-1" d="M46 10.5a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0z"/><path d="M22 44a4 4 0 1 0 3.89 4.93A4 4 0 0 0 22 44zm-1.62 2.82A2 2 0 0 1 23.76 49a2 2 0 1 1-3.38-2.18z"/><path class="cls-1" d="M24 48a2.08 2.08 0 0 1-.25 1 2 2 0 1 1 .25-1z"/><path d="M26 59a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z"/></g>
         </svg>

         
          </Link>

          <div className="flex items-center gap-2 rtl:flex-row-reverse">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                title={link.title}
                className={`btn-base hover:text-primary btn-md text-tertiary hidden sm:block`}
              >
                <span
                  className={`${
                    router.pathname == link.url
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            ))}

            {/* mobile */}

            <div className="sm:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="btn-base btn-icon" title="导航菜单">
                    <IoMenu className="text-3xl" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95 hidden"
                >
                  <Menu.Items className="absolute top-12 right-0 rtl:left-0 rtl:right-auto rounded-xl bg-color shadow-lg border border-neutral-200 dark:border-2 dark:border-neutral-800">
                    <div className="p-2 w-40 w-max-48 flex flex-col">
                      {headerNavLinks.map((link) => (
                        <Menu.Item key={link.title}>
                          {({ active }) => (
                            <Link
                              href={link.url}
                              className={` btn-base btn-md px-3 py-4 ${
                                active
                                  ? "ring-4 ring-offset-2 ring-offset-neutral-100 dark:ring-offset-black ring-blue-600"
                                  : ""
                              }`}
                            >
                              {link.title}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}

                      <hr className="my-1 mx-3 z-[-1]" />

                      <Menu.Item>
                        <div className="flex items-center justify-between btn-base btn-md active:ring-0 active:ring-offset-0">
                          <div className="flex justify-center relative btn-base btn-icon">
                            <IoPerson className="text-xl" />
                            <ContactCard />
                          </div>
                          <div className="flex justify-center">
                            <Link
                              href="https://mo3on.com//feed.xml"
                              target="blank"
                              className="btn-base btn-icon"
                            >
                              <IoLogoRss className="text-xl" />
                            </Link>
                          </div>
                          <div className="flex justify-center btn-base btn-icon text-xl">
                            <DarkModeButton />
                          </div>
                        </div>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
