import React from "react";
import { Link } from "@inertiajs/react";

import UserDropdown from "../Dropdowns/UserDropdown";
import TableSideBar from "../Navigation Sidebar/TableSidebar";
import BobotSideBar from "../Navigation Sidebar/BobotSidebar";
import ChangSidebar from "../Navigation Sidebar/ChangSidebar";

export default function Sidebar({ user }) {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    const logo = "/assets/img/logo.png";

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() =>
                            setCollapseShow("bg-white m-2 py-3 px-6")
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm sm:text-lg uppercase font-extrabold p-4 px-0 border-b border-gray-400 text-center"
                        to="/"
                    >
                        <span className="flex items-center gap-2">
                            <img src={logo} alt="" className="w-16" />
                            Dashboard
                        </span>
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <UserDropdown user={user} />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm sm:text-lg uppercase font-extrabold p-4 px-0 border-b border-gray-400 text-center`"
                                        to="/"
                                    >
                                        Dashboard Admin
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() =>
                                            setCollapseShow("hidden")
                                        }
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <span>
                            <hr className="my-4 md:min-w-full" />
                            {/* Heading */}
                            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
                                Data Tabel
                            </h6>
                            {/* Navigation Table */}
                            <TableSideBar />
                            {/* End of Navigation Table */}
                        </span>

                        {/* Divider */}
                        <span>
                            <hr className="my-4 md:min-w-full mt-4" />
                            {/* End of Divider*/}
                            {/* Heading*/}
                            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline ">
                                Data Bobot
                            </h6>

                            {/* End of Heading*/}
                            {/* Navigation Table */}
                            <BobotSideBar />
                            {/* End of Navigation Table */}
                        </span>

                        {/* Divider */}
                        <span>
                            <hr className="my-4 md:min-w-full mt-4" />
                            {/* End of Divider*/}
                            {/* Heading*/}
                            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline ">
                                Data TFN Chang 1996
                            </h6>
                            {/* End of Heading*/}
                            <ChangSidebar/>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}
