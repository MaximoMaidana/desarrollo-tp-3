function PokemonCard ({pokemon}){
    let id;

    if (pokemon.id) {
        id = pokemon.id;
    } else {
        const urlPartes = pokemon.url.split("/");
        id = urlPartes[urlPartes.length - 2];
    }

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="card">
            <img src={imgUrl} alt={pokemon.name} />
            <h3>{pokemon.name.toUpperCase()}</h3>
        </div>
    );
}

export default PokemonCard