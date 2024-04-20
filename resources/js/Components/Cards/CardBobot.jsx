import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

import NaturalTable from "../FillTable/NaturalTable";
import FullWashTable from "../FillTable/FullWashTable";
import HoneyTable from "../FillTable/HoneyTable";
import CriteriaTable from "../FillTable/CriteriaTable";

export default function CardBobot() {
    let  TableComponent;

    const { naturals,full_washes, honeys} = usePage().props;
    const [criteriaMap, setCriteriaMap] = useState({});


    useEffect(() => {
        const tempCriteriaMap = {};
        naturals.forEach(criterion => {
            tempCriteriaMap[criterion.criteria.id] = criterion.criteria.name;
        });
        full_washes.forEach(criterion => {
            tempCriteriaMap[criterion.criteria.id] = criterion.criteria.name;
        });
        honeys.forEach(criterion => {
            tempCriteriaMap[criterion.criteria.id] = criterion.criteria.name;
        });
        setCriteriaMap(tempCriteriaMap);
    }, [naturals, full_washes, honeys]);

    // useEffect(() => {
    //     const tempCriteriaMap = {};
    //     weights.forEach(weight => {
    //         if(weight.natural && weight.natural.criteria){
    //             tempCriteriaMap[weight.natural.criteria.id] = weight.natural.criteria.name;
    //         }else if(weight.fullwash && weight.fullwash.criteria){
    //             tempCriteriaMap[weight.fullwash.criteria.id] = weight.fullwash.criteria.name;
    //         }else if(weight.honey && weight.honey.criteria){
    //             tempCriteriaMap[weight.honey.criteria.id] = weight.honey.criteria.name;
    //         }
    //     });
    //     setCriteriaMap(tempCriteriaMap);
    // },[weights]);

    if(window.location.href.includes('/bobot/natural')!== -1){
         TableComponent = NaturalTable;
    }else if(window.location.href.includes('/bobot/full-wash')!== -1){
        TableComponent = FullWashTable;
    }else if(window.location.href.includes('/bobot/honey')!== -1){
        TableComponent = HoneyTable;
    }    

    return (
        <>
            {Object.keys(criteriaMap).map(index =>(
                <div key={index} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold text-2xl text-black uppercase pt-2">
                                {criteriaMap[index]}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-2 sm:p-4 ">

                    {TableComponent && <TableComponent/>}
                </div>
            </div>
            ))}
            
        </>
    );
}
