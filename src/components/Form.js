import React ,{useState} from 'react'
// import {useForm} from 'react-hook-form'

function Form(){

    const [data,setData] = useState([])
    const [counter,setCounter]= useState(0)
    const[err,setErr]=useState("")
    // const [donne,setDonne] = useForm()
    return (
        <div>
            <form onSubmit={(e)=>{
            e.preventDefault();
            setData(data=>[...data,{id:counter,name:e.target['second'].value}])
            // setData(data=>data.concat(donne))
            setCounter(counter+1)
            }}>
    <input type="text"  name="second" onChange={(e)=>{
            (e.target.value.length>10 && setErr("le mot et trop long"))|| (e.target.value.length<10 && setErr("le mot et valid"))
    }}/>
    <p>{err}</p>
    <input type="submit" value="envoyer"/>
        </form>
        <ul>
            {data.map(({name},index)=> <li key={index}>{name}</li>)}
        </ul>
        </div>
    )
}

export default Form