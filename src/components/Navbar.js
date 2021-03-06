import React, {useContext} from 'react';
import {Link } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = ()=>{
  const {state,dispatch} = useContext(UserContext)
   const renderList = ()=>{
    if(state){
        return [
          <li  key="1"><Link to="/new-message">Create</Link></li>,
          <li  key="2">
          <Link to="/login"
         onClick={()=>{
           localStorage.clear()
           dispatch({type:"CLEAR"})
         }}
         >
             Logout
         </Link>
         </li>
        ]
    }else{
      return [
        <li key="3"><Link to="/login">Login</Link></li>,
        <li key="4"><Link to="/signup">Signup</Link></li>
      
      ]
    }
  }

    return(
      <nav>
      <div className="nav-wrapper grey lighten-5">
        <Link to={state?'/':'/login'} className="brand-logo left">Guestbook</Link>
        <ul id="nav-mobile" className="right ">
        {renderList()}
          </ul>
      </div>
    </nav>
    );
}
export default Navbar;