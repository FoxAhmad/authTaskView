import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function HomeLayout() {
    return (
        <>
            <Navbar />
            <div className= "bg-teal-200 h-screen w-full grid place-items-center">
            <Outlet />
            </div>
            <ToastContainer position="bottom-right" />
        </>
    )
}


export default HomeLayout;

