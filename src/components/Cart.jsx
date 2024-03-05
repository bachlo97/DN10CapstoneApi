import React from "react";
function Cart() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end cart-canvas"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h2
            className="offcanvas-title"
            id="offcanvasRightLabel"
          >
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
              <tr>
                <th scope="row" className="d-flex justify-content-center">
                  <img src="/public/img/product 1.jpg" alt="" width={50} height={50} />
                </th>
                <td>Salad</td>
                <td>
                  <button className="btn btn-outline-secondary rounded-circle fs-4 me-2">+</button>
                  1
                  <button className="btn btn-outline-secondary rounded-circle fs-4 ms-2">-</button>
                </td>
                <td>20$</td>
                <td>20000</td>
                <td><i className="fa-solid fa-trash" style={{cursor:'pointer'}}></i></td>
              </tr>
 
            </tbody>
          </table>
        </div>


        <div className="offcanvas-footer">
          <div className="final">
            <p className="mb-3" style={{fontWeight:600}}>
              SubTotal: $ <span className="total">400</span>
            </p>
            <div className="action">
              <button className="btn btn-outline-primary fs-4 me-5">Purchase <i className="fa-solid fa-money-bill"></i></button>
              <button className="btn btn-outline-danger fs-4">Remove All <i className="fa-solid fa-broom"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
