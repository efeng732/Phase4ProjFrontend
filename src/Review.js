import styled from 'styled-components'

function Review ({ review }) {
    //console.log(review)


    return (
        <Wrapper>
            <ReviewHeader>Reviews</ReviewHeader>
            {review.length > 0 ? 
            <>
            <h3>{review[0].title}</h3>
            <h4>Review ID Number: {review[0].id}</h4>
            <p>{review[0].content}</p>
            
            </>
            : "No Reviews have been left for this game" 
            }
        </Wrapper>
    )
}

export default Review; 

const Wrapper = styled.div`
    margin: auto;
    width: 95%;
    padding-top: 23px;
    color: ivory;
    text-shadow: -1px -1px 11px cyan;
    font-family: Copperplate;
    font-size: 24px;
`

const ReviewHeader = styled.h2`
    font-size: 55px;
`

