import {useState} from "react";

function Cart ({ carts, rentals }) {

    const[viewCart, setViewCart] = useState(true)

    function toggleCarts() {
        setViewCart (viewCart => !viewCart)
    }
    const currentCart = []
    const pastCart = []

    function getCarts () {
        rentals.map((rental => {
            if(rental.cart_id == 2 ) {
                currentCart.push(rental)
            }
            else {
                pastCart.push(rental)
            }
        }
        ))
        
        //console.log(currentCart)
        //console.log(pastCart)
    }

    getCarts () 

   
    

   // console.log(carts)
    //console.log(rentals)
    return(
        <div>
            { viewCart ? 
            <button onClick={toggleCarts}>Show my current cart</button>  :
            <button onClick={toggleCarts}>Show my past carts</button>}
            <br></br>
        My Cart: NEED SERIALIZERS 
        </div>
    )
}

export default Cart; 