import React, { useCallback } from "react";

export default function RankSelect({
    onChange,
    alternativeName,
    alternativeId,
    Information,
}) {
    const handleChange = useCallback(
        (e) => {
            onChange(e.target.value, alternativeId);
        },
        [onChange, alternativeId]
    );

    // console.log(Information);

    return (
        <>
            <select
                name={alternativeName}
                id={alternativeId}
                onChange={handleChange}
                className="select-input py-0 w-full shadow mb-4 border-none bg-blueGray-50 cursor-pointer"
            >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </>
    );
}
