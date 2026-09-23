import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div style={{border:"2px solid white", width:"300px", height:"300px"}}>
        <h1>MY CAR</h1>
        <img src={props.img1} alt="Car" style={{height:'200px', width:'200px'}}/>
        <h2>Car name:{props.name}</h2>
        <h2>Price: {props.price}</h2>
      </div>
    </div>
  )
}

export default Card
