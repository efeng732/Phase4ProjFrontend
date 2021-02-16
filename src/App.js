//import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
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
  const[wallet, setWallet] = useState(100)
  const[walletValue, setWalletValue] = useState(0)


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
    const newRentalsArray = [...rentals, newRentalObj]
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

  function deleteReview(updatedReviewsArray) {
    // const deletedReviewsArray = reviews.filter((review) => 
    //   // filter is not working properly, returning the deleted review inside of deletedReviewsArray
    //   // deleted is empty object, there is no idea to compare within filter function
    //   (deleted.id !== review.id)
    // )
    setReviews(updatedReviewsArray)
  }

  function handleWallet(e) {
    e.preventDefault() 
    setWallet(walletValue)
  }

//const me = user[0]
//console.log(me)

return (
    <div className="App">
      <br></br>
      <NavBar />
      <br></br>
      <br></br>
      <WalletWrapper>
        <p>Current wallet: ${wallet}</p>
        <form onSubmit={handleWallet}>
          <label htmlFor="wallet"> Set Current Wallet </label>
          <input 
            type = "number" 
            value={walletValue} 
            onChange={(e) => setWalletValue(e.target.value)}
          />
          <button type="submit">Set!</button>
        </form>
      </WalletWrapper>
      <br></br> 
      <br></br>
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
          <GameShow 
            addRental={addRental} 
            reviews={reviews} 
            addReview={addReview} 
            editReview={editReview} 
            deleteReview={deleteReview} 
            wallet={wallet}
          />
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

const WalletWrapper = styled.div`
  background-color: gray;
  border: solid;
  border-radius: 10px;
  padding: 5px;
  display: inline-block;
`;

export default App;
