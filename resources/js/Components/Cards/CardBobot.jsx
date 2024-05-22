import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

import NaturalTable from "../FillTable/NaturalTable";
import FullWashTable from "../FillTable/FullWashTable";
import HoneyTable from "../FillTable/HoneyTable";

export default function CardBobot() {
    const { naturals, full_washes, honeys } = usePage().props;
    const [criteriaMap, setCriteriaMap] = useState({});

    useEffect(() => {
        const tempCriteriaMap = {};

        const grouping = (group) => {
            Object.values(group).forEach((items) => {
                items.forEach((item) => {
                    tempCriteriaMap[item.criteria_id] = item.criteria.name;
                });
            });
        };

        grouping(naturals);
        grouping(full_washes);
        grouping(honeys);

        setCriteriaMap(tempCriteriaMap);
    }, [naturals, full_washes, honeys]);

    const TableComponent = ({ criteriaId }) => {
        if (window.location.href.includes("/bobot/natural")) {
            return <NaturalTable criteriaId={criteriaId} />;
        } else if (window.location.href.includes("/bobot/full-wash")) {
            return <FullWashTable criteriaId={criteriaId} />;
        } else if (window.location.href.includes("/bobot/honey")) {
            return <HoneyTable criteriaId={criteriaId} />;
        }
        return null;
    };

    return (
        <>
            {Object.keys(criteriaMap).map((criteriaId) => (
                <div
                    key={criteriaId}
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
                >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="block sm:flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="table-title font-bold text-2xl text-black uppercase pt-2">
                                    {criteriaMap[criteriaId]}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto p-2 sm:p-4 ">
                        <TableComponent criteriaId={criteriaId} />
                    </div>
                </div>
            ))}
        </>
    );
}
