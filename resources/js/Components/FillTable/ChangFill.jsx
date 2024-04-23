import { usePage } from "@inertiajs/react";
import React from "react";

export default function ChangFill() {
    const { changs } = usePage().props;

    console.log(changs);

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Intensitas Kepentingan
                        </th>
                        <th className="px-4 sm:px-6 text-wrap align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Himpunan Linguistik
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Triangular Fuzzy Number
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Reciprocal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {changs.map((chang, index) => (
                        <tr key={chang.id}>
                            
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                                {chang.importance}
                            </td>
                            <td className="px-4 sm:px-6 text-wrap align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold uppercase">
                                {chang.desc}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold uppercase">
                                {chang.tfn}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold uppercase">
                                {chang.reciprocal}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
