import { useState } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import ProductList from './components/product-list'
import Footer from './components/footer'
import Cart from './components/cart'

function App() {

  return (
    <>
      <Header/>
      <Cart/>
      <Banner/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default App
