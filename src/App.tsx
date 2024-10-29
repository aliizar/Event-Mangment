import Navbar from "./Compoents/Navbar";
import './CSS/App.css'
import Footer from "./Compoents/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
   <div className="landingPage">
        <Navbar />
        <Outlet/>
        <Footer />
   </div>
      
    </>
  );
}

export default App;
