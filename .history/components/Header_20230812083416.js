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
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              xml:space="preserve" width="150" height="80"
              className="h-[42px] fill-current"
              alt="隽敏的个人博客"
            >
            <image xlink:href="data:image/png;base64,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 OjMwOjMxKzAwOjAwqxHLIgAAAABJRU5ErkJggg==" width="150" height="80"/>
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
