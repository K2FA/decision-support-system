import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function CardEditCriteria() {
    const [criteria, setCriteria] = useState("");

    const handleOnChange = (e) => {
        setCriteria(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = new URL(window.location).pathname.split("/")[3];

        router.put(`/table/criteria/${id}`, {
            name: criteria,
        });
    };

    return (
        <>
            <div className="flex flex-wrap mt-4 h-screen">
                <div className="w-full mb-12 px-4 ">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="block sm:flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 mt-4">
                                    <h3 className="font-extrabold text-xl text-black uppercase">
                                        Memperbaharui Data Kriteria
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto p-2 sm:px-8 sm:py-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <label
                                        htmlFor="goalName"
                                        className="text-blueGray-700 font-semibold mr-2 "
                                    >
                                        Nama Kriteria
                                    </label>
                                    <input
                                        type="text"
                                        onChange={handleOnChange}
                                        value={criteria}
                                        placeholder="Masukkan Nama Kriteria"
                                        className="input mt-2 input-bordered input-warning w-full bg-gray-200 text-gray-500  "
                                        id="goalName"
                                        name="goalName"
                                    />
                                </div>
                                <div className="w-full flex justify-center">
                                    <button className="btn bg-orange-400 hover:bg-warning text-white border border-warning mt-4 w-1/6">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
