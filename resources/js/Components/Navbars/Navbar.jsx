import React from "react";

import UserDropdown from "../Dropdowns/UserDropdown";

export default function Navbar({ user }) {
    const logo = "/assets/img/logo.png";
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <div className="">
                        <a
                            className="text-white text-xl uppercase hidden lg:flex font-bold items-center gap-2"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            {user == "User" ? (
                                <>
                                    <img src={logo} alt="" className="w-16" />
                                    Menu Perhitungan
                                </>
                            ) : (
                                ""
                            )}
                        </a>
                    </div>
                    {/* Form */}

                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center  md:flex">
                        <UserDropdown user={user} />
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}
