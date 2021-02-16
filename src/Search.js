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

const Wrapper = styled.div`
   background-color: cyan;
   border: solid;
   border-color: magenta;
   border-radius: 10px;
   display: inline-block;
   padding: 10px;
   margin-bottom: 10px;
`

export default Search

