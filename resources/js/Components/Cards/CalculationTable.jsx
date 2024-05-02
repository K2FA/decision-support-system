import React from "react";


import CalculationInput from "../FillTable/CalculationInput";
import Priority from "../Modal/Priority";

export default function CalculationTable() {
    
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                Tabel Perbandingan Berpasangan
                            </h3>
                        </div>
                        <div className="relative ml-4 mt-4 sm:mr-8">
                            <Priority/>
                        </div>
                    </div>
                </div>

                

                <div className="block w-full overflow-x-auto p-2 sm:p-4 mb-4">
                    <CalculationInput />
                    <div className="w-full flex justify-center">
                        <button className="btn-process sm:w-32 rounded p-2 mt-8 text-white shadow-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
