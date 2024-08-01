import React from "react";

import AdminNavbar from "@/Components/Navbars/Navbar";
import Header from "@/Components/Header/HeaderAdmin";
import Sidebar from "@/Components/Sidebars/Sidebar";
import Footer from "@/Components/Footers/Footer";
import CardAddAlternative from "@/Components/Cards/CardAddAlternative";
import CardEditGoal from "@/Components/Cards/CardEditGoal";
import CardEditCriteria from "@/Components/Cards/CardEditCriteria";
import CardEditAlternative from "@/Components/Cards/CardEditAlternative";

import "@/../../node_modules/@fortawesome/fontawesome-free/css/all.css";

export default function FormAdminLayout({ user }) {
    const goalEditPath = /\/table\/goal\/\d+\/edit$/.test(window.location.href);
    const criteriaEditPath = /\/table\/criteria\/\d+\/edit$/.test(
        window.location.href
    );
    const alternativeEditPath = /\/table\/alternative\/\d+\/edit$/.test(
        window.location.href
    );

    return (
        <>
            <Sidebar user={user} />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar user={user} />

                <Header />

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {criteriaEditPath ? (
                        <CardEditCriteria />
                    ) : goalEditPath ? (
                        <CardEditGoal />
                    ) : alternativeEditPath ? (
                        <CardEditAlternative />
                    ) : (
                        <CardAddAlternative />
                    )}

                    <Footer />
                </div>
            </div>
        </>
    );
}
