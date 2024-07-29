import { usePage } from "@inertiajs/react";
import React, { useCallback, useState } from "react";

import RankSelect from "../Select/RankSelect";

export default function RankInputTable({ onChange, Information, selectBoxId }) {
    const { rankInputs, criterias, alternatives } = usePage().props;

    const [formRankData, setFormRankData] = useState({});

    const handleSelectChange = useCallback(
        (id, value) => {
            setFormRankData((prevValue) => ({
                ...prevValue,
                [id]: value,
            }));
            onChange({ ...formRankData, [id]: value });
        },
        [formRankData, onChange]
    );

    const filteredAlternatives = alternatives.filter((alternative) =>
        selectBoxId.includes(alternative.id)
    );

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"></th>
                        {criterias.map((criteria) => (
                            <th
                                key={criteria.id}
                                className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700"
                            >
                                {criteria.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredAlternatives.map((alternative, index) => (
                        <tr key={alternative.id}>
                            <td className=" px-4 w-1/6 sm:px-4 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-start font-bold">
                                {alternative.name}
                            </td>

                            {rankInputs[alternative.id].map((rank) => (
                                <td
                                    key={rank.id}
                                    className=" w-1/6 align-middle border border-solid  text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold"
                                >
                                    <RankSelect
                                        alternativeName={rank.alternative.name}
                                        alternativeId={rank.id}
                                        onChange={(value) =>
                                            handleSelectChange(rank.id, value)
                                        }
                                        name={rank.alternative.name}
                                        criteriaId={rank.criteria_id}
                                        Information={Information}
                                        RankInputs={rankInputs}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
