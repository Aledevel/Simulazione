export function Card({user}){
    return(
        <>
        {user.map((user)=>(
            <div key={user.id}> 
            <h1>{user.first_name}</h1> 
            <h2>{user.last_name}</h2> 
            <h3>{user.email}</h3>
            <h4>{user.address.city}</h4>
            <h4>{user.address.state}</h4>
            <img src={user.avatar} alt="hola" />
            </div>
        ))}
        </>
    )
}