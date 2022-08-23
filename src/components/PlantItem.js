import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light,cart,setCart,price }) {
	  function setData(){
			const plant = cart.find(element=>element.id===id)
			const arr  = cart.filter(element=>element.id!==id)
			plant ? 
			setCart([...arr,{id:plant.id,name:plant.name,quantite:plant.quantite+1,price:plant.price}])
			:setCart([...cart,{id:id,name:name,quantite:1,price:price}])
	}
	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<button className='btn' onClick={setData}>ajouter</button>
		</li>
	)
}

export default (PlantItem)
