import React, { useState, Fragment } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { usePage } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Information() {
    const { information } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
                Keterangan
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
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
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* Fill of Modal Box */}
                                    <div className="mt-2">
                                        <Tab.Group>
                                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                                {Object.values(information).map(
                                                    (infor, index) => (
                                                        <Tab
                                                            key={index}
                                                            className={({
                                                                selected,
                                                            }) =>
                                                                classNames(
                                                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                                                                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ",
                                                                    selected
                                                                        ? "bg-white text-blue-700 shadow"
                                                                        : "text-blueGray-500 hover:bg-white/[0.12] hover:text-white"
                                                                )
                                                            }
                                                        >
                                                            {
                                                                infor[0]
                                                                    .criteria
                                                                    .name
                                                            }
                                                        </Tab>
                                                    )
                                                )}
                                            </Tab.List>
                                            <Tab.Panels>
                                                {Object.keys(information).map(
                                                    (infoKey, index) => {
                                                        const filterInfo =
                                                            information[
                                                                infoKey
                                                            ] || [];
                                                        return (
                                                            <Tab.Panel
                                                                key={index}
                                                                className={classNames(
                                                                    "rounded-xl bg-white p-3",
                                                                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                                                                )}
                                                            >
                                                                <div className="mt-2 ">
                                                                    <table className="items-center w-full bg-transparent border-collapse">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="px-4 sm:px-6  sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                                                                                    No
                                                                                </th>
                                                                                <th className="px-4 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                                                                                    Sub
                                                                                    Kriteria
                                                                                </th>
                                                                                <th className="px-4 sm:px-6 sm:w-2/3 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                                                                                    Bobot
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {filterInfo.map(
                                                                                (
                                                                                    info,
                                                                                    idx
                                                                                ) => (
                                                                                    <tr
                                                                                        key={
                                                                                            idx
                                                                                        }
                                                                                    >
                                                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                                                            {
                                                                                                ++idx
                                                                                            }
                                                                                        </td>
                                                                                        <td className="px-4 w-16 text-wrap sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                                                            {
                                                                                                info.subcriteria
                                                                                            }
                                                                                        </td>
                                                                                        <td className="px-4 w-16 text-wrap sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                                                            {
                                                                                                info.weight
                                                                                            }
                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </Tab.Panel>
                                                        );
                                                    }
                                                )}
                                            </Tab.Panels>
                                        </Tab.Group>
                                    </div>
                                    {/* End of Modal Box fill */}

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
