import React from "react";

import InputAhp from "../Input/InputAhp";
import { usePage } from "@inertiajs/react";

import InputSelect from "../Select/InputSelect";

export default function CalculationInput() {
    const { criterias, criteria_input } = usePage().props;

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
                        criteria={criterias}
                        criteriaInput={criteria_input}
                    />
                </tbody>
            </table>
        </>
    );
}
