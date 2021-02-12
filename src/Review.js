function Review ({ review }) {
    //console.log(review)



    return (
        <div>
            {review.length > 0 ? 
            <>
            <h3>{review[0].title}</h3>
            <p>{review[0].content}</p>
            </>
            : "No Reviews have been left for this game" 
            }
        </div>
    )
}

export default Review; 