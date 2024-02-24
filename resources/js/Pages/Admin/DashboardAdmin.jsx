import AdminLayout from "@/Layouts/Admin/AdminLayout";

export default function DashboardAdmin({auth}){
    return(        
            <AdminLayout user = {auth.user.name}>
                
            </AdminLayout>
    )
}