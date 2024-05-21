import { usePage } from "@inertiajs/react";
import React from "react";

export default function RankInputTable() {
    const { rankInputs, criterias, alternatives } = usePage().props;

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"></th>
                        {criterias.map((criteria) => (
                            <th
                                key={criteria.id}
                                className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"
                            >
                                {criteria.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {alternatives.map((alternative, index) => (
                        <tr key={index}>
                            <td className=" px-4 w-1/6 sm:px-4 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-start font-bold">
                                {alternative.name}
                            </td>

                            {rankInputs[alternative.id].map((rank) => (
                                <td
                                    key={rank.id}
                                    className=" w-1/6 align-middle border border-solid  text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold"
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
