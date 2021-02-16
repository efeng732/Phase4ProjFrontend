import {useState} from "react";

function Cart ({ carts, games, rentals, setRentals, deleteRental, wallet, setWallet }) {

    const[viewCurrent, setViewCurrent] = useState(false)
    const[viewPast, setViewPast] = useState(false)

   
   
    let currentRentals =[];
    function showCurrent () {
        currentRentals = rentals.filter((rental) => rental.cart.current === true 
        )
    }
    showCurrent()
    
    
    let totalPrice = 0
    currentRentals.map( rental => totalPrice += (rental.game.price * rental.duration))
    
    function handleCurrentClick(){
        setViewCurrent(!viewCurrent)
        // setCurrentCart()
    }

    let currentCart; 
    function setCurrentCart() {
        currentCart = currentRentals.map(rental =>{ 
            return (
                <div>
                    <>
                        <strong>  Game: {rental.game.name}</strong> Price: ${rental.game.price} per week
                        <br></br>
                        Duration: {rental.duration} weeks
                        <br></br>
                        <button onClick={deleteItem} value={rental.game.id}>Remove from cart</button>
                        <br></br>
                    </>
                </div>  
            )
        })
    }
    
    setCurrentCart()
    
    function deleteItem(e) {
        let targetItem = rentals.filter((r) => r.game_id == e.target.value)
        
        const updatedRentals = rentals.filter((r) => r.id !== targetItem[0].id)

        fetch(`http://localhost:4000/rentals/${targetItem[0].id}`, {
            method: "DELETE"
        })
        deleteRental(updatedRentals)
    }
    
    function handlePastClick(){
        setViewPast(!viewPast)
    }

    let pastRentals = [];

    showPast()
    function showPast() {
       pastRentals = rentals.filter((rental) => rental.cart.current === false)
    }

    let pastCart = pastRentals.map(rental => {
        return (
            <>
                <strong> Game: {rental.game.name}</strong>
                <p>Rental Fee: ${rental.game.price * rental.duration}</p>
                <p>Cart Number: {rental.cart.id}</p> <br></br>
            </>
        )
    })

    function handleCheckout() {
        //console.log(totalPrice)
        if (wallet < totalPrice) {
            alert("You need more money in your wallet, or you can remove a rental from your cart!")
        } else {
            setWallet(wallet - totalPrice)
            alert("Success!!! Good luck gaming! ;)")

            const updatedRentals = rentals.map((rental) => {
                return {...rental, cart: {current: false}}
            })

            setRentals(updatedRentals)

        }
    }

    return(
        <div>
            <button onClick={(handleCurrentClick)}>Show my current cart</button>
            <div>
                { viewCurrent ? 
                <div> 
                    <>
                    {currentCart}
                    <br></br>
                    <em>Total price of your cart:</em> ${totalPrice}
                    <button onClick={handleCheckout}>Check out</button>
                    </>
                </div>
                    : null
                }
            </div> 
            <br></br>
            <button onClick={handlePastClick}>Show my past carts</button> 
            <br></br>
            <div>
                { viewPast ? 
                    pastCart : null
                }
            </div>
        </div>
    )
}

export default Cart; 