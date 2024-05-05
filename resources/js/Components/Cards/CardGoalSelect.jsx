import { usePage } from "@inertiajs/react";
import React from "react";

export default function CardGoalSelect() {
    const { goalSelects } = usePage().props;

    return (
        <>
            <div className="flex w-full justify-center gap-8">
                {goalSelects.map((goalSelect) => (
                    <div
                        className={
                            goalSelect.id == 1
                                ? "natural-goal card w-96 bg-base-100 shadow-xl"
                                : goalSelect.id == 2
                                ? "fullwash-goal card w-96 bg-base-100 shadow-xl"
                                : "honey-goal  card w-96 bg-base-100 shadow-xl"
                        }
                        key={goalSelect.id}
                    >
                        <div className="card-body w-full ">
                            <h2 className="card-title justify-center text-white">
                                Proses {goalSelect.goal.name}
                            </h2>

                            <div className="card-actions justify-center mt-2">
                                <button className="btn w-5/6 shadow-md text-white">
                                    Pilih
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
