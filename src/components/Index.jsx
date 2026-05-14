import { useState, useEffect } from "react"
import axios from "axios"
import PokemonGrid from "./PokemonGrid"

function Index (){
    const [listaPokemon, setListaPokemon] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function obtenerLista(){
        setLoading(true);
        setError(false)
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(function (response){
            setLoading(false)
            setListaPokemon(response.data.results)
        })
        .catch ((err)=>{
            setLoading(false);
            setError("No se pudieron cargar los Pokemon")
        })
    }

    useEffect(()=>{
        obtenerLista()
    },[])

    return(
        <>
            <PokemonGrid listaPokemon={listaPokemon}/>
        </>
    )
}

export default Index