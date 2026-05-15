import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import TablaMovimientos from "../components/TablaMovimientos"

function Movimientos (){
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [version, setVersion] = useState('scarlet-violet')
    const [metodo, setMetodo] = useState('level-up')
    const [movimientos, setMovimiento] = useState([])
    const { name } = useParams(); 

    function obtenerPokemon(){
        setLoading(true)
        setError(false)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            setLoading(false)
            setPokemon(response.data)
        })
        .catch((err)=>{
            setLoading(false)
            setError("No se pudo cargar el Pokemon")
        })
    }

    function obtenerMovimientosFiltrados(){
        if (!pokemon) return;

        setMovimiento (()=>{
            const resultado = pokemon.moves.filter (m =>{
                return m.version_group_details.some(detalle => 
                    detalle.version_group.name === version &&
                    detalle.move_learn_method.name === metodo
                )   
            })
            return resultado
        })
    }

    useEffect(()=>{
        obtenerPokemon()
    }, [name])

    useEffect(()=>{
        obtenerMovimientosFiltrados()
    }, [pokemon, version])


    return(
        <div>
            <h1>Movimientos de {name}</h1>
            <TablaMovimientos 
                movimientos={movimientos} 
                version={version}
                metodo={metodo}
            />
        </div>
    )
}

export default Movimientos