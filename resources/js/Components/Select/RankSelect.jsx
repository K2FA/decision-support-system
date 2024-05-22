import React from "react";

export default function RankSelect() {
    return (
        <>
            <select
                name=""
                id=""
                className="select-input py-0 w-full shadow mb-4 border-none bg-blueGray-50 cursor-pointer"
            >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
            </select>
        </>
    );
}
