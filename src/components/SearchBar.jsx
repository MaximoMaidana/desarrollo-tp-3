import { useState } from "react"
function SearchBar({obtenerPokemon, obtenerLista}){
    const [pokemon, setPokemon] = useState("")

    const manejarBusqueda = (e) =>{
        e.preventDefault()

        if(pokemon.trim()===""){
            obtenerLista(); 
            return; 
        }

        obtenerPokemon(pokemon.trim().toLowerCase())
    }
    return(
        <form onSubmit={manejarBusqueda}>
            <input 
                type="text" 
                id="pokemon" 
                placeholder="Ingrese el nombre o id"
                value={pokemon}
                onChange={(e)=> setPokemon(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default SearchBar