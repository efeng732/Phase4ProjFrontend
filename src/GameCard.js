import Review from "./Review.js"
import {useState} from "react";
import { Link } from "react-router-dom"
import GameShow from "./GameShow"
import styled from 'styled-components'

function GameCard({ game, review }) {

    //console.log(review)

    const[showDetails, setShowDetails] = useState(false)
    const {id, name, price, system, genre, rating, image} = game

    function handleShowDetails() {
        setShowDetails( showDetails => !showDetails)
    }

    return(
        <Wrapper className="game-card">
           <h2> {name} </h2>
           <GameImage src = {image} alt = {name} />
           <br></br>
            <Link to={`/gamepage/${id}`}>Rent this game</Link>
            <br></br>
           <button onClick={handleShowDetails}>View more details</button>
        {  showDetails ?   
           (<DetailsList>
                <DetailItems><strong>Price:</strong> ${price} per week</DetailItems>
                <DetailItems><strong>System(s):</strong> {system}</DetailItems>
                <DetailItems><strong>Genre:</strong> {genre}</DetailItems>
                <DetailItems><strong>Rating:</strong> {rating}/100</DetailItems>
           </DetailsList> ) : null
                }           

           {/* <Review review={review}/> */}
        </Wrapper>
    )
}

export default GameCard;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 250px;
    text-align: center;
    margin: 30px;
`

const DetailsList = styled.ul`
    list-style-type: none;
    color: white;
`

const DetailItems = styled.li`
    margin: 5px;
`

const GameImage = styled.img`
   height: 200px;
   width: 150px;
   margin: auto;
   width: 70%;
`