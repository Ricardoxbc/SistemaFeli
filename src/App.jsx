import Login from './pages/login'
import Ventas from './pages/sales'
import Proveedores from './pages/providers'
import Productos from './pages/products'
import Inventario from './pages/inventory'
import Pagos from './pages/payments'
import Admin from './pages/admin'
import Categorias from './pages/categories'
import Compania from './pages/company'
import Cliente from './pages/client'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'

import './pages/css/main.scss'
import './pages/css/material.min.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sales' element={<Ventas />} />
      <Route path='/providers' element={<Proveedores />} />
      <Route path='/products' element={<Productos />} />
      <Route path='/home' element={<Home />} />
      <Route path='/inventory' element={<Inventario />} />
      <Route path='/payments' element={<Pagos />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/categories' element={<Categorias />} />
      <Route path='/client' element={<Cliente />} />
      <Route path='/company' element={<Compania />} />
    </Routes>
  )
}

export default App
