function PokemonCard ({pokemon}){
    const urlPartes = pokemon.url.split("/")
    const id = urlPartes[urlPartes.length - 2]
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return(
        <div >
            <img src={imgUrl} alt={pokemon.name} />
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        </div>
    )
}

export default PokemonCard