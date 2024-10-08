import React, { useCallback, useState } from "react";
import InputSelect from "../Select/InputSelect";

export default function InputAhp({ criteria, criteriaInput, onChange, name }) {
    const [selectedValues, setSelectedValues] = useState({});

    const handleSelectChange = useCallback(
        (id, value) => {
            setSelectedValues((prevValues) => ({
                ...prevValues,
                [id]: value,
            }));
            onChange({ ...selectedValues, [id]: value });
        },
        [selectedValues, onChange]
    );

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
                            {index == idx || index > idx ? (
                                <>
                                    <input
                                        id={_criteria.id}
                                        name={_criteria.criteria.name}
                                        value={
                                            index === idx ? "sama penting" : ""
                                        }
                                        readOnly={index === idx}
                                        disabled={index > idx}
                                        type="text"
                                        className="input-number w-full border-none text-center disabled:bg-slate-200"
                                    />
                                </>
                            ) : (
                                <>
                                    <InputSelect
                                        criteriaName={_criteria.criteria.name}
                                        criteriaId={_criteria.id}
                                        onChange={(value) =>
                                            handleSelectChange(
                                                _criteria.id,
                                                value
                                            )
                                        }
                                        name={_criteria.criteria.name}
                                    />
                                </>
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
}
