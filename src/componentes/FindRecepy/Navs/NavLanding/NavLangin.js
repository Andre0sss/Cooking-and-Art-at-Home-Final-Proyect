import React from "react";
import { Link, Outlet } from "react-router-dom";



const NavLanding = ()=>{
    return(
    <div className='nav-bar'>
        <div className='nav-bar'>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/createRecepy'>Create Recepy</Link>
                            </li>
                            <li>
                                <Link to='/contacUs'>Contac Us</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link> 
                            </li>
                        </ul>
                    </nav>
                    <Outlet/>
                </div>
    </div>
    )
}
export default NavLanding;