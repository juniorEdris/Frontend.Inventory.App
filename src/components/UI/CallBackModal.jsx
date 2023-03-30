import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import SpinLoader from "./SpinLoader";

const CallBackModal = ({
  isOpen = false,
  loading = false,
  closeModal = () => {},
  handleSubmit = () => {},
  modalTitle = "",
  buttonTitle = "submit",
  btnClasses = "",
  fluid=false,
  titleClasses = "text-lg font-medium leading-6 text-gray-900",
  children,
}) => {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className={`w-full ${fluid ? "max-w-2xl": "max-w-md"} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                  <Dialog.Title as="h3" className={`${titleClasses}`}>
                    {modalTitle}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className={btnClasses}
                      onClick={handleSubmit}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="capitalize">{buttonTitle}</span>
                        {loading ? (
                          <SpinLoader customClasses="h-6 w-6" />
                        ) : null}
                      </div>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CallBackModal;
