import { usePage } from "@inertiajs/react";
import React from "react";

export default function HoneyTable({ criteriaId }) {
    const { honeys } = usePage().props;

    // const filterHoney = honeys.filter(
    //     (honey) => honey.criteria_id == criteriaId
    // );

    const filterHoney = honeys[criteriaId] || [];

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
                    {filterHoney.map((honey, index) => (
                        <tr key={honey.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                                {++index}
                            </td>
                            <td className="w-2/3 px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold">
                                {honey.subcriteria}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold uppercase">
                                {honey.weight}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
