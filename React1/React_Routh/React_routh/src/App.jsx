import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'

function Home(){
  return <h1>THIS IS MY HOME PAGE</h1>
}

function About(){
  return <h1>THIS IS MY ABOUT PAGE</h1>
}

function Contact(){
  return <h1>THIS IS MY CONTACT PAGE</h1>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>|{" "}
        <Link to="/about"> About </Link>| {" "}
        <Link to="/contact"> Contact </Link>| {""}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
