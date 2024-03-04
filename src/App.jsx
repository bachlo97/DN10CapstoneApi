import { useState } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import ProductList from './components/product-list'
import Footer from './components/footer'
import Cart from './components/cart'
import ProductCard from './components/product-card'

function App() {

  return (
    <>
      <Header />
      <Cart />
      <Banner />
      <h2 style={{color:'#1d365e',fontSize:'3.2rem',fontWeight:700,textAlign:'center',margin:'4rem 0'}}>--Product Feature--</h2>
      <select className="form-select" aria-label="Default select example" style={{width:'10%',marginLeft:'113px',marginBottom:'10px',fontSize:'16px'}}>
        <option value={''}>All</option>
        <option value={2}>Food</option>
        <option value={3}>Drink</option>
      </select>

      <ProductList />
      <Footer />
    </>
  )
}

export default App
