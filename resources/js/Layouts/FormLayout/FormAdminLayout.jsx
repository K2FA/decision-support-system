import React from "react";

import AdminNavbar from "@/Components/Navbars/Navbar";
import Header from "@/Components/Header/HeaderAdmin";
import Sidebar from "@/Components/Sidebars/Sidebar";
import Footer from "@/Components/Footers/Footer";
import CardAddForm from "@/Components/Cards/CardAddForm";

import "@/../../node_modules/@fortawesome/fontawesome-free/css/all.css";

export default function FormAdminLayout({ user }) {
    return (
        <>
            <Sidebar user={user} />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar user={user} />

                <Header />

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <CardAddForm />
                    <Footer />
                </div>
            </div>
        </>
    );
}
