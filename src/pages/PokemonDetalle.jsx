import {useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { URL_BASE_API } from "../utils/constantes";
import { StatsBlock } from "../components/StatsBlock.jsx";

function PokemonDetalle() {
    const { name } = useParams(); //lee :name de la url
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${URL_BASE_API}/${name}`)
            .then((response) => {
                setPokemonData(response.data);
            })
            .catch((error) => {
                console.error("Error obteniendo datos del Pokemon: ", error);
                
            })
            .finally(() => {
                setLoading(false);
            });

    }, [name]);

    if (loading) return <div className="loading">Cargando detalles...</div>;
    if (!pokemonData) return <div className="error">Pokémon no encontrado</div>;
    
    
    return(
        <div className="detalle-pokemon">
            <h2>{pokemonData.name.toUpperCase()}</h2>
            
            <div className="detail-layout">
                {/* Derecha: Data Blocks */}
                <div className="left-column">
                    <StatsBlock stats={pokemonData.stats} />
                    
                    <div className="placeholder-card">
                        <h3>Perfil de Entrenamiento (Próximamente)</h3>
                        {/* recibe pokemonData.abilities y pokemonData.base_experience */}
                    </div>
                </div>

                {/* Izquierda: Perfil al costado */}
                <div className="right-column">
                    <div className="placeholder-card">
                        <h3>Ficha del Pokémon (Próximamente)</h3>
                        {/* recibe pokemonData.sprites, weight, height, y cries */}
                    </div>
                </div>
            </div>

            {/* Evolución */}
            <div className="evolution-section">
                <h3>Cadena Evolutiva (Próximamente)</h3>
            </div>
        </div>
    );
}


export default DetallePokemon;