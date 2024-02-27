import AdminLayout from "@/Layouts/Admin/AdminLayout";

export default function AlternativePage({auth}){
    console.log(auth)
    return(
            <AdminLayout user = {auth.user.name}/>
                
    )
}