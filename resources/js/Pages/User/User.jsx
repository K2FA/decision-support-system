import React from "react";
import UserLayout from "@/Layouts/UserLayout/UserLayout";

export default function User({ auth }) {
    return (
        <>
            <UserLayout user={auth.user.name} />
        </>
    );
}
