import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function CardGoalSelect() {
    const { goalSelects } = usePage().props;

    const [selectGoal, setSelectGoal] = useState("");

    const handleSelectGoal = (goalName) => {
        setSelectGoal(goalName);
    };

    useEffect(() => {
        localStorage.setItem("selectedGoal", selectGoal);
    }, [selectGoal]);

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
                                <Link
                                    href="/user/perhitungan"
                                    type="button"
                                    className="btn w-5/6 shadow-md text-white"
                                    onClick={() =>
                                        handleSelectGoal(goalSelect.goal.name)
                                    }
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
