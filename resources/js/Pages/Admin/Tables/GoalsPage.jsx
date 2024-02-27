import AdminLayout from "@/Layouts/Admin/AdminLayout";

export default function GoalsPage({auth}){
    return(
            <AdminLayout user = {auth.user.name}/>
                
    )
}