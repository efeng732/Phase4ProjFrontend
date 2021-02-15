//import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom"
//data
// import users from './data/user_data.js'
// import games from './data/game_data.js'
// import reviews from './data/review_data.js'

//components
import Search from './Search.js'
import Filter from './Filter.js'
import NavBar from './NavBar.js'
import GameList from './GameList.js'
import ReviewForm from './ReviewForm.js'
import Cart from './Cart'
import GameShow from './GameShow.js'
import {useState, useEffect} from "react"


function App() {
  

  const[search, setSearch] = useState ("")
  const[genre, setGenre] = useState("")
  const[games, setGames] = useState([])
  const[reviews, setReviews] = useState([])
  const[carts, setCarts] = useState([])
  const[user, setUser] = useState([])
  const[rentals, setRentals] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/games')
    .then( res => res.json())
    .then(data => {
      //console.log(data)
      setGames(data) }
      )
  } ,[])

  useEffect(() => {
    fetch('http://localhost:4000/reviews')
    .then( res => res.json())
    .then(data => {
      //console.log(data)
      setReviews(data) }
      )
  } ,[])

  useEffect(() => {
    fetch('http://localhost:4000/carts')
    .then(res => res.json())
    .then(data => setCarts(data))
}, [])

useEffect(() => {
  fetch('http://localhost:4000/users')
  .then(res => res.json())
  .then(setUser
  )
}, [])

useEffect(() => {
  fetch(`http://localhost:4000/rentals`)
  .then( res => res.json())
  .then(data => setRentals(data))
}, [])

  const gamesToDisplay = games.filter((game) => {
    return ( genre.length == 0 ? 
  game.name.toLowerCase().includes(search.toLowerCase()) : 
  (game.name.toLowerCase().includes(search.toLowerCase()) && game.genre == genre)
  )
})


//Add Rental 

function addRental(newRentalObj) {
  const newRentalsArray = [newRentalObj, ...rentals]
  setRentals(newRentalsArray)
  setGames([...games])

}

function addReview(newReviewObj) {
  const newReviewsArray = [newReviewObj, ...reviews]
  setReviews(newReviewsArray)
  return reviews
}

function editReview(updatedReviewObj) {
  const updatedReviewsArray = reviews.map((review) => review.id === updatedReviewObj.id? updatedReviewObj : review)
  setReviews(updatedReviewsArray)
}

function deleteReview(deleted) {
  const deletedReviewsArray = reviews.filter((review) => review.id !== deleted.id)
  setReviews(deletedReviewsArray)
}

const me = user[0]
//console.log(me)

return (
    <div className="App">
      
      <p>Current wallet: ${me ? me.wallet : null }</p>
      <NavBar />
      <br></br>
      <br></br>

      <p></p>
      <Switch>

        <Route exact path="/gamelist">
          <Search search={search} setSearch={setSearch} />
          <Filter games={games} genre={genre} setGenre={setGenre}/>
          <GameList games={gamesToDisplay}  />
        </Route>
        
        <Route exact path="/reviewform">
          <ReviewForm />
        </Route>

        <Route exact path="/carts">
          <Cart carts={carts} games={games}/>
        </Route>

        <Route exact path="/gamepage/:id">
          <GameShow addRental={addRental} reviews={reviews} addReview={addReview} editReview={editReview} deleteReview={deleteReview}/>
        </Route>

      </Switch>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
