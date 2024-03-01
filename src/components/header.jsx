import React from 'react'

function Header() {
  return (
    <header>
      <div className="header_content">

        <div className="header_logo">
          <div className="header_brand"></div>
          <h2>Salus</h2>
        </div>

        <div className="header_admin">
          <i className="fa-solid fa-user-gear"></i>
          <h2>Admin Portal</h2>
        </div>

        <div className="header_cart"></div>
      </div>
    </header>
  )
}

export default Header