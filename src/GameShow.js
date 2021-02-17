import { useParams } from "react-router-dom"
import React, {useEffect, useState} from 'react'
import Review from "./Review"
import styled from 'styled-components'

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
            alert("Game rental added to cart successfully! Check your current cart")
    
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
        deleteReview(updatedReviewsArray)
    }

 //if (!isLoaded) return <h2>Loading...</h2>   ;
    return (
        <Wrapper>
            <RentalWrap>
            {game ? 
                <>
                <GameTitle>{game.name}</GameTitle>
                <GameImage src={game.image} alt={game.name} />
                
                <GameUl>
                    <GameLi>Price per week: {game.price}</GameLi> 
                    <GameLi>System(s): {game.system}</GameLi> 
                    <GameLi>Genre: {game.genre}</GameLi> 
                    <GameLi>Rating: {game.rating}/100</GameLi> 
                </GameUl> 
                </>
                
                : "...loading"
            }

                <form onSubmit={handleRentGame} className="form">
                    <RentThisGame>Rent this game! PLEASE WE'RE BROKE</RentThisGame>
                    <label htmlFor="duration"><strong>Duration(# of weeks)</strong></label>
                    <input 
                        type="number" 
                        name="duration" 
                        placeholder="Choose time of rental" 
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    /> 
                    <br></br>
                <button type="submit"> Rent!</button>
                </form>
                </RentalWrap>
                
                {myReviews.length > 0 ? 
                <div>
                    <form onSubmit={handleEditReview}>
                        <RentThisGame>Edit your review</RentThisGame>
                        <label htmlFor="title"><strong>Title: </strong></label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Review title here!"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
            
                        <br></br>
                        <label htmlFor="content"><strong>Review: </strong></label>
                        <input 
                            type="text" 
                            name="review" 
                            placeholder="This game sucks!"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <br></br>
                        <label htmlFor="idNum"><strong>ID field: </strong></label>
                        <input type="number" name="idNum" value={idNum} onChange={(e) => setIdNum(e.target.value)}/>
                        <br></br>
                        <button type="submit">Submit Review</button>
                    </form>
                    <br></br>
                    <button onClick={handleDeleteReview}>Delete your review</button>
                </div>
                : 
                <form onSubmit={handleReview}>
                    <RentThisGame>Review this game!</RentThisGame>
                    <label htmlFor="title"><strong>Title: </strong></label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Review title here!"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>
                    <label htmlFor="content"><strong>Review: </strong></label>
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
        </Wrapper>
    )
}

export default GameShow 


const Wrapper = styled.div`
    color: white;
    padding-bottom: 20px;
    margin: auto;
    width: 70%
`

const GameTitle = styled.h2`
    font-size: 45px;
    color: ivory;
    text-shadow: -1px -1px 11px cyan;
    font-family: Copperplate;
`

const GameImage = styled.img`
    height: 400px;
    width: 295px;
`

const GameUl = styled.ul`
    list-style-type: none;
    margin: auto;
    width: 50%;
`

const GameLi = styled.li`
    color: ivory;
    text-shadow: -1px -1px 11px cyan;
    font-family: Copperplate;
    font-weight: bold;
    font-size: 30px;
`

const RentThisGame = styled.h3`
    color: ivory;
    text-shadow: -1px -1px 15px deeppink;
    font-family: Copperplate;
    font-size: 72px;
`

const RentalWrap = styled.div`
    border-radius: 25px;
    background-color: #ffffff44;
    padding-bottom: 15px;
    margin: auto;
    width: 70%;
    margin-top: 25px;
`

