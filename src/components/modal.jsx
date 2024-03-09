import React from "react";

function Modal({modal,closeModal,pay,subTotal }) {
  if (!modal) return null;
  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        opacity: 1,
        backgroundColor: "rgba(128, 128, 128, 0.9)",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content border border-success rounded-5" style={{ top: "250px",backgroundColor:'#29372ede' }}>
          <div className="modal-body d-flex flex-column align-items-center gap-5" style={{padding:'50px'}}>
            <p className='fs-2 text-white'><i>{`Bạn có muốn thanh toán ${subTotal} $ không?`}</i></p>
            <div className="button-group">
            <button
              onClick={()=>{
                pay()
              }}
              type="button"
              className="btn btn-success me-5 fs-3"
            >
              YES
            </button>
            <button onClick={()=>{
                closeModal()
            }} type="button" className="btn btn-danger fs-3">
              NO
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
