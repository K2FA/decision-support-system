import { usePage, router } from "@inertiajs/react";
import React from "react";

export default function HasilPeringkatTable() {
    const { final_rank } = usePage().props;

    const rank = final_rank.data;

    const handlePageChange = (url) => {
        router.visit(url);
    };

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
                                {index +
                                    1 +
                                    (final_rank.current_page - 1) *
                                        final_rank.per_page}
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
            <div className="w-24 mt-4 flex justify-between h-8 shadow-lg">
                <button
                    as="btn"
                    className={`border border-blueGray-400 px-4 rounded  ${
                        final_rank.prev_page_url
                            ? "bg-white text-blueGray-500 hover:bg-orange-400 hover:text-white"
                            : "bg-gray-300 text-gray-500"
                    } `}
                    disabled={!final_rank.prev_page_url}
                    onClick={() => handlePageChange(final_rank.prev_page_url)}
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="pt-1 border px-4 h-full bg-orange-400 text-white border-blueGray-400 ">
                    {final_rank.current_page}
                </span>
                <button
                    as="btn"
                    className={`border border-blueGray-400 px-4 rounded  ${
                        final_rank.next_page_url
                            ? "bg-white text-blueGray-500 hover:bg-orange-400 hover:text-white"
                            : "bg-gray-300 text-gray-500"
                    } `}
                    disabled={!final_rank.next_page_url}
                    onClick={() => handlePageChange(final_rank.next_page_url)}
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </>
    );
}
