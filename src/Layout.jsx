import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import TopMenu from "./component/TopMenu"
const Layout=()=>{
    return(
        <>
          <TopMenu/>
           
             <Outlet />

          <Footer/>
        
        </>
    )
}

export default Layout;