import {useState} from "react";
import styled from 'styled-components'

function Cart ({ carts, games, rentals, setRentals, deleteRental, wallet, setWallet }) {

    const[viewCurrent, setViewCurrent] = useState(false)
    const[viewPast, setViewPast] = useState(false)
    const[scammed, setScammed] = useState(false)

   
   
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
                <CartItem>
                    <>
                        <strong>  Game: {rental.game.name}</strong> 
                        <br></br>
                        <br></br>
                        Price: ${rental.game.price} per week
                        <br></br>
                        Duration: {rental.duration} weeks
                        <br></br>
                        <br></br>
                        <button onClick={deleteItem} value={rental.game.id}>Remove from cart</button>
                        <br></br>
                        <br></br>
                    </>
                </CartItem>  
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
            <PastCartItem>
            <>
                <strong> Game: {rental.game.name}</strong>
                <p>Rental Fee: ${rental.game.price * rental.duration}</p>
                <p>Cart Number: {rental.cart.id}</p> <br></br>
            </>
            </PastCartItem>
        )
    })

    function handleCheckout() {
        //console.log(totalPrice)
        if (wallet < totalPrice) {
            alert("You need more money in your wallet, or you can remove a rental from your cart!")
        } else {
            setWallet(wallet - totalPrice)
            alert("Success!!! Good luck gaming! ;)")
            setScammed(true)

            const updatedRentals = rentals.map((rental) => {
                return {...rental, cart: {current: false}}
            })

            setRentals(updatedRentals)

        }
    }

    return(
        <Wrapper>
            <CurrentCartBtn onClick={(handleCurrentClick)}>Show my current cart</CurrentCartBtn>
            <CurrentCart>
                { viewCurrent ? 
                <div> 
                    <>
                    {currentCart}
                    <br></br>
                    <h2>
                    <em>Total price of your cart:</em> ${totalPrice}
                    </h2>
                    <br></br>
                    <button onClick={handleCheckout}>Check out</button>
                    </>
                </div>
                    : null
                }
            </CurrentCart> 
            <br></br>
            <PastCartBtn onClick={handlePastClick}>Show my past carts</PastCartBtn> 
            <br></br>
            <PastCart>
                { viewPast ? 
                    pastCart : null
                }
            </PastCart>
            {scammed ? <img src="https://i.imgflip.com/1kdb7h.jpg" alt="Sucker!!!!"/> :null }
        </Wrapper>
    )
}

export default Cart; 

const Wrapper = styled.div`
    padding-bottom: 400px;
    color: white;
`



const CurrentCartBtn = styled.button`
    margin-top: 50px;
    margin-bottom: 20px;
`

const CurrentCart = styled.div`
    border-bottom: 15px double red;
    padding-bottom: 15px;
`

const CartItem = styled.div`
    margin: auto;
    width: 40%;
    margin-bottom: 10px;
    border: ridge;
    border-radius: 15px;
    background-color: #ffffff44;
    padding-top: 10px;
    border-color: yellow; 
    text-shadow: -1px -1px 15px seagreen;
    color: ivory;
    font-family: Copperplate;
    font-size: 20px;
`

const PastCartItem = styled.div` 
    margin: auto;
    width: 40%;
    margin-bottom: 10px;
    border: ridge;
    border-radius: 15px;
    background-color: #ffffff44;
    padding-top: 10px;
    border-color: cyan; 
    text-shadow: -1px -1px 15px seagreen;
    color: ivory;
    font-family: Copperplate;
    font-size: 20px;

`
const PastCartBtn = styled.button`
    margin-bottom: 20px;
`

const PastCart = styled.div`
    margin-bottom: 100px;
`

