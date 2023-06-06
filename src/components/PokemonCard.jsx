import './PokemonCard.css'



function PokemonCard({pokemon}) {
  console.log(PokemonCard)
    return (
        <>
        <figure className="card">
            {pokemon.imgSrc != null ? <img className="card-img" src={pokemon.imgSrc} alt = {pokemon.name}/>
                                    :<p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
        </>
    );
  }
  
  export default PokemonCard