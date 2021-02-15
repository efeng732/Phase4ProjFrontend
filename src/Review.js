function Review ({ review }) {
    //console.log(review)


    return (
        <div>
            <h2>Reviews</h2>
            {review.length > 0 ? 
            <>
            <h3>{review[0].title}</h3>
            <h4>Review ID Number: {review[0].id}</h4>
            <p>{review[0].content}</p>
            
            </>
            : "No Reviews have been left for this game" 
            }
        </div>
    )
}

export default Review; 