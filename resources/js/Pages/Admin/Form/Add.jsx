import React from "react";

import FormAdminLayout from "@/Layouts/FormLayout/FormAdminLayout";

export default function Add({auth}){
    return(
        <>
            <FormAdminLayout user = {auth.user.name}/>
        </>
    )
}