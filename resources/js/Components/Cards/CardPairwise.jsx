import { usePage } from "@inertiajs/react";
import React from "react";

export default function CardPairwise() {
    const { comparisons } = usePage().props;

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                Pairwise Matriks
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-2 sm:p-4 mb-4">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"></th>
                                {comparisons.map((comparison) => (
                                    <th
                                        key={comparison.id}
                                        className="text-wrap px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"
                                    >
                                        {comparison.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
