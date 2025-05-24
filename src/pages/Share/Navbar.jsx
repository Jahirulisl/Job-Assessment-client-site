import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/icon-logo.png'

const Navbar = () => {
  //for use conditional user start>
 const {user,signOutUser} = useContext(AuthContext);
  //for use conditional user end>

  //for use logout start>
 const handleSignOutUser = () =>{
  signOutUser()
  .then(()=>{
    console.log('successful sign out')
  })
  .catch(error =>{
    console.log('failed to sign out.stay here.dont leave me alone')
  })
 }
  //for use logout end>
    const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Home</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           {/* for item 1 */}
           {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <> <button onClick={handleSignOutUser } className='btn bg-secondary'>Sign Out</button></>:<>
      <Link to="/register">Register</Link>

     <Link to="/signin">
         <button className='btn bg-secondary'>signin</button>
     </Link>
      </>
    }
   
  </div>
</div>
    );
};

export default Navbar