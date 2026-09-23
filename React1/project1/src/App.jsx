import React from 'react'
import Card from './component/card'



const App = () => {
  return (
    <div style={{display:'flex',gap:'10px' ,justifyContent:'center',alignItems:'center'}}>
      <Card  name="Car1" price="500000" img1="https://clipart-library.com/2023/1351-Free-Clipart-Of-A-Car.jpg"/>
      <br />
      <Card name="Car2" price="600000" img1="https://th.bing.com/th/id/R.b575742f8e43ac5bca725f7bff04cecc?rik=aNKJRxIfOUOHNQ&riu=http%3a%2f%2fclipart-library.com%2fnewimages%2fcar-clipart-15.jpg&ehk=NQSLe01Pyd7vfe4%2fSbidNkt5hJRacjMBOP98G5fdNBA%3d&risl=&pid=ImgRaw&r=0"/> 
    </div>
  )
}

export default App
