import React from "react";

export default function RankResultTable({ RankResult }) {
    const getRankColor = (result) => {
        if (result <= 1.5) {
            return "Tidak Rekomendasi";
        } else if (result <= 2.3) {
            return "Kurang Rekomendasi";
        } else if (result <= 3) {
            return "Rekomendasi";
        } else {
            return "Sangat Rekomendasi";
        }
    };

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6 sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            No
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                            Nama Alternatif
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            Hasil Nilai
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            Peringkat
                        </th>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {RankResult.map((rank, index) => (
                        <tr key={rank.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                                {++index}
                            </td>
                            <td className="w-2/3 px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold">
                                {rank.alternative.name}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold uppercase">
                                {rank.result}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold uppercase">
                                {rank.rank}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap font-semibold ">
                                {getRankColor(rank.result)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
