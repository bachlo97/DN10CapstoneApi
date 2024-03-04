import React from 'react'

function ProductCard() {
    return (
        <div className="card" style={{ width: '350px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <div className="card-img" style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                <img src="public/img/product 1.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />

                <div className="over-lay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>

                <div className="icon" style={{ position: 'absolute', top: 9, right: 14 }}>
                    <i className="fa-solid fa-heart" style={{ color: '#B197FC' }} />

                </div>

            </div>
            <div className="card-body" style={{ padding: '2rem 3rem 2rem 3rem' }}>
                <h5 className="card-title d-flex justify-content-between">
                    <p>Salad</p>
                    <p>16$</p>
                </h5>
                <p className="card-text" style={{ fontSize: '14px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default ProductCard