/* import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Paises from './pages/Paises'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Producto from './components/Producto'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx' 
import { FiltersProvider } from './context/filters.jsx'
import { CarritoProvider } from './context/carrito.jsx'
*/

import { Blog, Home, Paises, Carrito, Contacto, Nosotros, Productos, 
        Producto, Navbar, Footer, Pagar, Page404, Login, Logout } from './data/Importers.jsx'
import { FiltersProvider, CarritoProvider, LogueadoProvider } from './data/Importers.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <FiltersProvider>
      <BrowserRouter>
        <LogueadoProvider>
        <CarritoProvider>
          <Navbar />
          <div className="w-full my-10 mx-auto max-w-[1640px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/paises" element={<Paises />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/pagar" element={<Pagar />} />
             <Route path="/login" element={<Login />} />
             <Route path="/registro" element={<Login />} />
             <Route path="/logout" element={<Logout />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:id" element={<Producto />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
          <Footer />
        </CarritoProvider>
        </LogueadoProvider>
      </BrowserRouter>
    </FiltersProvider>

  )
}

export default App