import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

type Props = {
  opened: boolean
  openManageModal: Function;
};

const SettingCookieModal: React.FC<Props> = ({ opened, openManageModal }) => {
  let [isOpen, setIsOpen] = useState(true);
  const [cookies, setCookie] = useCookies(['policy']);

  useEffect(() => {
    setIsOpen(opened);
  }, []);

  function closeModal() {
    setIsOpen(false);
    openManageModal(true);
  }

  return (
    <>
      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#02344a] p-6 text-left align-middle shadow-xl transition-all w-[90%] sm:max-w-lg md:max-w-4xl">
              <h3 className="text-lg font-medium leading-6 text-white">
                This Websit uses Cookies
              </h3>
              <div className="mt-2">
                <p className="text-sm text-white">
                  We use cookes to ensure you get the best experience on our
                  website. To learn more about cookies please read our{" "}
                  <a target={"_blank"} href="/cookie-policy">
                    <span className="text-[#269eef]">Cookies Policy</span>.
                  </a>
                </p>
              </div>

              <div className="mt-4 float-right space-x-1 sm:space-x-11">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-[#259ae9] w-[170px] focus:outline-none"
                  onClick={closeModal}
                >
                  Manage preferences
                </button>
                <button
                  type="button"
                  onClick={()=> { setCookie('policy', true, { path: '/' }); closeModal();}}
                  className="inline-flex justify-center rounded-md bg-none px-4 py-2 text-sm font-medium w-[100px] sm:w-[170px] bg-[#2aa8ff] text-white focus:outline-none"
                >
                  Accept all
                </button>
              </div>
            </div>
          </Transition.Child>
        </Transition>
      )}
    </>
  );
};

export default SettingCookieModal;
