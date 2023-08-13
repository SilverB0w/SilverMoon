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
        <div className="relative flex justify-between items-center max-w-2xl mx-auto px-5 md:px-3 h-[60px]">
          <Link
            href="/"
            title="隽敏的个人博客"
            alt="我的小小自留地"
            aria-label="隽敏的个人博客首页"
            className="ring-defau lt"
          >

            <svg
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              className="h-[42px] fill-current"
              alt="隽敏的个人博客"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,9.791,4.317a9.967,9.967,0,0,0,5.032,15.159A7.947,7.947,0,0,1,12,20Z"/></svg>

       
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
