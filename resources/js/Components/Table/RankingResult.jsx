import React from "react";

import CardRankingResult from "../Cards/CardRankingResult";

export default function RankingResult() {
    return (
        <>
            <div className="flex flex-wrap justify-center mt-4 mb-20">
                <div className="w-2/3 mb-12 px-4 h-screen">
                    <CardRankingResult />
                </div>
            </div>
        </>
    );
}
