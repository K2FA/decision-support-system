import { React, useCallback } from "react";

export default function InputSelect({ criteriaName, criteriaId, onChange }) {
    const handleChange = useCallback(
        (event) => {
            onChange(event.target.value, criteriaId);
        },
        [onChange, criteriaId]
    );

    return (
        <>
            <select
                name={criteriaName}
                id={criteriaId}
                onChange={handleChange}
                className="select-input py-0 w-full shadow mb-4 border-none bg-blueGray-50 cursor-pointer"
            >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="0.50">0.50</option>
                <option value="0.333">0.33</option>
                <option value="0.25">0.25</option>
                <option value="0.20">0.20</option>
                <option value="0.17">0.17</option>
                <option value="0.14">0.14</option>
                <option value="0.13">0.13</option>
                <option value="0.11">0.11</option>
            </select>
        </>
    );
}
