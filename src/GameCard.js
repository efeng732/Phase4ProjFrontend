import Review from "./Review.js"
import {useState} from "react";
import { Link } from "react-router-dom"
import GameShow from "./GameShow"

function GameCard({ game, review }) {

    //console.log(review)

    const[showDetails, setShowDetails] = useState(false)
    const {id, name, price, system, genre, rating, image} = game

    function handleShowDetails() {
        setShowDetails( showDetails => !showDetails)
    }

    return(
        <div className="game-card">
           <h2> {name} </h2>
           <img src = {image} alt = {name} height="200px" width="150px"/>
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
         </div>
    )
}

export default GameCard;