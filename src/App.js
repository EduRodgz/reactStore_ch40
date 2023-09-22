import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Home from './components/home';
import Cart from './pages/cart';
import Admin from './pages/admin';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>


      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}
// Test Change
export default App;

