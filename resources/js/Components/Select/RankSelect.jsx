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
            // const selectedValue = e.target.value;
            const selectedIndex = e.target.selectedIndex;
            const selectedOption = e.target.options[selectedIndex];

            // const selectedOption = options.find(
            //     (opt) => opt.value == selectedValue
            // );

            if (selectedOption) {
                const { value, label } = selectedOption;
                onChange({ value, label }, alternativeId);
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
                <option
                    value=""
                    className="font-bold bg-gray-300"
                    disabled
                    selected
                >
                    Pilih
                </option>
                {option.map((opsi, index) => (
                    <option key={index} value={opsi.value} label={opsi.label}>
                        {opsi.label}
                    </option>
                ))}
            </select>
        </>
    );
}
