import { useState } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import ProductList from './components/product-list'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default App
