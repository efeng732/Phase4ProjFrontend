import GameCard from "./GameCard.js"
import Cart from "./Cart.js"
import carts from './data/cart_data.js'
import rentals from './data/rental_data.js'

function GameList({ games, reviews }){

    

    const gameComponents = games.map(game => {
        return (<GameCard 
            key={game.id} 
            game={game} 
            review={reviews.filter(review => 
                game.id === review.game_id 
            )}  
        />)
    })
    
    return(
        <div>
            
           {gameComponents}
           
            <Cart carts={carts} rentals={rentals}/>
        </div>
    )
}

export default GameList;