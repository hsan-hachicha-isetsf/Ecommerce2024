import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import Listcategories from "./components/categories/Listcategories";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Listscategories from "./components/scategories/Listscategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import Viewarticle from "./components/articles/Viewarticle";
import Listarticlecard from "./components/articles/Listarticlecard";
function App() {


  return (
    <>
 
      <Router>
        <Menu/>
      <Routes>
        <Route path="/listart" element={<Listarticles/>}/>
        <Route path="/insertart" element={<Insertarticle/>}/>
        <Route path="/viewart/:id" element={<Viewarticle/>}/>
        <Route path="/editarticle/:id" element={<Editarticle/>}/>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/scat" element={<Listscategories/>}/>
        <Route path="/listarticlecard" element={<Listarticlecard/>}/>
      </Routes>


      </Router>
    </>
  )
}

export default App
