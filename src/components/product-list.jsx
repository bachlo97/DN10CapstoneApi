import React from 'react'
import Header from './header'
import Banner from './banner'
import ProductCard from './product-card'

function ProductList() {
  return (
    <div className="container">
      <div className='row'>
        <div className="col-sm-12 col-md-6 col-xl-4 mt-5">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4 mt-5">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4 mt-5">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4 mt-5">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4 mt-5">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ProductList