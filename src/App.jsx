import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>

    </div>
  )
}

export default App