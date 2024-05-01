import React from "react";
import CalculationTable from "../Cards/CalculationTable";

export default function Calculation() {
    return (
        <>
            <div className="flex flex-wrap justify-center mt-4 ">
                <div className="w-3/4 mb-12 px-4 ">
                    <CalculationTable/>
                </div>
            </div>
        </>
    );
}
