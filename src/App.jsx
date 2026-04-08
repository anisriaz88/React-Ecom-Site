import React from 'react'
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-[1fr_4fr]'>
        <SideBar />
        <div className='main-content border'>
          Main Content
        </div>
      </div>
    </>
  )
}

export default App
