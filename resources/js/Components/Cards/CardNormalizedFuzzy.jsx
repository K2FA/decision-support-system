import React from "react";
import { Link } from "@inertiajs/react";

import NormalizedFuzzy from "../FillTable/NormalizedFuzzy";

export default function CardNormalizedFuzzy() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-56 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                Tabel Hasil Vektor Normalisasi
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto p-2 sm:p-4 mb-4">
                    <NormalizedFuzzy />

                    <div className="w-full flex justify-center mt-8">
                        <Link
                            type="button"
                            href=""
                            className="bg-blueGray-600 px-4 py-2 text-white rounded hover:bg-blueGray-500"
                        >
                            Hasil
                            <i className="fa-solid fa-arrow-right pl-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
