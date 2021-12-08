import React from "react";


const Card = (props) => {
  const {name, image} = props
  
 
  return <div>
   <h2> {name} </h2>
   <img src={image}  /> 

  </div>
}

export default Card 






// const Card = (props) => {
//   const {name,image} = props 
 
//   return <div>
//     <p> {name} </p>
//     <img src= {image} alt="a single pokemon"/> 
//   </div>
// }

// export default Card 