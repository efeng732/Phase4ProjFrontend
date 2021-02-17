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
import Wallet from './Wallet.js'
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
  
 

return (
    <Wrapper>
      <Logo>GameBuster</Logo>
      <br></br>
      <NavBar />
      <br></br>
      <br></br>
      <br></br> 
      <br></br>
      <Switch>
        <Route exact path="/">
          <Login history={props.history} setUser={setUser} user={user} />
        </Route>

        <Route exact path="/gamelist">
          <Wallet wallet={wallet} setWallet={setWallet} walletValue={walletValue} setWalletValue={setWalletValue} />
          <br></br>
          <br></br>
          <Search search={search} setSearch={setSearch} />
          <Filter games={games} genre={genre} setGenre={setGenre}/>
          <GameList games={gamesToDisplay}  />
        </Route>
        
        <Route exact path="/reviewform">
          <ReviewForm />
        </Route>

        <Route exact path="/carts">
          <Wallet 
            wallet={wallet} 
            setWallet={setWallet} 
            walletValue={walletValue} 
            setWalletValue={setWalletValue}
          />
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
          <Wallet 
            wallet={wallet} 
            setWallet={setWallet} 
            walletValue={walletValue} 
            setWalletValue={setWalletValue}
          /> 
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
  background-image: url("https://bashooka.com/wp-content/uploads/2018/04/scg-canvas-background-animation-22.jpg");
  
`

// UCLA blue -> #2D68C4
const Logo = styled.div`
  color: magenta;
  font-size: 90px;
  text-shadow: -15px 5px 17px #00ffa6;
  margin-bottom: 15px;
  font-family: Copperplate;
`



// Powder blue -> #0073cf
// UCLA Gold -> #F2A900


export default withRouter(App);

