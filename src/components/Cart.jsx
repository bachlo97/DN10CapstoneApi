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
          <div
            className="cart-items d-flex flex-column"
            style={{ margin: "0 5%" }}
          >
            {/* <span>Looks Like You Haven't Added Any Product In The Cart</span> */}
            <div
              className="cart-item d-flex align-items-center justify-content-around"
              style={{
                height: "5rem",
                width: "100%",
                borderBottom: "1px solid whitesmoke",
                paddingBottom: "20px",
              }}
            >
              <div
                className="cart-img d-flex justify-content-center"
                style={{ width: "5rem", height: "5rem" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU"
                  alt=""
                />
              </div>
              <strong className="name">Airpods Pro</strong>
              <span className="qty-change">
                <div className="d-flex">
                  <button className="btn-qty" onclick="qtyChange(this,'sub')">
                    +
                  </button>
                  <p className="qty">1</p>
                  <button className="btn-qty" onclick="qtyChange(this,'add')">
                    -
                  </button>
                </div>
              </span>
              <p className="price">$ 400</p>
              <button onclick="removeItem(this)">
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
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
