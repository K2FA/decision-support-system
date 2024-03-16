import React from "react";

import CardBobot from "../Cards/CardBobot";

export default function BobotTable({tableType}) {
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4 "><CardBobot tableType = {tableType}/></div>
            </div>
        </>
    );
}
