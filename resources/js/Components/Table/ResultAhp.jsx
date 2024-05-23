import React from "react";

import CardConsistencyRatio from "../Cards/CardConsistencyRatio";

export default function ResultAhp() {
    return (
        <>
            <div className="flex flex-wrap justify-center mt-4 ">
                <div className="w-10/11 mb-12 px-4 ">
                    <CardConsistencyRatio />
                </div>
            </div>
        </>
    );
}
