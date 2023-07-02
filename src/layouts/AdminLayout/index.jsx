import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full container px-0">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;