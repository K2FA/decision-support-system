import React from "react";

export default function GoalTable(){
    return(
        <table className="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th className="px-6 w-4 align-middle border border-solid py-3 text-base  border-slate-300 whitespace-nowrap font-semibold text-center ">
                        No
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-base  border-slate-300 whitespace-nowrap font-semibold text-left ">
                        Nama Tujuan
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center">
                        
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-center">1</td>
                    <td className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-left">contoh</td>
                    <td className="px-2 w-36 align-middle border border-solid  text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                        <button className="w-1/2 bg-green-700 rounded p-1">Edit</button>
                    </td>
                    <td className="px-2 w-36 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                        <button className="w-1/2 bg-red-500 rounded p-1">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}