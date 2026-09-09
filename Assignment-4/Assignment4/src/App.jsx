import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Pizza from './component/Pizza'
import Noodle from './component/Noodle'

const App = () => {
  return (
    <div>
      <Header />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: '20px' }}>
        <Pizza />
        <Noodle />
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default App
