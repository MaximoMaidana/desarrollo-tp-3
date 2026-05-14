import PokemonCard from "./PokemonCard"

function PokemonGrid({listaPokemon}){
    console.log(listaPokemon)
    return(
        <div>
            {listaPokemon.length > 0 ? (
                listaPokemon.map((pokemon)=>
                    <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                )
            ): (
                <p>No se encontraron mov</p>
            )}
        </div>
    )
}

export default PokemonGrid