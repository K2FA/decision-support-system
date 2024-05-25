import React from "react";

import CardRankingResult from "../Cards/CardRankingResult";

export default function RankingResult() {
    return (
        <>
            <div className="flex flex-wrap justify-center mt-4 mb-12">
                <div className="w-full mb-12 px-4 ">
                    <CardRankingResult />
                </div>
            </div>
        </>
    );
}
