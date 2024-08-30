import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cookies from 'js-cookie'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App() {
  Cookies.set('isLogin',false)
  const [count, setCount] = useState(0)
   
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
        <Route path='/login'  element={<Login></Login>}></Route>
        <Route path='/register'  element={<Signup></Signup>}></Route>
        <Route path='/dashboard'  element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  )
}

export default App
