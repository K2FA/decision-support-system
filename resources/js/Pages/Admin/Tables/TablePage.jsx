import AdminLayout from "@/Layouts/Admin/AdminLayout";

export default function TablePage({auth}){
    return(
            <AdminLayout user = {auth.user.name}/>
    )
}