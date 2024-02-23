import React from "react";

export default function CardTable(){
    return(
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3
                            className="font-semibold text-lg text-black "
                        >
                            Card Tables
                        </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    No
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Nama Tujuan
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}