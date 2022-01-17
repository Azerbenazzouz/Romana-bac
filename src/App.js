import React from 'react'
import Table from './Components/Table/Table'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
// import List from './Pages/List'
import Navbar from './Pages/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Table/>
      <Footer/>
    </div>
  )
}

export default App
