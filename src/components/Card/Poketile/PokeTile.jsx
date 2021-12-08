import React, { useEffect } from "react";

const PokeTile = (props) => {
  const {name, img} = props

  return <div> <p> {name} </p>
  <img src={img} /> 
  </div>

}
export default PokeTile;