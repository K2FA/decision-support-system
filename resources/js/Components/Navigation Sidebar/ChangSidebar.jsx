import React from "react";
import { Link } from "@inertiajs/react";

export default function ChangSidebar() {
    return (
        <>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                    <Link
                        className={
                            "text-sm uppercase py-3 font-bold block " +
                            (window.location.href.indexOf("/tfn/chang") !==
                            -1
                                ? "text-blueGray-700 hover:text-blueGray-500"
                                : "text-blueGray-500 hover:text-blueGray-400")
                        }
                        href="/tfn/chang"
                    >
                        <i
                            className={
                                "fa-solid fa-table mr-1 text-sm sm:text-base " +
                                (window.location.href.indexOf(
                                    "/tfn/chang"
                                ) !== -1
                                    ? "opacity-75"
                                    : "text-blueGray-300")
                            }
                        ></i>{" "}
                        TFN Chang
                    </Link>
                </li>
            </ul>
        </>
    );
}
