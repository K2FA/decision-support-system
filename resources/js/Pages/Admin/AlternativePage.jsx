import AdminLayout from "@/Layouts/Admin/AdminLayout";

export default function AlternativePage({auth}){
    return(
            <AdminLayout user = {auth.user.name}/>
                
    )
}