import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './Components/Nav'
import { Box } from '@chakra-ui/react'
import VideoPlayer from './Components/VideoPlayer'
import { Home } from './Page/Home'
import { AllRoutes } from './Components/AllRoutes'
import Footer from './Components/Footer'

function App() {
  

  return (
<div className='App'>
  <Nav/>
 <AllRoutes/>
 <Footer/>
 
</div>
     
  
  )
}

export default App
