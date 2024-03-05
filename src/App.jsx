import { useEffect, useState } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import ProductList from './components/product-list'
import Footer from './components/footer'
import Cart from './components/cart'
import { BASE_URL } from './util/const.js'
function App() {

  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('idle')
  const [type, setType] = useState('')
  const [cartList,setCartList] = useState([])
  useEffect(() => {
    (
      async () => {
        try {
          setStatus('loading')
          const res = await axios({
            url: `${BASE_URL}/fandb`,
            method: 'GET',
          })
          setStatus('successs')
          setProducts(res.data)
        } catch (err) {
          console.log(err)
          setStatus('fail')
        }
      }
    )()

  }, [])

  const opacity = status === "loading" ? 0.3 : 1

  return (
    <div style={{
      opacity: opacity
    }}>
      <Header />
      <Cart />
      <Banner />
      <h2 style={{ color: '#1d365e', fontSize: '3.2rem', fontWeight: 700, textAlign: 'center', margin: '4rem 0' }}>--Product Feature--</h2>
      <select className="form-select" aria-label="Default select example" style={{ width: '10%', marginLeft: '113px', marginBottom: '10px', fontSize: '16px' }} onChange={(event) => {
        setType(event.target.value);
      }}>
        <option value={''}>All</option>
        <option value={'Food'}>Food</option>
        <option value={'Drink'}>Drink</option>
      </select>

      <ProductList data={products} type={type} />
      <Footer />
    </div>
  )
}

export default App
