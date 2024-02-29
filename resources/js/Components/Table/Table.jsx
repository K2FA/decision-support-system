import React from "react";

import CardTable from "../Cards/CardTables";

export default function Table({tableType}){
    // 
    return(
        <>
            <div className="flex flex-wrap mt-4 h-screen">
                <div className="w-full mb-12 px-4 ">
                    <CardTable tableType = {tableType}/>
                </div>
            </div>
        </>
    )
}