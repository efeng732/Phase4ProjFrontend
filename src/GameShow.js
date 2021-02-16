import { useParams } from "react-router-dom"
import React, {useEffect, useState} from 'react'
import Review from "./Review"

function GameShow({ 
    addRental, 
    reviews, 
    addReview, 
    editReview, 
    deleteReview,
    wallet
}) {

    const[duration, setDuration] = useState(0)
    const[title, setTitle] = useState("")
    const[content, setContent] = useState("")
    const[game, setGame] = useState(null)
    const[idNum, setIdNum] = useState("")
    //const[isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/games/${id}`)
        .then(res => res.json())
        .then(data => {
            setGame(data)
        })
    }, [id])

//    useEffect(() =>  {
//    fetch(`http://localhost:4000/reviews`)
//    .then( res => res.json())
//    .then( data => {
//        setReviews ( data)
//    })
//    },[])

    function handleRentGame(e){
        e.preventDefault()
        if(duration * game.price > wallet) {
            alert(
                "too expensive!"
            )
        }
        else {
            const newRental = {
                duration: parseInt(duration), 
                cart_id: 2, 
                game_id: parseInt(id) 
            };

            fetch(`http://localhost:4000/rentals`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(newRental)
            })
            .then(res => res.json())
            .then(newRentalObj => {
                addRental(newRentalObj)
            }) 
        }
    }

    // const gameReviews = reviews.filter(review => 
    //     id === review.game_id 
    // )
    const myReviews = reviews.filter( (review) => review.game_id == id )



    function handleReview(e) {
        e.preventDefault()
        const newReview = {
            title: title, 
            content: content, 
            user_id: 1, 
            game_id: parseInt(id)
        }

        fetch(`http://localhost:4000/reviews`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(newReviewObj => {
            addReview(newReviewObj)
        })
        setTitle("")
        setContent("")
     }
    

    function handleEditReview(e) {
        e.preventDefault()
        const updatedReview = {
            title: title, 
            content: content,
            user_id : 1,
            game_id: parseInt(id)
        }

        fetch(`http://localhost:4000/reviews/${idNum}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(updatedReview)
        })
        .then(res => res.json())
        .then(updatedReviewObj => {
            editReview(updatedReviewObj)
        })
        setTitle("")
        setContent("")
     }

    function handleDeleteReview() {
        const updatedReviewsArray = reviews.filter((review) =>
            (myReviews[0].id !== review.id) 
        )
        fetch(`http://localhost:4000/reviews/${myReviews[0].id}`, {
            method: "DELETE"
        })
        // no need for return object here -> 
        // 1. we can get updated array by filtering through reviews array before sending delete request
        // 2. then pass updated reviews to app through deleteReview function, to set reviews state variable there
        // .then( res => res.json())
        // .then(deleted => {
        //     deleteReview(deleted)
        // })
        deleteReview(updatedReviewsArray)
    }

 //if (!isLoaded) return <h2>Loading...</h2>   ;
    return (
        <div>
            {game ? 
                <div>
                <h2>{game.name}</h2>
                <img src={game.image} alt={game.name} />
                <ul>
                    <li>Price per week: {game.price}</li> 
                    <li>System(s): {game.system}</li> 
                    <li>Genre: {game.genre}</li> 
                    <li>Rating: {game.rating}/100</li> 
                </ul> 
                </div> 
                : "...loading"
            }

                <form onSubmit={handleRentGame} className="form">
                    <h3>Rent this game!</h3>
                    <label htmlFor="duration">Duration(# of weeks)</label>
                    <input 
                        type="number" 
                        name="duration" 
                        placeholder="Choose time of rental" 
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    /> 
                <button type="submit"> Rent!</button>
                </form>

                {myReviews.length > 0 ? 
                <div>
                    <form onSubmit={handleEditReview}>
                        <h3>Edit your review</h3>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Review title here!"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br></br>
                        <label htmlFor="content">Review</label>
                        <input 
                            type="text" 
                            name="review" 
                            placeholder="This game sucks!"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <br></br>
                        <label htmlFor="idNum">ID field</label>
                        <input type="number" name="idNum" value={idNum} onChange={(e) => setIdNum(e.target.value)}/>
                        <button type="submit">Submit Review</button>
                    </form>
                    <br></br>
                    <button onClick={handleDeleteReview}>Delete your review</button>
                </div>
                : 
                <form onSubmit={handleReview}>
                    <h3>Review this game!</h3>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Review title here!"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>
                    <label htmlFor="content">Review</label>
                    <input 
                        type="text" 
                        name="review" 
                        placeholder="This game sucks!"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <br></br>
                    <button type="submit">Submit Review</button>
                </form>
                }
            
                <ul>
                <Review review={myReviews}/> 
                </ul>
        </div>
    )
}

export default GameShow 