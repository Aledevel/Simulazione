import { useState } from "react"

export function LogIn(){

    const UserDefault = "Ciccio"
    const PasswordDefault= "1234"
    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const [error,Seterror]=useState(false)
    const [submitted,setSubmitted]= useState(false)

    function handleUser(event){
        setUser(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    function HandleSubmit(event){
        event.preventDefault()
        if(user !== UserDefault || password !==PasswordDefault){
            Seterror(true)
        }else{
            Seterror(false)
        }
        setSubmitted(true)

    }

    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" value={user} onChange={handleUser}/>
                <input type="password"value={password} onChange={handlePassword}/>
                <button>Submit</button>
            </form>
            {!error && submitted &&<h1>{user}</h1>}
            {error && <h1>errore riprova</h1>}
        </div>
    )
}