import React from 'react'

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 10px', color: '#a71313' }}>Home</li>
            <li style={{ margin: '0 10px', color: '#a71313' }}>AboutUs</li>
            <li style={{ margin: '0 10px', color: '#a71313' }}>Phoneno.</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
