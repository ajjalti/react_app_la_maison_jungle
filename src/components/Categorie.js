import React from 'react'
import { plantList } from '../datas/PlantList'
import '../styles/Categorie.css'
import '../styles/Cart.css'

export default function Categorie({setSearch,search}) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
  return (
<div className="lmj-categories">
<select className="lmj-categories-select" onChange={(e)=>
    setSearch(e.target.value)
    } value={search}>
    <option value="">choix categorie</option>
    {categories.map((cat) => (
        <option key={cat}>{cat}</option>
    ))}
    </select>
    <button className='btn' onClick={()=>setSearch("")}>Réinitialiser</button>
</div>
  )
}
