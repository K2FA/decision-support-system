import React, { useEffect } from "react";

import Navbar from "@/Components/Navbars/Navbar";
import HeaderAdmin from "@/Components/Header/HeaderAdmin";
import Sidebar from "@/Components/Sidebars/Sidebar";
import Footer from "@/Components/Footers/Footer";
import Table from "@/Components/Table/Table";
import BobotTable from "@/Components/Table/BobotTable";
import ChangTable from "@/Components/Table/ChangTable";
import HasilPeringkat from "@/Components/Table/HasilPeringkat";

import { Head } from "@inertiajs/react";

import "@/../../node_modules/@fortawesome/fontawesome-free/css/all.css";

export default function AdminLayout({ user }) {
    const [tableTitle, setTableTitle] = React.useState("");

    useEffect(() => {
        if (window.location.href.includes("/table/goal")) {
            setTableTitle("Tabel Tujuan");
        } else if (window.location.href.includes("/table/alternative")) {
            setTableTitle("Tabel Alternative");
        } else if (window.location.href.includes("/table/criteria")) {
            setTableTitle("Tabel Kriteria");
        } else if (window.location.href.includes("/bobot/natural")) {
            setTableTitle("Tabel Bobot Natural");
        } else if (window.location.href.includes("/bobot/full-wash")) {
            setTableTitle("Tabel  Bobot Full Wash");
        } else if (window.location.href.includes("/bobot/honey")) {
            setTableTitle("Tabel Bobot Honey");
        } else if (window.location.href.includes("/tfn/chang")) {
            setTableTitle("Tabel TFN Chang");
        }
    });

    return (
        <>
            <Head title={tableTitle} />

            <Sidebar user={user} />
            <div className="relative md:ml-64 bg-blueGray-100">
                <Navbar user={user} />

                <HeaderAdmin />

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {window.location.href.includes("/bobot") ? (
                        <BobotTable />
                    ) : window.location.href.includes("/table") ? (
                        <Table />
                    ) : window.location.href.includes("/tfn") ? (
                        <ChangTable />
                    ) : (
                        <HasilPeringkat />
                    )}
                    <Footer />
                </div>
            </div>
        </>
    );
}
