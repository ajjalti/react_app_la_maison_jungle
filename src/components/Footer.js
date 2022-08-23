import { useState } from 'react'
import '../styles/Footer.css'
// import Form from './Form'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <input name="email" placeholder="Email" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onBlur={()=>{
                    const error = inputValue.includes("@")===true ? null : "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide."
                    if(error!=null){
                        alert(error)
                    }
                }} />
            </form>
		</footer>
	)
}

export default Footer