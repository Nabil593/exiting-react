import React, { useState } from 'react';
import List from './list';
import { Menu, X } from 'lucide-react';

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

  const [open, setOpen] = useState(false);

  const links = navigationData.map(route => <List key={route.id} route = {route}/>);

    return (
        <nav className='flex justify-between px-20 p-4'>
          <div onClick={() => setOpen(!open)} className='flex gap-1'>
            {
              open ? <X className='md:hidden'/> : <Menu className='md:hidden'/>
            }
            <ul className={`md:hidden absolute duration-1000 top-10 ${open ? "left-21" : "-left-40"}`}>
              {links}
            </ul>
          <h3>My Navber</h3>
          </div>

            <ul className='gap-4 md:flex hidden'>
                {
                  links
                }
            </ul>
            <button>Sign In</button>
            
            {/* <ul className='flex gap-4'>
                <li><a href="/">Home</a></li>            
                <li><a href="/About">About</a></li>            
                <li><a href="/contact">Contact</a></li>            
            </ul>             */}
        </nav>
    );
};

export default Navber;;