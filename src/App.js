//import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
//components
import Search from './Search.js'
import Filter from './Filter.js'
import NavBar from './NavBar.js'
import GameList from './GameList.js'
import ReviewForm from './ReviewForm.js'
import Cart from './Cart'
import GameShow from './GameShow.js'
import Login from './Login.js'
import {useState, useEffect} from "react"


function App(props) {

  const[search, setSearch] = useState ("")
  const[genre, setGenre] = useState("")
  const[games, setGames] = useState([])
  const[reviews, setReviews] = useState([])
  const[carts, setCarts] = useState([])
  const[user, setUser] = useState(null)
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
    fetch('http://localhost:4000/me')
    .then(res => res.json())
    .then(data => setUser(data))
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
    setReviews(updatedReviewsArray)
  }

  function deleteRental(updatedRentals) {
    setRentals(updatedRentals)
  }
  
  function handleWallet(e) {
    e.preventDefault() 
    setWallet(walletValue)
  }

return (
    <Wrapper>
      <Logo>GameBuster</Logo>
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
        <Route exact path="/">
          <Login history={props.history} setUser={setUser} user={user} />
        </Route>

        <Route exact path="/gamelist">
          <Search search={search} setSearch={setSearch} />
          <Filter games={games} genre={genre} setGenre={setGenre}/>
          <GameList games={gamesToDisplay}  />
        </Route>
        
        <Route exact path="/reviewform">
          <ReviewForm />
        </Route>

        <Route exact path="/carts">
          <Cart 
            carts={carts} 
            games={games} 
            rentals={rentals} 
            setRentals={setRentals}
            deleteRental={deleteRental} 
            wallet={wallet}
            setWallet={setWallet}
          />
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
    </Wrapper>
  );
}

// dont forget the login page!!!
// remove all existing styles and work from the top to the bottom of the component tree
// re-do all styles starting with app
// make sure all elements are lined up as desired and consistent where necessary
// remeber that certain styles may be passed down to children

const Wrapper = styled.div`
  text-align: center;
  background-color: #3284BF;
`

// UCLA blue -> #2D68C4
const Logo = styled.div`
  color: #F2A900;
  font-size: 30px;
  text-shadow: 3px 3px black;
  margin-bottom: 15px;
`

// Powder blue -> #0073cf
// UCLA Gold -> #F2A900
const WalletWrapper = styled.div`
  color: white;
  border-color: #F2A900;
  border-style: outset;
  border-radius: 20px;
  background-image: linear-gradient(180deg, #2D68C4, #0073cf);
  display: inline-block;
  text-align: center;
  padding: 15px;
`

export default withRouter(App);

