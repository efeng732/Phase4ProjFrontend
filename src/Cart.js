import {useState} from "react";

function Cart ({ carts, games }) {

    const[viewCurrent, setViewCurrent] = useState(false)
    const[viewPast, setViewPast] = useState(false)

    const currentCartIds = []
     carts.map((cart) => {
        if(cart.current == true ) 
        {
            currentCartIds.push(cart.id)
        }
    })

    const pastCartIds = []
    carts.map((cart) => {
        if(cart.current == false) 
        {
            pastCartIds.push(cart.id)
        }
    })
// noob hardcoded function for now lol 
    let currentGames = [] 
    function showCurrent () {
        games.map((game) => {
            if (game.rentals.length) {
              for(let i =0; i<game.rentals.length; i++) {
                  if(game.rentals[0].cart_id == 2) {
                      currentGames.push(game)
                  }
              }
            }
        })

    }
    showCurrent()
    //console.log(currentGames)

    let pastGames = []
    function showPast() {
        games.map((game) => {
            if(game.rentals.length) {
                for(let i =0; i<game.rentals.length; i++) {
                    if(game.rentals[0].cart_id == 1 ) {
                        pastGames.push({...game, cartnumber: 1})
                    }
                    else if(game.rentals[0].cart_id == 3) {
                        pastGames.push({...game, cartnumber: 3})
                    }
                }
            }
        })
        
    }
    showPast()
    //console.log(pastGames)

    function handleCurrentClick(){
        setViewCurrent(!viewCurrent)
    }

    let currentCart = currentGames.map(game =>{ 
        return (
            <>
              <strong>  Game: {game.name}</strong> Price:  
                ${game.price} per week
                <br></br>
            </>
        )})

    function handlePastClick(){
        setViewPast(!viewPast)
    }

let pastCart = pastGames.map(game => {
    return (
        <>
            <strong> Game: {game.name}</strong> Rental Fee:
            
            ${game.price * game.rentals[0].duration} Cart Number : 
            
            {game.cartnumber} <br></br>
        </>
    )
})



    return(
        <div>
            <button onClick={(handleCurrentClick)}>Show my current cart</button>
            <div>
                { viewCurrent ? currentCart : null}
            </div>
                      
            <br></br>

            <button onClick={handlePastClick}>Show my past carts</button> 
            <br></br>
            <div>
                {viewPast ? pastCart : null}
            </div>
        </div>
    )
}

export default Cart; 