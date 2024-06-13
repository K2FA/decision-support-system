import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

import RankInputTable from "../FillTable/RankInputTable";
import Information from "../Modal/Information";
import toast from "react-hot-toast";

export default function CardRankInput() {
    const { flash, information } = usePage().props;

    const { data, setData, post, processing, errors } = useForm();

    useEffect(() => {
        if (flash.failed) {
            toast.error(flash.failed);
        }
    }, [flash.failed]);

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/user/rangking", {
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
                                Input Bobot Perangkingan
                            </h3>
                        </div>
                        <div className="relative ml-4 mt-4 sm:mr-8">
                            <Information Information={information} />
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-2 sm:p-4 mb-4">
                    <form onSubmit={handleSubmit}>
                        <RankInputTable
                            onChange={(data) => setData(data)}
                            Information={information}
                        />

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
