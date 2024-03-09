import React from "react";
function Cart({ cartList,xoaSP,tangGiamSL,xoaGioHang,cartState,openModal,show}) {
  return (
    <>
      <div
        className={`offcanvas offcanvas-end cart-canvas ${cartState? '' : 'hide-cart'} ${show ? 'show' : ''}`}
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasRightLabel">
            CART
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ marginLeft: "auto" }}
          />
        </div>

        <div className="offcanvas-body">
          {cartList && cartList.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {cartList.map((item, index) => {
                  return (
                  <tr key={index}>
                    <th scope="row" className="d-flex justify-content-center">
                      <img
                        src={item.img}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </th>
                    <td>{item.name}</td>
                    <td>
                      <button className="btn btn-outline-secondary rounded-circle fs-4 me-2" onClick={()=>tangGiamSL(item.id,true)}>
                        +
                      </button>
                      {item.soLuong}
                      <button className="btn btn-outline-secondary rounded-circle fs-4 ms-2" onClick={()=>tangGiamSL(item.id,false)}>
                        -
                      </button>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.price*item.soLuong}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash"
                        style={{ cursor: "pointer" }}
                        onClick={()=>xoaSP(item.id)}
                      ></i>
                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          ) : (
            <p style={{margin:'20px 0',fontSize:'3rem',fontWeight:900,textAlign:'center',color:'#ffffffa6'}}>No anything in the cart</p>
          )}
        </div>

        <div className="offcanvas-footer">
          <div className="final mb-5">
            <p className="mb-3" style={{ fontWeight: 600 }}>
              SubTotal: $ <span className="total">{
                cartList.reduce((tongTien,spGioHang,index)=>{
                  return tongTien += spGioHang.soLuong * spGioHang.price
                },0)
              }</span>
            </p>
            <div className="action">
              <button className="btn btn-outline-primary fs-4 me-5" onClick={()=>{
                if(cartList.length){
                  openModal()
                }
              }}>
                Purchase <i className="fa-solid fa-money-bill"></i>
              </button>
              <button className="btn btn-outline-danger fs-4" onClick={()=>xoaGioHang()}>
                Clear Cart <i className="fa-solid fa-broom" ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
