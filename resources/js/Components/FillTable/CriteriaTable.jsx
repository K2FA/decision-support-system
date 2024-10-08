import React, { useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

export default function CriteriaTable() {
    const { criterias, flash } = usePage().props;
    const { delete: destroy } = useForm({});

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    const handleDeleteBtn = (id) => {
        destroy(`/table/criteria/${id}`, {
            onSuccess: (page) => {
                toast.success(page.props.flash.message);
            },
        });
    };

    return (
        <table className="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th className="px-4 sm:px-6  sm:w-4 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-center text-blueGray-700">
                        No
                    </th>
                    <th className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm sm:text-base  border-slate-300 whitespace-nowrap font-semibold text-left text-blueGray-700">
                        Nama Kriteria
                    </th>

                    <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center"></th>
                    {/* <th className="px-6 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap font-semibold text-center"></th> */}
                </tr>
            </thead>
            <tbody>
                {criterias.length !== 0 ? (
                    criterias.map((criteria, index) => (
                        <tr key={criteria.id}>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-center font-semibold">
                                {++index}
                            </td>
                            <td className="px-4 sm:px-6 align-middle border border-solid py-3 text-sm text-blueGray-500 border-slate-300 whitespace-nowrap text-left font-semibold">
                                {criteria.name}
                            </td>
                            <td className="px-2 sm:w-36 align-middle border border-solid  text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                                <Link
                                    href={route("criteria.edit", criteria.id)}
                                    as="button"
                                    className="sm:w-2/3 bg-green-700 hover:bg-green-500 rounded p-1"
                                >
                                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                                    Edit
                                </Link>
                            </td>
                            {/* <td className="px-2 w-36 align-middle border border-solid py-3 text-sm  border-slate-300 whitespace-nowrap text-white text-center">
                                <button
                                    className="sm:w-2/3 bg-red-500 hover:bg-red-700 rounded p-1"
                                    as="button"
                                    onClick={() => handleDeleteBtn(criteria.id)}
                                >
                                    <i className="fa-solid fa-trash mr-1 text-xs"></i>
                                    Delete
                                </button>
                            </td> */}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan={5}
                            className=" text-center pt-4 text-gray-300"
                        >
                            Tidak Ada Data
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
