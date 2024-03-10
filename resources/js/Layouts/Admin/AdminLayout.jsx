import React from "react";

import AdminNavbar from "@/Components/Navbars/AdminNavbar";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebars/Sidebar";
import FooterAdmin from "@/Components/Footers/FooterAdmin";
import Table from "@/Components/Table/Table";

import { Head } from "@inertiajs/react";

import '@/../../node_modules/@fortawesome/fontawesome-free/css/all.css'

export default function AdminLayout({user,initialTableType }){
    const [tableType, setTableType] = React.useState(initialTableType);
    const [tableTitle, setTableTitle] = React.useState('');
    
    React.useEffect(()=>{
        if(window.location.href.indexOf('/goal') !== -1 ){
            setTableType('GoalTable');
            setTableTitle('Tabel Tujuan');
        }else if(window.location.href.indexOf('/alternative') !== -1 ){
            setTableType('AlternativeTable');
            setTableTitle('Tabel Alternative');
        }else if(window.location.href.indexOf('/criteria') !== -1){
            setTableType('CriteriaTable');
            setTableTitle('Tabel Kriteria');
        }
    },[initialTableType]);
    
    return(
        <>
            <Head title={tableTitle}/>
            
            <Sidebar user={user}/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar user= {user}/>

                <Header/>

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Table tableType ={tableType}/>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}