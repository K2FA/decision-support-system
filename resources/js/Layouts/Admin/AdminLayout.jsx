import React from "react";

import AdminNavbar from "@/Components/Navbars/AdminNavbar";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebars/Sidebar";
import FooterAdmin from "@/Components/Footers/FooterAdmin";
import Table from "@/Components/Table/Table";
import BobotTable from "@/Components/Table/BobotTable";

import { Head } from "@inertiajs/react";

import '@/../../node_modules/@fortawesome/fontawesome-free/css/all.css'

export default function AdminLayout({user}){
    const [tableTitle, setTableTitle] = React.useState('');
    
    React.useEffect(()=>{
        if(window.location.href.indexOf('/table/goal') !== -1 ){
            setTableTitle('Tabel Tujuan');
        }else if(window.location.href.indexOf('/table/alternative') !== -1 ){
            setTableTitle('Tabel Alternative');
        }else if(window.location.href.indexOf('/table/criteria') !== -1){
            setTableTitle('Tabel Kriteria');
        }else if(window.location.href.indexOf('/bobot/natural') !== -1){
            setTableTitle('Tabel Bobot Natural');
        }else if(window.location.href.indexOf('/bobot/full-wash') !== -1){
            setTableTitle('Tabel  Bobot Full Wash');
        }else if(window.location.href.indexOf('/bobot/honey') !== -1){
            setTableTitle('Tabel Bobot Honey');
        }
    });
    
    return(
        <>
            <Head title={tableTitle}/>
            
            <Sidebar user={user}/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar user= {user}/>

                <Header/>

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {(window.location.href.indexOf('/bobot') !== -1 )? <BobotTable />:<Table/>}
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}