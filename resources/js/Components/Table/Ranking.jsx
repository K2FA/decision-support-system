import React from "react";
import CardRankInput from "../Cards/CardRankInput";

export default function Ranking() {
    return (
        <>
            <div className="flex flex-wrap justify-center mt-4 mb-12">
                <div className="w-full mb-12 px-4 h-screen">
                    <CardRankInput />
                </div>
            </div>
        </>
    );
}
