import React, { useEffect } from "react";

function Header() {

  useEffect(() => {
    document.querySelector('.btn-menu').onclick = ()=>{
      const adminHeaderEle = document.querySelector('.header_admin')
      const cartHeaderEle = document.querySelector('.header_cart')
      const headerEle = document.querySelector('.my-header')
      adminHeaderEle.classList.toggle('respond1')
      cartHeaderEle.classList.toggle('respond1')
      headerEle.classList.toggle('respond2')
    }
  }, []);

  return (
    <section className="my-header">
      <header style={{ position: "relative" }}>
        <div className="header_content">
          <div className="header_logo d-flex">
            <div className="header_brand"></div>
            <h2>Salad Bar</h2>
          </div>

          <a className="header_admin" href="./admin.html">
            <i className="fa-solid fa-user-gear"></i>
            <h2>Admin Portal</h2>
          </a>

          <div className="header_cart"  style={{position:'relative'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" >
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="count d-flex justify-content-center" style={{position: 'absolute',top:'-7px', right:'-9px',backgroundColor:'#496a1a',width:20,height:20,borderRadius:'50%',color:'white'}}>
              <span>0</span>
            </div>
          </div>
        </div>
        <button
          className="btn btn-secondary btn-menu"
          style={{ position: "absolute", top: 20, right: 0 }}
        >
          <i className="fa-solid fa-bars" style={{ fontSize: "27px" }}></i>
        </button>
      </header>
    </section>
  );
}

export default Header;
