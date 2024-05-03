import React from "react";

export default function InputAhp({ criteria }) {
    console.log(criteria);
    return (
        <>
            {criteria.map((crit) => (
                <tr>
                    <td className="text-wrap px-4 w-1/6 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base text-blueGray-700 border-slate-300 whitespace-nowrap text-center font-bold">
                        {crit.name}
                    </td>
                    <td className="px-4 w-1/6 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                        <input
                            type="number"
                            className="input-number w-full border-none text-center "
                        />
                    </td>
                    <td className="px-4 w-1/6 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                        <input
                            type="number"
                            className="input-number w-full border-none text-center "
                        />
                    </td>
                    <td className="px-4 w-1/6 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                        <input
                            type="number"
                            className="input-number w-full border-none text-center "
                        />
                    </td>
                    <td className="px-4 w-1/6 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                        <input
                            type="number"
                            className="input-number w-full border-none text-center "
                        />
                    </td>
                    <td className="px-4 w-1/6 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                        <input
                            type="number"
                            className="input-number w-full border-none text-center "
                        />
                    </td>
                </tr>
            ))}
        </>
    );
}
