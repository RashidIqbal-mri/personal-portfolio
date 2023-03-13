

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from "./pages/Contact";
import AboutME from "./components/AboutME";
import Social from "./components/Social";


function App() {
  return (
    
    <Router>
      <Routes>
      
      <Route path="/" element={<Home />} />
      
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutME/>}></Route>
      <Route path="/social" element={<Social/>}></Route>
      </Routes>
    </Router>


      
     
  );
}

export default App;
