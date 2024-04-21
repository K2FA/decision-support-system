import { usePage } from "@inertiajs/react";
import React from "react";

export default function NaturalTable({ criteriaId }) {
    const { naturals } = usePage().props;

    const filterNaturals = naturals.filter(
        (natural) => natural.criteria_id == criteriaId
    );

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
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Bobot
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filterNaturals.map((natural, index) => (
                        <tr key={natural.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                                {++index}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold">
                                {natural.subcriteria}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold uppercase">
                                {natural.weight}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
