import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AlternativeTable(){
    const {alternatives,flash} = usePage().props;
    const {delete:destroy} = useForm({});

    useEffect(()=>{
        if(flash.message){
            toast.success(flash.message);
        }
    },[flash.message]);

    const handleDeleteBtn = (id) =>{
        destroy(`/alternative/${id}`,{
            onSuccess: () => {
                toast.success(flash.message);
            }
        })
    }

    return(
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
                        Kode Alternatif
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center">
                        
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                {alternatives.length !==0 ? 
                (alternatives.map((alternative, index)=>(
                    <tr key={alternative.id}>
                        <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-center">{++index}</td>
                        <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-left">{alternative.name}</td>
                        <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-left uppercase">{alternative.code}</td>
                        <td className="px-2 sm:w-36 align-middle border border-solid  text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                            <button className="sm:w-1/2 bg-green-700 hover:bg-green-500 rounded p-1">Edit</button>
                        </td>
                        <td className="px-2 w-36 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                            <Link className="sm:w-2/3 bg-red-500 hover:bg-red-700 rounded p-1" onClick={() => handleDeleteBtn(alternative.id)} as="button"><i className="fa-solid fa-trash mr-1 text-xs"></i> Delete</Link>
                        </td>
                    </tr>
                ))):(
                    <tr>
                        <td colSpan={5} className=" text-center pt-4 text-gray-300">Tidak Ada Data</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    )
}