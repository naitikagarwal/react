// import React from 'react'

// function ItemDescription({name, description}) {
//   return (
//     <div>
//       <p>{name}</p>
//       <p><i>{description}</i></p>

//     </div>
//   )
// }

// export default ItemDescription

import React, { Component } from 'react'

export default class ItemDescription extends Component {
  render() {
    return (
      <div>
        <p> <b>{this.props.name}</b></p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}