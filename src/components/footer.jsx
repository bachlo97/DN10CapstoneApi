import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start" style={{ backgroundColor: '#67d1be',marginTop:'70px' }}>
        <div className="container d-flex justify-content-center py-5">
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-youtube" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-instagram" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-twitter" />
          </button>
        </div>
        <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Bootcamp DN10 Capstone API
    
        </div>
      </footer>

    </div>
  )
}

export default Footer