import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

export default function GoalTable(){
    const { goals,flash } = usePage().props
    const {delete: destroy} = useForm({});

    useEffect(()=>{
        if(flash.message){
            toast.success(flash.message);
        }
    },[flash.message]);
    
    const handleDeleteBtn = (id) => {
        destroy(`/goal/${id}`,{
            onSuccess: () => {
                toast.success(flash.message)
            }
        });
    }

    return(
        <>
            
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6 sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
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
                    {goals.length !== 0 ?
                        (goals.map((goal, index) => (
                        <tr key={goal.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-center text-blueGray-500 font-semibold">{++index}</td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-left text-blueGray-500 font-semibold">{goal.name}</td>
                            <td className="px-2 sm:w-36 align-middle border border-solid  text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                                <button className="sm:w-2/3 bg-green-700 hover:bg-green-500 rounded p-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                            </td>
                            <td className="px-2 w-36 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                                <Link className="sm:w-2/3 bg-red-500 hover:bg-red-700 rounded p-1" as="button" onClick={()=> handleDeleteBtn(goal.id)}><i className="fa-solid fa-trash mr-1 text-xs"></i>Delete</Link>
                            </td>
                        </tr>
                        ))):(
                        <tr>
                            <td colSpan={4} className=" text-center pt-4 text-gray-300">Tidak Ada Data</td>
                        </tr>
                    )}
                </tbody>
            </table>

            
        </>
    )
}