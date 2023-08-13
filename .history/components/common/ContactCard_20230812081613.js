import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";
import Image from "next/image";
// 个人联系方式的弹窗

export default function MyModal() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (<>
    <button
      type="button"
      onClick={openModal}
      className="w-full h-full absolute bg-transparent inset-0 ring-default"
      aria-label="联系方式"
      title="联系方式"
    >
    </button>

  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-20 dark:bg-opacity-80 z-50" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto z-[51] ">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-64 sm:w-72  max-w-md transform overflow-hidden rounded-xl bg-color dark:border dark:border-neutral-800 p-6 text-center text-lg sm:text-[22px] shadow-xl transition-all">
              <div className="flex flex-col gap-3">
                <div className={`relative flex w-full aspect-square rounded-md select-none h-full max-h-[35vh] img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
                  <Image
                    // 图片
                    src="吧吧"
                    alt="@SVM_JM"
                    className=" rounded-md"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(true)}
                    // fill
                    // sizes="100vw"
                    width={240}
                    height={240}
                     />
                </div>
                <Dialog.Title
                  as="h3"
                  className="font-semibold leading-relaxed"
                >
                  <span className="hidden sm:block">呀呼!<a href="https://t.me/Jmo3on" target="_blank">认识一下</a>吧</span>
                  <span className="sm:hidden">呀呼!<a href="https://t.me/Jmo3on" target="_blank">认识一下</a>吧</span>
                </Dialog.Title>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
</>)
}