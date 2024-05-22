import { usePage } from "@inertiajs/react";
import React from "react";

export default function FullWashTable({ criteriaId }) {
    const { full_washes } = usePage().props;

    // const filterFullWash = full_washes.filter(
    //     (fullWash) => fullWash.criteria_id == criteriaId
    // );

    const filterFullWash = full_washes[criteriaId] || [];

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6  sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            No
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Sub Kriteria
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            Bobot
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filterFullWash.map((fullwash, index) => (
                        <tr key={fullwash.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                                {++index}
                            </td>
                            <td className="w-2/3 px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold">
                                {fullwash.subcriteria}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold uppercase">
                                {fullwash.weight}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
