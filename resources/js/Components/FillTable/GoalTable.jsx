import { usePage } from "@inertiajs/react";
import React from "react";

export default function GoalTable(){
    const { goals } = usePage().props

    return(
        <table className="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th className="px-4 sm:px-6  sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                        No
                    </th>
                    <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                        Nama Tujuan
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center">
                        
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                {goals.map((goal, index) => (
                <tr key={goal.id}>
                    <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-center text-blueGray-500 font-semibold">{++index}</td>
                    <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-left text-blueGray-500 font-semibold">{goal.name}</td>
                    <td className="px-2 sm:w-36 align-middle border border-solid  text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                        <button className="sm:w-1/2 bg-green-700 hover:bg-green-500 rounded p-1">Edit</button>
                    </td>
                    <td className="px-2 w-36 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                        <button className="sm:w-1/2 bg-red-500 hover:bg-red-700 rounded p-1">Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}