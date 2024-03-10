import React from "react";
import { Link } from "@inertiajs/react";

export default function TableSideBar(){
    return (
        <>
             <ul className="md:flex-col md:min-w-full flex flex-col list-none">
  
                <li className="items-center">
                    <Link
                    className={
                        "text-sm uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/goal") !== -1
                        ? "text-blueGray-700 hover:text-blueGray-500"
                        : "text-blueGray-500 hover:text-blueGray-400")
                    }
                    href="/goal"
                    >
                    <i
                        className={
                        "fa-solid fa-bullseye mr-2 text-sm sm:text-base " +
                        (window.location.href.indexOf("/goal") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Tabel Tujuan
                    </Link>
                </li>
                <li className="items-center">
                    <Link
                    className={
                        "text-sm uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/alternative") !== -1
                        ? "text-blueGray-700 hover:text-blueGray-500"
                        : "text-blueGray-500 hover:text-blueGray-400")
                    }
                    href="/alternative"
                    >
                    <i
                        className={
                        "fa-solid fa-mug-saucer mr-2 text-sm " +
                        (window.location.href.indexOf("/alternative") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Tabel Alternatif
                    </Link>
                </li>
                <li className="items-center">
                    <Link
                    className={
                        "text-sm uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/criteria") !== -1
                        ? "text-blueGray-700 hover:text-blueGray-500"
                        : "text-blueGray-500 hover:text-blueGray-400")
                    }
                    href="/criteria"
                    >
                    <i
                        className={
                        "fa-solid fa-rectangle-list mr-2 text-sm " +
                        (window.location.href.indexOf("/criteria") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Tabel Kriteria
                    </Link>
                </li>

                
            </ul>
        </>
    )
}