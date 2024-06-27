import { React, useCallback } from "react";

import "../../../css/style.css";

export default function InputSelect({ criteriaName, criteriaId, onChange }) {
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
                    <option value="1" label="sama penting">
                        sama penting
                    </option>
                    <option value="2" label="nilai antara">
                        nilai antara
                    </option>
                    <option value="3" label="sedikit lebih penting">
                        sedikit lebih penting
                    </option>
                    <option value="4" label="nilai antara">
                        nilai antara
                    </option>
                    <option value="5" label="lebih penting">
                        lebih penting
                    </option>
                    <option value="6" label="nilai antara">
                        nilai antara
                    </option>
                    <option value="7" label="sangat penting">
                        sangat penting
                    </option>
                    <option value="8" label="nilai antara">
                        nilai antara
                    </option>
                    <option value="9" label="mutlak penting">
                        mutlak penting
                    </option>
                </optgroup>

                <optgroup label="Kebalikan">
                    <option label="nilai antara" value="0.5">
                        nilai antara
                    </option>
                    <option label="Sedikit Kurang Penting" value="0.333">
                        Sedikit Kurang Penting
                    </option>
                    <option label="nilai antara" value="0.25">
                        nilai antara
                    </option>
                    <option label="Kurang Penting" value="0.2">
                        Kurang Penting
                    </option>
                    <option label="nilai antara" value="0.167">
                        nilai antara
                    </option>
                    <option label="Tidak Penting" value="0.143">
                        Tidak Penting
                    </option>
                    <option label="nilai antara" value="0.125">
                        nilai antara
                    </option>
                    <option label="Tidak Penting Sekali" value="0.111">
                        Tidak Penting Sekali
                    </option>
                </optgroup>
            </select>
        </>
    );
}
