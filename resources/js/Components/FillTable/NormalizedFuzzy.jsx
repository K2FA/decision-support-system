import { usePage } from "@inertiajs/react";
import React from "react";

export default function NormalizedFuzzy() {
    const { criterias, normalization_fuzzy } = usePage().props;

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6  sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"></th>
                        {criterias.map((criteria) => (
                            <th
                                key={criteria.id}
                                className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700"
                            >
                                {criteria.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-center">
                            W
                        </td>
                        {normalization_fuzzy.map((weight, index) => (
                            <td
                                key={index}
                                className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-left"
                            >
                                {weight.normalized}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );
}
