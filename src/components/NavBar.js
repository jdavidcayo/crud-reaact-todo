import React from 'react';
import 'bootswatch/dist/sandstone/bootstrap.min.css';

const NavBar = () => {
    return(
        <>
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">
                <img src="/taskIcon.svg" alt="" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                To Do app!
                </a>
            </div>
        </nav>
        </>
    )
}

export default NavBar;

