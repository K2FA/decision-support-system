import { usePage, Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function CardConsistencyRatio() {
    const { consistency_ratio, flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                Konsistensi Rasio (CR)
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-2 sm:p-4 mb-4">
                    <div className="text-center">
                        <p className="text-blueGray-600 text-xl font-semibold mb-2 border border-solid border-black rounded">
                            {consistency_ratio[0].result} &lt; 0,1
                        </p>

                        {consistency_ratio[0].result < 0.1 ? (
                            <span className="text-green-500 font-medium">
                                Nilai sudah konsisten!
                            </span>
                        ) : (
                            <span className="text-red-400 font-medium">
                                Nilai belum konsisten!
                            </span>
                        )}
                    </div>
                    {consistency_ratio[0].result < 0.1 ? (
                        <div className="flex w-full justify-center mt-4">
                            <Link
                                href="/user/rangking"
                                className="bg-blueGray-600 py-2 px-4 text-white rounded hover:bg-blueGray-400"
                            >
                                Lanjutkan
                                <i className="fa-solid fa-arrow-right pl-2"></i>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex w-full justify-center mt-8">
                            <Link
                                href="/user/pilih-tujuan"
                                as="button"
                                className="bg-red-600 py-2 px-4 text-white rounded hover:bg-red-400"
                            >
                                <i className="fa-solid fa-arrow-left pr-2"></i>
                                Kembali
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
