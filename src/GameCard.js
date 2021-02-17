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
           <GameTitle> {name} </GameTitle>
           <GameImage src = {image} alt = {name} />
           <br></br>
            <Link to={`/gamepage/${id}`}><LinkSpan>Rent this game</LinkSpan></Link>
            <br></br>
           <DetailsButton onClick={handleShowDetails}>View more details</DetailsButton>
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
    border-radius: 8px;
    border-color: ivory;
    border-style: outset;
    padding: 5px;
    background-color: white;
    overflow: scroll;
`

const DetailsList = styled.ul`
    list-style-type: none;
    color: black;
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

const DetailsButton = styled.button`
    background-color: #F2A900;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.2s;
    :hover{
        background-color: #2D68C4;
        color: white;
        transition: 0.5s;
    };

    :after:active{
        background-color: blue;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    };
`

const GameTitle = styled.h2`
    color: ivory;
    font-size: 26px;
    text-shadow: -1px -1px 11px black;
    margin-bottom: 15px;
    font-family: Copperplate;
`

const LinkSpan = styled.span` 
    color: ivory;
    font-size: 26px;
    text-shadow: -1px -1px 11px black;
    margin-bottom: 15px;
    font-family: Copperplate;
    cursor: help;
`