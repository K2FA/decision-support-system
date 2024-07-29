import { usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Checkbox({ onCheckboxChange }) {
    const { alternatives } = usePage().props;

    const [selectedAlternative, setSelectedAlternative] = useState([]);

    const handleCheckboxChange = (alternativeId) => {
        const updatedAlternatives = selectedAlternative.includes(alternativeId)
            ? selectedAlternative.filter((item) => item !== alternativeId)
            : [...selectedAlternative, alternativeId];

        setSelectedAlternative(updatedAlternatives);
        onCheckboxChange(updatedAlternatives);
    };

    return (
        <>
            {alternatives.map((alternative, index) => (
                <div
                    key={index}
                    className="flex items-center border-r border-black pe-1 gap-1"
                >
                    <input
                        type="checkbox"
                        name={alternative.name}
                        id={alternative.id}
                        value={alternative.name}
                        onChange={() => handleCheckboxChange(alternative.id)}
                    />
                    <label
                        htmlFor={alternative.id}
                        className="cursor-pointer text-sm text-blueGray-500"
                    >
                        {alternative.name}
                    </label>
                </div>
            ))}
        </>
    );
}
