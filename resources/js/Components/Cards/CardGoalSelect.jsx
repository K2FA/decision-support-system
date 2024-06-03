import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CardGoalSelect() {
    const { goalSelects, flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

    return (
        <>
            <div className="flex w-full justify-center gap-8 flex-wrap">
                {goalSelects.map((goalSelect) => (
                    <div
                        className={
                            goalSelect.id % 2 == 0
                                ? "natural-goal card w-1/4 bg-base-100 shadow-xl"
                                : "honey-goal card w-1/4 bg-base-100 shadow-xl"
                        }
                        key={goalSelect.id}
                    >
                        <div className="card-body w-full ">
                            <h2 className="card-title justify-center text-white">
                                Proses {goalSelect.name}
                            </h2>

                            <div className="card-actions justify-center mt-2">
                                <Link
                                    href={route("perhitungan.index", {
                                        goal: goalSelect.name,
                                    })}
                                    type="submit"
                                    className="btn w-5/6 shadow-md text-white"
                                >
                                    Pilih
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
