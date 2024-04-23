import React from "react";

import ChangFill from "../FillTable/ChangFill";

import "../../../css/style.css";

export default function CardChang(){
    let headerText;
    let TableComponent;

    if(window.location.href.includes('/tfn/chang')){
        headerText = "Tabel TFN Chang 1996";
        TableComponent = ChangFill;
    }else{
        headerText = "Terjadi Error";
    }

    return(
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                {headerText}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-2 sm:p-4">
                    {TableComponent && <TableComponent/>}
                </div>
            </div>
        </>
    )
}