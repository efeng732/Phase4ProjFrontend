import GameCard from "./GameCard.js"
import Cart from "./Cart.js"
import {useEffect, useState} from "react"
import styled from 'styled-components'
// import carts from './data/cart_data.js'
// import rentals from './data/rental_data.js'

function GameList({ games, reviews }){
    const[carts, setCarts] = useState([])
    // const [rentals, setRentals] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/carts')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, [])

    // useEffect(() => {
    //     fetch('http://localhost:4000/carts')
    //     .then(res => res.json())
    //     .then(data => setRentals(data))
    // }, [])
    
    const gameComponents = games.map(game => {
        return (<GameCard 
            key={game.id} 
            game={game} 
            // review={reviews.filter(review => 
            //     game.id === review.game_id 
            // )}  
        />)
    })
    
    return(
        <Wrapper>
           {gameComponents}
        </Wrapper>
    )
}

export default GameList;



const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    padding-bottom: 500px;
`