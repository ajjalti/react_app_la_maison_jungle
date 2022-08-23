import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)
	const clicked = ()=>{
		const observations = ['peu','moderement','beaucoup']
		const obs = observations[scaleValue-1]
		careType==='light' ? alert('Cette plante requiert '+obs+' lumière') : alert('Cette plante requiert '+obs+' d\'arrosage')
	}
	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={clicked}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
