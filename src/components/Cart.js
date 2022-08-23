import { React,useEffect,useState } from 'react'
import '../styles/Cart.css'

function Cart({cart,setCart}) {

	const [isShown,setIsShown] = useState(true)
	const [menu,setMenu] = useState('X')

	function calculTotal(){
		let totalComande=0
		cart.map(element=> totalComande+=element.price*element.quantite)
		return totalComande
	}


	useEffect(()=>{
		!isShown && setMenu("O")
		isShown && setMenu("X")
	},[isShown])

	function clearCart(){
		setCart([])
		localStorage.removeItem("panier")
	}
	
	return (
		<>
		<div className={`lmj-cart ${!isShown && 'cached'}`}>
			<button className="cacherPanier btn" onClick={()=>setIsShown(!isShown)}>{menu}</button>
			<h2>Panier</h2>
			{cart.length===0 ? "le panier est vide" : null}
			<ul>
				{cart.length>0
				 ? cart.map(element=><li key={element.id}>{element.quantite} {element.name} {element.price} € </li>) : null}
			</ul>
			{cart.length>0 ? `Total : ${calculTotal()}`  : null}
			<br/>
			<button className="btn" onClick={clearCart}>vider panier</button>
		</div>
		</>
	)
}

export default Cart
