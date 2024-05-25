import React from "react";

export default function CardRankingResult() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                Hasil Perangkingan
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
