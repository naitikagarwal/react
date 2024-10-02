import React from 'react'

// function Product(props) {
function Product({name, description, price}) {

  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h3>{props.price}</h3> */}
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>{price}</h3>

        

    </div>
  )
}

export default Product
