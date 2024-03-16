import React from "react";
import { Link } from "@inertiajs/react";

import GoalTable from "../FillTable/GoalTable";
import AlternativeTable from "../FillTable/AlternativeTable";
import CriteriaTable from "../FillTable/CriteriaTable";

import "../../../css/style.css";

export default function CardTable({tableType}){
    let headerText;
    let TableComponent;
    let link;

    if(tableType === "GoalTable" ){
        headerText = 'Tujuan';
        TableComponent = GoalTable;
        link = '/table/goal/create';
    }else if(tableType === "AlternativeTable" ){
        headerText = "Alternatif";
        TableComponent = AlternativeTable;
        link = '/table/alternative/create';
    }else if(tableType === "CriteriaTable"){
        headerText = "Kriteria";
        TableComponent = CriteriaTable;
        link = '/table/criteria/create';
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
                        <div className="relative ml-4 mt-4 sm:mr-8">
                            <Link className="bg-blueGray-500 py-2 px-4 text-white rounded text-sm hover:bg-blueGray-700" href={link}><i className="fa-solid fa-plus mr-2 text-xs"></i>Add</Link>
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