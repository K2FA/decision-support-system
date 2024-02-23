import React from "react";

import CardTable from "../Cards/CardTables";

export default function Table(){
    return(
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                <CardTable />
                </div>
            </div>
        </>
    )
}