import React from "react";

export default function CardTable(){
    return(
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3
                            className="font-bold text-xl text-black "
                        >
                            Tujuan
                        </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 w-4 align-middle border border-solid py-3 text-base border-l-0 border-r border-slate-300 whitespace-nowrap font-semibold text-center ">
                                    No
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-base border-l-0 border-r border-slate-300 whitespace-nowrap font-semibold text-center ">
                                    Nama Tujuan
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r border-slate-300 whitespace-nowrap font-semibold text-center">
                                    
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r border-slate-300 whitespace-nowrap font-semibold text-center">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r border-slate-300 whitespace-nowrap text-center">1</td>
                                <td className="px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r border-slate-300 whitespace-nowrap text-left">contoh</td>
                                <td className="px-2 w-36 align-middle border border-solid  text-sm border-l-0 border-r border-slate-300 whitespace-nowrap text-white text-center">
                                    <button className="w-1/2 bg-green-700 rounded p-1">Edit</button>
                                </td>
                                <td className="px-2 w-36 align-middle border border-solid py-3 text-sm border-l-0 border-r border-slate-300 whitespace-nowrap text-white text-center">
                                    <button className="w-1/2 bg-red-500 rounded p-1">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}