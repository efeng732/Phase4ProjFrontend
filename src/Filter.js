
function Filter ({genre, setGenre, games}) {

const genres = games.map(game => {
  return game.genre
})

//console.log(genres )

let unique = [...new Set(genres)]

function handleClick (e) {
  //console.log(e.target.value)
  setGenre(e.target.value)
}



//console.log(unique)
  const genreButtons = unique.map((genre) => {
    const className = genre === setGenre ? "selected" : null;
    return (
      <button
      key={genre}
      value={genre}
      className={className}
      onClick={handleClick}
      >
        {genre} </button>
    )
  }
  
 )

  return(  <div>
        {genreButtons}
        <button value={""} onClick={handleClick}> All Games </button>
    </div> )
}

export default Filter;