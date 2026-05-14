import { useState, useEffect } from "react"
import axios from "axios"
import PokemonGrid from "./PokemonGrid"
import SearchBar from "./searchBar"

function Index (){
    const [listaPokemon, setListaPokemon] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function obtenerLista(){
        setLoading(true);
        setError(false)
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((response) =>{
            setLoading(false)
            setListaPokemon(response.data.results)
        })
        .catch ((err)=>{
            setLoading(false);
            setError("No se pudieron cargar los Pokemon")
        })
    }

    function obtenerPokemon(pokemon){
        setLoading(true)
        setError(false)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) =>{
            setLoading(false)
            setListaPokemon([response.data])
        })
        .catch((err) =>{
            setLoading(false)
            setError("No se encontro el Pokemon buscado")
        })
    }

    useEffect(()=>{
        obtenerLista()
    },[])
    

    return(
        <>
            <SearchBar obtenerPokemon={obtenerPokemon} obtenerLista={obtenerLista}/>
            {loading && <p>Cargando datos del laboratorio...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <PokemonGrid listaPokemon={listaPokemon}/>}
        </>
    )
}   

export default Index