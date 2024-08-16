import { Outlet } from "react-router-dom";
import { Navbar } from "../../layout";

export const LayoutApp = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};