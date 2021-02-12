
function Filter ({genre, setGenre, games}) {

const genres = games.map(game => {
  return game.genre
})

//console.log(genres )

let unique = [...new Set(genres)]

console.log(unique)
  const genreButtons = unique.map((genre) => {
    const className = genre === setGenre ? "selected" : null;
    return (
      <button
      key={genre}
      className={className}
      onClick={() => setGenre(genre)}
      >
        {genre} </button>
    )

  })

  return(  <div>
        {genreButtons}
    </div> )
}

export default Filter;