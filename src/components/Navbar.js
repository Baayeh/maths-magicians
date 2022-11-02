import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CiHome } from 'react-icons/ci';
import { BsCalculator, BsChatQuote } from 'react-icons/bs';

const Navbar = () => (
  <nav className='p-3 md:px-32 md:py-10 flex items-center justify-between'>
    <Link to='/' className='uppercase tracking-widest font-extrabold text-xl'>
      <span className='text-secondary'>Math</span>
      Guru
    </Link>
    <div className="nav-links flex items-center gap-5">
      <NavLink to='/' className={`nav-link ${(isActive) => isActive ? 'active' : ''}`} data-toggle='tooltip' title='Home' end>
        <span className='home-icon md:hidden'>
          <CiHome className='text-2xl' />
        </span>
        <span className='home-text hidden md:block text-lg'>Home</span>
      </NavLink>

      <NavLink to='/calculator' className='nav-link' data-toggle='tooltip' title='Calculator'>
        <span className='home-icon md:hidden'>
          <BsCalculator className='text-2xl' />
        </span>
        <span className='home-text hidden md:block text-lg'>Calculator</span>
      </NavLink>

      <NavLink to='/quotes' className='nav-link' data-toggle='tooltip' title='Quote'>
        <span className='home-icon md:hidden'>
          <BsChatQuote className='text-2xl' />
        </span>
        <span className='home-text hidden md:block text-lg'>Quote</span>
      </NavLink>
    </div>
  </nav>
);

export default Navbar