import React from "react";
import CardHasilPeringkat from "../Cards/CardHasilPeringkat";

export default function HasilPeringkat() {
    return (
        <>
            <div className="flex flex-wrap mt-4 h-screen">
                <div className="w-full mb-12 px-4 ">
                    <CardHasilPeringkat />
                </div>
            </div>
        </>
    );
}
