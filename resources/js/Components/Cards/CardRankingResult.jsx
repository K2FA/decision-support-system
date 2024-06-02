import React from "react";
import RankResultTable from "../FillTable/RankResultTable";
import { usePage } from "@inertiajs/react";

export default function CardRankingResult() {
    const { rank_results } = usePage().props;
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                {`Hasil Perangkingan  (${rank_results[0].goal_select.choice})`}
                            </h3>
                        </div>
                        <div className="relative ml-4 mt-4 sm:mr-8">
                            <button
                                as="button"
                                className="border-2 border-blueGray-700 rounded px-4 text-blueGray-700 font-semibold uppercase hover:bg-blueGray-700 hover:text-white"
                            >
                                Unduh
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-2 sm:p-4 ">
                    <RankResultTable RankResult={rank_results} />
                </div>
            </div>
        </>
    );
}
