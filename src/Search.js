function Search({ search, setSearch,  }) {

   function handleSearch(e) {
      setSearch(e.target.value)
      //console.log(search)
   }

   return (
      <div>
         Search:
         <input className ="searchbar" value={search} onChange={handleSearch}/>
      </div>
   )
}

export default Search