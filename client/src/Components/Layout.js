import React from 'react';
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom"
import { HomeIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { RectangleGroupIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Layout = () =>{

    const [currentTime,setCurrentTime]=useState(() => new Date().toLocaleTimeString());

    useEffect(()=>{
        const timerID = setInterval(()=>{
            setCurrentTime(new Date().toLocaleTimeString());
        },1000)
        return()=>clearInterval(timerID);
    },[]);

    return(
        <div className="main-wraper">
            <aside className="side-left">
                <div className="sidecontent">
                    <div className="profile">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/sridhar-khandavalli-profile.jpg`} alt="profile" />
                    </div>
                    <nav className="">
                        <ul>
                            <li><NavLink to='/' exact="true" className={({ isActive }) => (isActive ? 'active' : '')}><HomeIcon className="size-6 text-blue-500" /></NavLink><span>Home</span></li>
                            <li><NavLink to='/Works' className={({ isActive }) => (isActive ? 'active' : '')}><RectangleGroupIcon className="size-6 text-blue-500" /></NavLink><span>Works</span></li>
                            <li><NavLink to='/Contact' className={({ isActive }) => (isActive ? 'active' : '')}><EnvelopeIcon className="size-6 text-blue-500" /></NavLink><span>Contact</span></li>
                        </ul>
                    </nav>
                    <a href="!#" className="scrolltop text-white">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </a>
                </div>
            </aside>

            <main>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <button className="btn btn-dark rounded-pill"><FontAwesomeIcon icon={faCircle} color="green" /> Available For Work</button>
                        </div>
                        <div className="col-xl-6 text-end">
                            <p className="time">Local Time ( IST ) <span>{currentTime}</span></p>
                        </div>
                    </div>
                </div>
            </header>

                <Outlet />

                <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                        <p>&copy; 2024 , All Rights Reserved <pre>Sridhar</pre></p>
                        </div>
                        <div className="col-xl-6">

                        </div>
                    </div>
                </div>
            </footer>
            </main>

            <aside className="side-right">
            <div className="sidecontent">
                    <nav className="">
                        <ul>
                            <li><Link to='/'><FontAwesomeIcon icon={faFacebookF} className="size-6 text-blue-500" /></Link></li>
                            <li><Link to='/'><FontAwesomeIcon icon={faLinkedin} className="size-6 text-blue-500" /></Link></li>
                            <li><Link to='/'><FontAwesomeIcon icon={faGithub} className="size-6 text-blue-500" /></Link></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
export default Layout;