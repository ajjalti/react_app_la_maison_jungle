import { plantList } from '../datas/PlantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import React from 'react'

function ShoppingList({cart,setCart,search}) {

		const data =  plantList.filter((element)=>element.category===search)
		return data.length===0?
		(<div>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light,price }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						cart={cart}
						setCart={setCart}
						price={price}
					/>
				))}
			</ul>
		</div>
	):
	(<div>
		<ul className='lmj-plant-list'>
			{data.map(({ id, cover, name, water, light,price }) => (
				<PlantItem
					id={id}
					cover={cover}
					name={name}
					water={water}
					light={light}
					cart={cart}
					setCart={setCart}
					price={price}
				/>
			))}
		</ul>
	</div>
)
}

export default ShoppingList
