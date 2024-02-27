import React from "react";

import AdminNavbar from "@/Components/Navbars/AdminNavbar";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebars/Sidebar";
import FooterAdmin from "@/Components/Footers/FooterAdmin";
import CardForm from "@/Components/Cards/CardForm";

import '@/../../node_modules/@fortawesome/fontawesome-free/css/all.css';

export default function FormAdminLayout({user}){
    return(
        <>
            <Sidebar user={user}/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar user= {user}/>

                <Header/>

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <CardForm/>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    )
}