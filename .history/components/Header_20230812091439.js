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
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
              className="h-[42px] fill-current"
              alt="隽敏的个人博客"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="solar system"><path d="m9.8 12.67-1 .19a1 1 0 0 0-.76.68 1 1 0 0 0 .23 1l.69.71a1.07 1.07 0 0 1 0 1.5l-.69.71a1 1 0 0 0-.23 1 1 1 0 0 0 .76.68l1 .19a1.16 1.16 0 0 1 1 1.24l-.12.95a1 1 0 0 0 .4.92 1 1 0 0 0 1 .12l.92-.4a1.32 1.32 0 0 1 1.65.49l.5.84a1 1 0 0 0 1.72 0l.5-.84a1.32 1.32 0 0 1 1.63-.49l.92.4a1 1 0 0 0 1-.12 1 1 0 0 0 .4-.92l-.12-.95a1.16 1.16 0 0 1 1-1.24l1-.19a1 1 0 0 0 .76-.68 1 1 0 0 0-.23-1l-.73-.71a1.07 1.07 0 0 1 0-1.5l.69-.71a1 1 0 0 0 .23-1 1 1 0 0 0-.76-.68l-1-.19a1.16 1.16 0 0 1-1-1.24l.12-.95a1 1 0 0 0-.4-.92 1 1 0 0 0-1-.12l-.92.4a1.32 1.32 0 0 1-1.65-.49l-.5-.84a1 1 0 0 0-1.72 0l-.5.84a1.32 1.32 0 0 1-1.59.49l-.92-.4a1 1 0 0 0-1 .12 1 1 0 0 0-.4.92l.12.95a1.16 1.16 0 0 1-1 1.24zm1 1.77a3.21 3.21 0 0 0 1.94-2.57 3.33 3.33 0 0 0 3.21-1 3.33 3.33 0 0 0 3.21 1 3.21 3.21 0 0 0 1.94 2.57 3.06 3.06 0 0 0 0 3.12 3.21 3.21 0 0 0-1.94 2.57 3.31 3.31 0 0 0-3.21 1A3.3 3.3 0 0 0 13.54 20a3.2 3.2 0 0 0-.75.09 3.21 3.21 0 0 0-1.94-2.57 3.06 3.06 0 0 0 0-3.08z"/><path d="M28.05 23.12A14 14 0 0 0 11.69 2.68a1 1 0 0 0 .62 1.9A11.81 11.81 0 0 1 16 4a12 12 0 0 1 10.32 18.11 3.47 3.47 0 0 0-4.21 4.21A12 12 0 0 1 5.68 9.89a3.18 3.18 0 0 0 .82.11A3.53 3.53 0 1 0 4 8.88 14 14 0 0 0 23.54 27.8a1 1 0 0 0 .18-.18.32.32 0 0 0 .09 0 1 1 0 0 0 .38-1.36 1.5 1.5 0 1 1 2 .58 1 1 0 0 0-.38 1.36 1 1 0 0 0 .87.51 1.07 1.07 0 0 0 .49-.12 3.52 3.52 0 0 0 1.35-4.77 3.82 3.82 0 0 0-.47-.7zM6.5 5A1.5 1.5 0 1 1 5 6.5 1.5 1.5 0 0 1 6.5 5z"/><path d="M20 7a1 1 0 0 0-1-1 1 1 0 1 0 1 1zM13 24a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></g></svg></svg>

       
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
