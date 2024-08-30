import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate=useNavigate()
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">NegotiatorBot</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="">Contact</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    {
                        Cookies.get('islogin')=='false' && <>
                        <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#signup">Register</a>
                        </li>
                        </>
                    }
                    {Cookies.get('islogin')=='true' && <li className="nav-item">
                    <a className="nav-link" onClick={()=>{
                       Cookies.remove('token')
                       Cookies.set('islogin',false)
                       navigate('/login')
                    }} href="#logout">Logout</a>
                    </li>}
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar