import { Head } from "@inertiajs/react";
import React from "react";

import Navbar from "@/Components/Navbars/Navbar";
import Footer from "@/Components/Footers/Footer";
import HeaderUser from "@/Components/Header/HeaderUser";
// import Calculation from "@/Components/Table/Calculation";
import CardGoalSelect from "@/Components/Cards/CardGoalSelect";

import "../../../css/style.css";
import "@/../../node_modules/@fortawesome/fontawesome-free/css/all.css";

export default function UserLayout({ user }) {
    return (
        <>
            <Head title="Perhitungan" />
            <div className="relative bg-blueGray-100">
                <Navbar user={user} />
                <HeaderUser />
                <div className="px-4 md:px-10 mx-auto w-full  mt-16">
                    <div className="h-96">
                        <CardGoalSelect />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
