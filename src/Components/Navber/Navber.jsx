import React from 'react';
import List from './list';

// navigationData.js
export const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navber = () => {
    return (
        <nav>
            <ul className='flex gap-4'>
                {
                    navigationData.map(route => <List key={route.id} route = {route}/>)
                }
            </ul>
            
            {/* <ul className='flex gap-4'>
                <li><a href="/">Home</a></li>            
                <li><a href="/About">About</a></li>            
                <li><a href="/contact">Contact</a></li>            
            </ul>             */}
        </nav>
    );
};

export default Navber;;