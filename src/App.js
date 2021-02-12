import logo from './logo.svg';
import './App.css';
//data
import users from './data/user_data.js'
import games from './data/game_data.js'
import reviews from './data/review_data.js'

//components
import Search from './Search.js'
import Filter from './Filter.js'
import NavBar from './NavBar.js'
import GameList from './GameList.js'
import {useState} from "react"




function App() {

  const[search, setSearch] = useState ("")
  const[genre, setGenre] = useState("Fighting")

  const gamesToDisplay = games.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Search search={search} setSearch={setSearch} />
      <NavBar />
      <Filter games={games} genre={genre} setGenre={setGenre}/>
      <GameList games={gamesToDisplay} reviews={reviews} />
    </div>
  );
}

export default App;
