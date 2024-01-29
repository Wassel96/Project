import { signOut } from 'firebase/auth'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/Firebase'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const logout = async() => {
       await signOut(auth)
       navigate('/')
   }
   
  return (
    <div className='dashboard'>
      <aside>
        <div className="main">
          <div className="img">
          <img src="https://cdn./1201176667415130132/Capture_decran_2024-01-28_154657.png?ex=65c8ddf2&is=65b668f2&hm=99a850b6de512bc7fe931d1f0639a9edab3ba3e2d277a4a091133e1d2a31b193&" alt="" />
          </div>
        <ul>
          <li><NavLink to={'/'}>dashboard</NavLink></li>
          <li><NavLink to={'/produit'}>produit</NavLink></li>
          <li><NavLink to={'/stock'}>stock</NavLink></li>
        </ul>
        </div>
      <button onClick={logout}>logout</button>
      </aside>
      <div className="content">
      <Outlet />
      </div>
    </div>
  )
}

export default Dashboard