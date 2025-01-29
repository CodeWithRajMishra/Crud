import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutCompany from "./pages/AboutCompany";
import AboutProduct from "./pages/AboutPRoduct";
import AboutServices from "./pages/AboutServices";
const App=()=>{
  return(
 <>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>} >
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="about" element={<About/>}>
            <Route index element={<AboutCompany/>}/>
            <Route path="aboutcomp" element={<AboutCompany/>}/> 
            <Route path="aboutprod" element={<AboutProduct/>} />
            <Route path="aboutservice" element={<AboutServices/>}/>
         </Route>
         <Route path="contact" element={<Contact/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
 </>          
  )
}
export default App;