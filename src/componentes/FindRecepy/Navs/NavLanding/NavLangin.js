import React from "react";
import { Link, Outlet } from "react-router-dom";
import './style.css';


const NavLanding = ()=>{
    return(
    <div className='nav-bar'>
                    <nav className="nav-text">
                        <ul>
                            <li>
                                <Link to='/findRecepy'>Find Recipe</Link>
                            </li>
                            <li>
                                <Link to='/contacUs'>Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link> 
                            </li>
                        </ul>
                    </nav>
                    <Outlet/>
    </div>
    )
}
export default NavLanding;