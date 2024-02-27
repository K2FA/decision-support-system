import React from "react";

export default function CardForm(){
    return(
        <>
        <div className="flex flex-wrap mt-4 h-screen">
            <div className="w-full mb-12 px-4 ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="block sm:flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 mt-4">
                                <h3 className="font-extrabold text-xl text-black uppercase">
                                    Tambahkan Data 
                                </h3>
                            </div>
                            
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto p-2 sm:px-8 sm:py-4">
                        <form action="" className="flex flex-col">
                            <label htmlFor="tujuan" className="text-blueGray-700 font-semibold mr-2 mb-2">Nama Tujuan : </label>
                            <input type="text" placeholder="Masukkan Nama Tujuan" className="input input-bordered input-warning w-full bg-gray-200 text-gray-500  " id="tujuan" name="tujuan"/>
                            <div className="w-full flex justify-center">
                                <button className="btn bg-orange-400 hover:bg-warning text-white border border-warning mt-4 w-1/6">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}