function ReviewForm() {

   return (
      <div>
         <div className="newReview">
            <h3>This is the review form</h3>
            <form>
               <label htmlFor="title">
                  Title:
                  <input type="text" name="title" placeholder="Enter review title" />
               </label>
            </form>
         </div>

         {<div className="editReview">
            <h3>Edit your review</h3>
         <form>
               <label htmlFor="title">
                  Title:
                  <input type="text" name="title" placeholder="Enter review title" />
               </label>
            </form>

         </div>}
         
      </div>
   )
}

// background color needs to display on entire page

export default ReviewForm