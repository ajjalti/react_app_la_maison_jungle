import Banner from "./Banner";
import logo from "../assets/logo.png";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import Cart from "./Cart";
import Layout from './Layout'
import { useEffect, useState } from "react";
import Categorie from "./Categorie";

function App() {
	const [cart,setCart] = useState(localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("panier")):[])
  const [search,setSearch]=useState("")
  useEffect(()=>{
    localStorage.setItem("panier",JSON.stringify(cart))
  },[cart])
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Categorie setSearch={setSearch} search={search}/>
      <Layout>
        <Cart  cart={cart} setCart = {setCart}/>
        <ShoppingList  cart = {cart} setCart = {setCart} search={search}/>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
