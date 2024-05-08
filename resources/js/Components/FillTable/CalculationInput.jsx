import React, { useCallback, useState } from "react";

import { usePage } from "@inertiajs/react";

import InputAhp from "../Input/InputAhp";

export default function CalculationInput({ name, onChange }) {
    const { criterias, criteria_input } = usePage().props;

    const [formData, setFormData] = useState({});

    const handleInputChange = useCallback((data) => {
        setFormData(data);
        onChange(data);
    }, []);
    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"></th>
                        {criterias.map((criteria) => (
                            <th
                                key={criteria.id}
                                className="text-wrap px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"
                            >
                                {criteria.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <InputAhp
                        name={name}
                        criteria={criterias}
                        criteriaInput={criteria_input}
                        onChange={handleInputChange}
                    />
                </tbody>
            </table>
        </>
    );
}
