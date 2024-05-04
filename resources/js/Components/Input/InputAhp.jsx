import React from "react";

export default function InputAhp({ criteria, criteriaInput }) {
    return (
        <>
            {criteria.map((crit, index) => (
                <tr key={index}>
                    <td className="text-wrap px-4 w-1/6 sm:px-4 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                        {crit.name}
                    </td>
                    {criteriaInput[crit.id].map((_criteria, idx) => (
                        <td
                            key={_criteria.id}
                            className=" w-1/6 align-middle border border-solid  text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold"
                        >
                            <input
                                id={_criteria.id}
                                name={_criteria.criteria.name}
                                readOnly={index == idx ? "readonly" : ""}
                                defaultValue={index == idx ? 1 : ""}
                                disabled={index > idx ? "disabled" : ""}
                                type="number"
                                className="input-number w-full border-none text-center disabled:bg-slate-200 "
                            />
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
}
