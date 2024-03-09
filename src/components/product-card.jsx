import React from 'react'
function ProductCard({item,themGioHang}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={item.img} className="card-img-top" alt="..." />

                <div className="over-lay"></div>

                <div className="icon-heart d-flex justify-content-center align-items-center rounded-circle" style={{ position: 'absolute', top: 12, right: 17, width: 30, height: 30, backgroundColor: 'white' }}>
                    <i className="fa-regular fa-heart" style={{ color: 'red' }}></i>

                </div>

            </div>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between mb-3 mt-1">
                    <p >{item.name}</p>
                    <p >{item.price}$</p>
                </h5>
                <p className="card-text">{item.desc}</p>
                <button className="btn btn-outline-primary" onClick={()=>{
                    themGioHang(item)
                }}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    {" "}Add to cart
                </button>

            </div>
        </div>

    )
}

export default ProductCard