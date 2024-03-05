import { useState } from "react";

export function Pokefetch() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);
  const [egg, setEgg] = useState(null);
  const [loading, setLoading]=useState(false)

  function HandleInput(event) {
    setInput(event.target.value);
  }
  async function Fetch(e) {
    e.preventDefault();
    try {
        setLoading(true)
      const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const response = await call.json();
      console.log(response);
      setPokemon(response);
    } catch (error) {
      alert("errore");
      setError(true);
    }finally{
        setLoading(false)
        setError(false)
    }
  }
  async function Fetch2(e) {
    e.preventDefault();
    try {
      const call2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${input}`);
      const response2 = await call2.json();
      console.log(response2);
      setEgg(response2);
    } catch (error) {
      alert("errore");
      setError(true);
    }
  }
  return (
    <form on onSubmit={Fetch}>
      <input type="text" value={input} on onChange={HandleInput} />
      <button>catch</button>
      <div>
        {loading && <h1>Loading...please wait</h1>}
        {error && <h1>c'è stato un errore</h1>}
        {pokemon && !error && (
          <div>
            <img src={pokemon.sprites.front_default} alt="nient" />
            <ul>
              <li>{pokemon.name}</li>
              <li>{pokemon.base_experience}</li>
              <li>
                {pokemon.abilities.map((pokemon) => (
                  <li>{pokemon.ability.name}</li>
                ))}
              </li>
            </ul>
            <button onClick={Fetch2}>more info</button>
            <div>
              {error && <h1>c'è stato un errore</h1>}
              {egg && !error && (
                <div>
                  <ul>
                    <img src={egg.egg_groups[0].url}></img>
                    <li>
                      {egg.egg_groups.map((egg) => (
                        <p key={egg.name}>{egg.name}</p>
                      ))}
                    </li>
                    <li>{egg.color.name}</li>
                    <li>{egg?.shape.name}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
