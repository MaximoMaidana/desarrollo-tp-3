import { use, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                    {datosPokemon.types.map((item) =>(
                        <span key={item.type.name}>{item.type.name}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default PokemonCard