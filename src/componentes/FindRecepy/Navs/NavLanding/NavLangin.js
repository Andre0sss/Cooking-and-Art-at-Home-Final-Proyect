import React from "react";
import { Link, Outlet } from "react-router-dom";



const NavLanding = ()=>{
    return(
    <div className='nav-bar'>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/createRecepy'>Create Recipe</Link>
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