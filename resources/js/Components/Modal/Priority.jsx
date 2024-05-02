import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Priority() {
    let [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
                Intensitas Kepentingan
            </button>

            {/* Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                    >
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
                                    <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg text-center font-medium leading-6 text-gray-900"
                                        >
                                            Intensitas Kepentingan
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <table className="items-center w-full bg-transparent border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                                                            Nilai Kepentingan
                                                        </th>
                                                        <th className="px-4 sm:px-6 sm:w-2/3 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                                                            Keterangan
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            1
                                                        </td>
                                                        <td className="px-4 w-16 text-wrap sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            Kedua elemen sama
                                                            pentingnya
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            3
                                                        </td>
                                                        <td className="px-4 text-wrap w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            Elemen yang satu
                                                            sedikit lebih
                                                            penting daripada
                                                            elemen yang lain
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            5
                                                        </td>
                                                        <td className="px-4 text-wrap w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            Elemen yang satu
                                                            lebih penting
                                                            daripada yang
                                                            lainnya
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            7
                                                        </td>
                                                        <td className="px-4 text-wrap w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            Satu elemen jelas
                                                            lebih mutlak penting
                                                            daripada elemen
                                                            lainnya
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            9
                                                        </td>
                                                        <td className="px-4 text-wrap w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            Satu elemen mutlak
                                                            penting daripada
                                                            elemen lainnya
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            2,4,6,8
                                                        </td>
                                                        <td className="px-4 text-wrap w-16 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                                                            Nilai-nilai antara
                                                            dua nilai
                                                            pertimbangan
                                                            pertimbangan yang
                                                            berdekatan
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

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
                {/* End of ModalModal */}
        </>
    );
}
