import React, { useEffect } from "react";

import CalculationInput from "../FillTable/CalculationInput";
import Priority from "../Modal/Priority";
import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

export default function CalculationTable() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm();

    useEffect(() => {
        if (flash.failed) {
            toast.error(flash.failed);
        }
    }, [flash.failed]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const goalName = new URL(window.location).searchParams.get("goal");

        post(`/user/perhitungan?goal=${goalName}`, {
            onError: () => {
                toast.error(flash.failed);
            },
        });
    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="block sm:flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="table-title font-bold tracking-widest text-2xl text-black uppercase pt-2">
                                Tabel Perbandingan Berpasangan
                            </h3>
                        </div>
                        <div className="relative ml-4 mt-4 sm:mr-8">
                            <Priority />
                        </div>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto p-2 sm:p-4 mb-4">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <CalculationInput onChange={(data) => setData(data)} />

                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="btn-process sm:w-32 rounded p-2 mt-8 text-white shadow-lg"
                                disabled={processing}
                            >
                                {processing ? "Submitting..." : "submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
