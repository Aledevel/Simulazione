import { useEffect, useState } from "react";
import { Card } from "./card";

export function FetchData(){
    const[user,Setuser]=useState([])

    async function fetcher(){
        const call = await fetch(`https://random-data-api.com/api/users/random_user?size=4`);
        const response = await call.json();
        Setuser(response)
    }
    useEffect(()=>{fetcher()},[])

    return(
        <div>
          <Card user={user}/>
        </div>
    )
}