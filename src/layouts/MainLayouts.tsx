import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


function MainLayouts (){
    return (
        <>
        
        <Navbar />

        <main>
            <Outlet />
        </main>
        
        <Footer />
        
        </>
    );
}

export default MainLayouts;