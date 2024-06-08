import { Header } from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";

export const Layout = ()=> {
    return (
        <div className="page">
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
     
    )
}