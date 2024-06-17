import React, { useCallback, useEffect, useState } from "react";

export default function RankSelect({
    onChange,
    alternativeName,
    alternativeId,
    criteriaId,
    Information,
}) {
    const [option, setOption] = useState([]);

    const handleChange = useCallback(
        (e) => {
            const selectedValue = e.target.value;
            const selectedOption = option.find(
                (opt) => opt.value == selectedValue
            );

            if (selectedOption) {
                onChange(selectedOption, alternativeId);
            }
        },
        [onChange, option, alternativeId]
    );

    useEffect(() => {
        const filteredOptions = Information[criteriaId] || [];

        const formattedOptions = filteredOptions.map((opt) => ({
            value: opt.weight,
            label: opt.subcriteria,
        }));

        setOption(formattedOptions);
    }, [criteriaId, Information]);

    return (
        <>
            <select
                name={alternativeName}
                id={alternativeId}
                onChange={handleChange}
                className="select-input py-0 w-full shadow mb-4 border-none bg-blueGray-50 cursor-pointer"
            >
                <option value="">Pilih</option>
                {option.map((opsi, index) => (
                    <option key={index} value={opsi.value}>
                        {opsi.label}
                    </option>
                ))}
            </select>
        </>
    );
}
