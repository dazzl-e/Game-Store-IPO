import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/commons/navbar/navbar'
import LandingPage from './components/landingpage/LandingPage'
import SideBar from './components/sidebar/SideBar'

function App() {
  const [triggerSiderBar, setTriggerSideBar] = useState(false)

  return (
    <>
    <div className='relative min-w-[400px]'>
      <Navbar setTriggerSideBar={setTriggerSideBar}/>
      <SideBar triggerSiderBar={triggerSiderBar} setTriggerSideBar={setTriggerSideBar}/>
      <div className='flex justify-center items-center p-5 '>
        <div className='w-[1500px] '>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/cart' />
            <Route path='/signin'/>
            <Route path='/signup'/>
            <Route path='/changepassword'/>
          </Routes>
        </div>
      </div> 
    </div>
    </>
  )
}

export default App
