import { router } from "@inertiajs/react";
import { useState } from "react";

export default function CardAddAlternative() {
    const [alternative, setAlternative] = useState("");

    const handleOnChange = (e) => {
        setAlternative(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: alternative,
        };
        router.post("/table/alternative", data);
    };

    return (
        <div className="flex flex-wrap mt-4 h-screen">
            <div className="w-full mb-12 px-4 ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="block sm:flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 mt-4">
                                <h3 className="font-extrabold text-xl text-black uppercase">
                                    Menambahkan Data Alternatif
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto p-2 sm:px-8 sm:py-4">
                        <form onSubmit={handleOnSubmit}>
                            <div className="mt-4">
                                <label
                                    htmlFor="alternativeName"
                                    className="text-blueGray-700 font-semibold mr-2 "
                                >
                                    Nama Alternatif
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan Nama Alternatif"
                                    className="input mt-2 input-bordered input-warning w-full bg-gray-200 text-gray-500  "
                                    id="alternativeName"
                                    name="alternativeName"
                                    onChange={handleOnChange}
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
    );
}
