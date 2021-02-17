import styled from "styled-components"

function Search({ search, setSearch,  }) {

   function handleSearch(e) {
      setSearch(e.target.value)
      //console.log(search)
   }

   return (
      <Wrapper>
         Search:
         <input className ="searchbar" value={search} onChange={handleSearch}/>
      </Wrapper>
   )
}


// UCLA blue -> #2D68C4
// Powder blue -> #0073cf
// UCLA Gold -> #F2A900
const Wrapper = styled.div`
   display: inline-block; 
   color: white;
   background-image: linear-gradient(180deg, #2D68C4, #0073cf);  
   border-style: outset;
   border-color: #F2A900;
   border-radius: 15px;
   padding: 15px;
   margin-bottom: 20px;
`

export default Search

