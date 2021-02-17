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
           (<ul>
            <li><strong>Price:</strong> ${price} per week</li>
            <li><strong>System(s):</strong> {system}</li>
            <li><strong>Genre:</strong> {genre}</li>
            <li><strong>Rating:</strong> {rating}/100</li>
           </ul> ) : null
                }           

           {/* <Review review={review}/> */}
        </Wrapper>
    )
}

export default GameCard;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 280px;
    width: 250px;
    overflow: scroll;
    border-style: outset;
    border-color: red;
    background-image: linear-gradient(white, red);
    padding: 15px;
    margin: 20px;
`

const GameImage = styled.img`
   height: 200px;
   width: 150px;
`