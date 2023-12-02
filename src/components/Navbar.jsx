
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
<nav className="navbar bg-body-tertiary  ">
  <div className="container-fluid animate__animated animate__fadeIn">
    <a className="navbar-brand fw-bold text-warning " href="#">just_Jinad</a>

    <ul className='col-md-3 gap-3  d-flex list-unstyled' style={{cursor:"pointer"}}>
      <Link to={"/"} className='text-decoration-none text-black fw-bold'>Home</Link>
      <Link to={"/signup"} className='text-decoration-none text-black fw-bold'>SignUp</Link>
      <Link to={"/login"} className='text-decoration-none text-black fw-bold'>Login</Link>
  </ul>

  <ul className='col-md-3  d-flex gap-3 list-unstyled' style={{cursor:"pointer"}}>
    <li>Admin</li>
    <li> FAQs </li>
    <li> Games </li>
  </ul>

  <ul className='col-md-3  d-flex gap-2 list-unstyled mt-1' style={{cursor:"pointer"}}>
    <li>Contact</li>
    <li>Location</li>
    <li> <button className='btn btn-warning text-white'>Complains</button> </li>
  </ul>
  </div>

  
</nav>



    
    </>
  )
}

export default Navbar
