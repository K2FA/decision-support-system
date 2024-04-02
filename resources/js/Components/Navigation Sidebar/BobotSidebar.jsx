import React from "react";
import { Link } from "@inertiajs/react";

export default function BobotSideBar(){
    return(
        <>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                    <Link
                    className={
                        "text-sm uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/bobot/natural") !== -1
                        ? "text-blueGray-700 hover:text-blueGray-500"
                        : "text-blueGray-500 hover:text-blueGray-400")
                    }
                    href="/bobot/natural"
                    >
                    <i
                        className={
                        "fa-solid fa-seedling mr-1 text-sm sm:text-base " +
                        (window.location.href.indexOf("/bobot/natural") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Bobot Natural
                    </Link>
                </li>
                <li className="items-center">
                    <Link
                    className={
                        "text-sm uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/bobot/full-wash") !== -1
                        ? "text-blueGray-700 hover:text-blueGray-500"
                        : "text-blueGray-500 hover:text-blueGray-400")
                    }
                    href="/bobot/full-wash"
                    >
                    <i
                        className={
                        "fa-solid fa-droplet mr-3 text-sm " +
                        (window.location.href.indexOf("/bobot/full-wash") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Bobot Full Wash
                    </Link>
                </li>
                <li className="items-center">
                    <Link
                    className={
                        "text-sm uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/bobot/honey") !== -1
                        ? "text-blueGray-700 hover:text-blueGray-500"
                        : "text-blueGray-500 hover:text-blueGray-400")
                    }
                    href="/bobot/honey"
                    >
                    <i
                        className={
                        "fa-brands fa-forumbee mr-3 text-sm " +
                        (window.location.href.indexOf("/bobot/honey") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Bobot Honey
                    </Link>
                </li>               
            </ul>       
        </>
    )
}