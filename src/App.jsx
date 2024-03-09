import { useEffect, useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import ProductList from "./components/product-list";
import Footer from "./components/footer";
import Cart from "./components/cart";
import { BASE_URL, getCardListFromLocal } from "./util/const.js";
import Modal from "./components/modal.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [type, setType] = useState("");
  const [cartList, setCartList] = useState(getCardListFromLocal());
  const [cartState, setCartState] = useState(true);
  const [modal, setModal] = useState(false);
  const [show,setShow] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setStatus("loading");
        const res = await axios({
          url: `${BASE_URL}/fandb`,
          method: "GET",
        });
        setStatus("successs");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
        setStatus("fail");
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]); // This will trigger whenever cartList changes

  const opacity = status === "loading" ? 0.3 : 1;

  let tongSoLuong = cartList.reduce((tsl, spGH, index) => {
    return (tsl += spGH.soLuong);
  }, 0);

  const themGioHang = (item) => {
    let spGioHang = { ...item, soLuong: 1 };
    const newCartList = [...cartList];
    let index = newCartList.findIndex((sp) => sp.id === spGioHang.id);
    if (index !== -1) {
      newCartList[index].soLuong += 1;
      console.log({ newCartList });
    } else {
      newCartList.push(spGioHang);
    }
    setCartList(newCartList);
  };

  const xoaSP = (id) => {
    let newCartList = cartList.filter((sp) => sp.id !== id);
    setCartList(newCartList);
  };

  const xoaGioHang = () => {
    setCartList([]);
  };



  const tangGiamSL = (id, tangGiam) => {
    let newCartList = [...cartList];
    let index = newCartList.findIndex((sp) => sp.id === id);
    if (tangGiam) {
      newCartList[index].soLuong += 1;
    } else {
      if (newCartList[index].soLuong > 1) {
        newCartList[index].soLuong -= 1;
      }
    }
    setCartList(newCartList);
  };


  const openModal = () => {
    setCartState(false)
    setModal(true)
  }

  const closeModal = () =>{
    setCartState(true)
    setModal(false)
    setShow(true)
  }

  const pay = () =>{
    setCartState(true)
    setModal(false)
    setShow(false)
    document.querySelector('.btn-close').click()
    setCartList([])
  }


  return (
    <div
      style={{
        opacity: opacity,
      }}
    >
      <Header tongSoLuong={tongSoLuong}/>
      <Cart
        cartList={cartList}
        xoaSP={xoaSP}
        tangGiamSL={tangGiamSL}
        xoaGioHang={xoaGioHang}
        cartState={cartState}
        openModal = {openModal}
        show={show}
      />
      <Banner />
      <Modal
       modal = {modal}
       closeModal={closeModal}
       pay={pay}
       subTotal = {cartList.reduce((tongTien,spGioHang)=>{
        return tongTien += spGioHang.soLuong * spGioHang.price
       },0)}
      />
      <h2
        style={{
          color: "#1d365e",
          fontSize: "3.2rem",
          fontWeight: 700,
          textAlign: "center",
          margin: "4rem 0",
        }}
      >
        --Product Feature--
      </h2>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{
          width: "10%",
          marginLeft: "113px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
        onChange={(event) => {
          setType(event.target.value);
        }}
      >
        <option value={""}>All</option>
        <option value={"Food"}>Food</option>
        <option value={"Drink"}>Drink</option>
      </select>

      <ProductList data={products} type={type} themGioHang={themGioHang} />
      <Footer />
    </div>
  );
}

export default App;
