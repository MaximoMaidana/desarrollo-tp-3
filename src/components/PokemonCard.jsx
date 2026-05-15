import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import traducciones from '../utils/traducciones'

function PokemonCard ({pokemon}){
    const [datosPokemon, setDatosPokemon] = useState(pokemon.types ? pokemon : null)
    
    useEffect(()=>{
        if(!datosPokemon && pokemon.url)
        axios.get(`${pokemon.url}`)
        .then((response)=>{
            setDatosPokemon(response.data)
        })
    },[datosPokemon, pokemon.url])

    if (!datosPokemon) {
        return <div className="card">Cargando...</div>;
    }
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${datosPokemon.id}.png`;
    const numPokedex = `#${datosPokemon.id.toString().padStart(4, "0")}`;
    return (
        <Link to={`/pokemon/${datosPokemon.name}`} className="card-link">
            <div className="card">
                <img src={imgUrl} alt={pokemon.name} />
                <h3>{pokemon.name.toUpperCase()}</h3>
                <p>{numPokedex}</p>
                <div>
                    {datosPokemon.types.map((item) =>{
                        const tipoIngles = item.type.name
                        const tipoEspanol = traducciones[tipoIngles] || tipoIngles
                        return (
                        <span key={tipoIngles}>
                            {tipoEspanol}
                        </span>
                        )
                    })}
                </div>
            </div>
            <div><Link to={`/pokemon/${datosPokemon.name}/movimientos`}>movimientos</Link></div>
        </Link>
       
    )
}

export default PokemonCard