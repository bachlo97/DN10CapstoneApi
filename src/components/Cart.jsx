import React from "react";

function Cart() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: "60%", background: "#90dfaa" }}
      >
        <div className="offcanvas-header">
          <h2
            className="offcanvas-title"
            id="offcanvasRightLabel"
            style={{
              marginLeft: "auto",
              fontSize: "2.5rem",
              fontWeight: 600,
              color: "#283f3b",
            }}
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
                <th scope="row">
                  <img src="/public/img/product 1.jpg" alt="" width={50} height={50} />
                </th>
                <td>Salad</td>
                <td>
                  <button>+</button>
                  1
                  <button>-</button>
                </td>
                <td>20$</td>
                <td>20000</td>
                <td><button>Remove</button></td>
              </tr>

            </tbody>
          </table>


        </div>


        <div className="offcanvas-footer">
          <div className="final">
            <strong>
              Total: $ <span className="total">400</span>
            </strong>
            <div className="action">
              <button>abc</button>
              <button>abc</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
