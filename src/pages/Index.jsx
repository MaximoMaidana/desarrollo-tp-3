import { useState, useEffect } from "react"
import axios from "axios"
import PokemonGrid from "../components/PokemonGrid"
import SearchBar from "../components/searchBar"
import Paginacion from "../components/Paginacion"

function Index (){
    const [listaPokemon, setListaPokemon] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    const [nextUrl, setNextUrl] = useState(null)
    const [previousUrl, setPreviousUrl] = useState(null)

    function obtenerLista(){
        setLoading(true);
        setError(false)
        axios.get(`${url}`)
        .then((response) =>{
            setLoading(false)
            setListaPokemon(response.data.results)
            setPreviousUrl(response.data.previous)
            setNextUrl(response.data.next)
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
            setPreviousUrl(null)
            setNextUrl(null)
        })
        .catch((err) =>{
            setLoading(false)
            setError("No se encontro el Pokemon buscado")
        })
    }

    function cambiarPagina(newUrl){
        if(newUrl === null){
            return
        }
        setUrl(newUrl)
    }

    useEffect(()=>{
        obtenerLista()
    },[url])
    
    return(
        <>
            <SearchBar obtenerPokemon={obtenerPokemon} obtenerLista={obtenerLista}/>

            <Paginacion nextUrl={nextUrl} previousUrl={previousUrl} cambiarPagina={cambiarPagina}/>

            {loading && <p>Cargando datos...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <PokemonGrid listaPokemon={listaPokemon}/>}

            <Paginacion nextUrl={nextUrl} previousUrl={previousUrl} cambiarPagina={cambiarPagina}/>
        </>
    )
}   

export default Index