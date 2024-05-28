import { usePage } from "@inertiajs/react";
import React from "react";

export default function HasilPeringkatTable() {
    const { final_rank } = usePage().props;

    const rank = final_rank.data;

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6  sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            No
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Nama Alternatif
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Nilai
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Peringkat
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Tujuan
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            User
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rank.map((finalRank, index) => (
                        <tr key={finalRank.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-center">
                                {++index}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-left">
                                {finalRank.alternative.name}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-left">
                                {finalRank.result}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-left">
                                {finalRank.rank}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-left">
                                {finalRank.goal_select.choice}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 font-semibold whitespace-nowrap text-left">
                                {finalRank.comparison_input.user.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
