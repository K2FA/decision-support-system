import React from "react";

import AdminNavbar from "@/Components/Navbars/AdminNavbar";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebars/Sidebar";
import FooterAdmin from "@/Components/Footers/FooterAdmin";

import '@/../../node_modules/@fortawesome/fontawesome-free/css/all.css'

export default function Admin(){
    return(
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>

                <Header/>

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}