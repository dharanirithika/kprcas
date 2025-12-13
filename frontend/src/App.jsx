
import Header from "./component/pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import UseState from "./hooks/UseState";
import {Routes,Route} from "react-router-dom";
import Navbar from "./component/pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import UseEffect from "./hooks/UseEffect";

const App=()=>{
  return(
    <>
    {/*<Header />
       <Header />
       <footer /> 
       <Home name="akarshana"dept="IT" />
       <Home name="dharani" dept="IT" />
       <useState /> */}
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home name="Dharani" dept="IT"/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/useState" element={<UseState/>}/>
       <Route path="/UseEffect" element={<UseEffect/>}/>
    </Routes>
    </>
    )
}


export default App;