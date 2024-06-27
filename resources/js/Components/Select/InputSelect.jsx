import { React, useCallback } from "react";

import "../../../css/style.css";
import { usePage } from "@inertiajs/react";

export default function InputSelect({ criteriaName, criteriaId, onChange }) {
    const { priority } = usePage().props;

    const handleChange = useCallback(
        (event) => {
            const selectedIndex = event.target.selectedIndex;
            const selectedOption = event.target.options[selectedIndex];

            if (selectedOption) {
                const { value, label } = selectedOption;
                onChange({ value, label }, criteriaId);
            }
        },
        [onChange, criteriaId]
    );

    return (
        <>
            <select
                name={criteriaName}
                id={criteriaId}
                onChange={handleChange}
                className="input-select w-full shadow bg-blueGray-50 border-none cursor-pointer"
            >
                <option value="" className="font-bold">
                    Pilih
                </option>
                <optgroup label="Utama">
                    {priority.map((prt, index) =>
                        prt.value >= 1 ? (
                            <option key={index} value={prt.value}>
                                {prt.label}
                            </option>
                        ) : null
                    )}
                </optgroup>
                <optgroup label="Kebalikan">
                    {priority.map((prio, idx) =>
                        prio.value < 1 ? (
                            <option key={idx} value={prio.value}>
                                {prio.label}
                            </option>
                        ) : null
                    )}
                </optgroup>
            </select>
        </>
    );
}
