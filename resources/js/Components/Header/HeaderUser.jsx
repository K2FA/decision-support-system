import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HeaderUser() {
    return (
        <>
            <div className="header-user relative md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Toaster position="top-right" reverseOrder={false} />
                </div>
            </div>
        </>
    );
}
