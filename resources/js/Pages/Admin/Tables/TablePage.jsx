import AdminLayout from "@/Layouts/AdminLayout/AdminLayout";

export default function TablePage({auth}){
    
    return(
            <AdminLayout user = {auth.user.name}/>
    )
}