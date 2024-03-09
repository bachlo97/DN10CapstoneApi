import React from 'react'
import ProductCard from './product-card'

function ProductList({ data, type,themGioHang }) {
  let dataProduct = []
  if (type) {
    dataProduct = data.filter((item) => {
      return item.type === type
    })
  } else {
    dataProduct = data
  }

  return (

    <div className="container" id='myList'>
      <div className="row">
        {dataProduct.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-xl-4 mt-5" key={item.id}>
              <ProductCard item={item} themGioHang={themGioHang} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList