import React from "react";




const SearchBox = (props) => {
  const {searchTerm, handleSubmit} = props

  
  return (
<form onSubmit = {handleSubmit}>
 
  <input type = "text">

  </input>
  <input type = "submit" > 
</input>


</form>
  )
}
export default SearchBox

// search box captures the search term, when somoene clicks on submit this function will run 