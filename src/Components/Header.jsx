import React from 'react'
import Picture from '../Images/profile-pix.png'
// import logo from '../Images/prince-logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='mx-auto h-[10vh] w-[100vw] md:h-[20vh]'>
        <div className="h-[10vh] md:h-[20vh] navbar mx-auto bg-darkblue px-10">
            <div className="flex-1 text-white h-[10vh] md:h-[20vh] ">
                <h1 className='prince  w-full flex justify-start items-center h-[10vh] font-semibold text-lg md:text-4xl'><NavLink to={'/'}>Prince</NavLink></h1>
                {/* <NavLink to={'/'} className="btn btn-ghost text-xl"> <img src={logo} alt="Logo" width={200} hint={"princeLogo"}/></NavLink> */}
            </div>
            <div className="flex-1 h-[10vh] gap-2  items-center justify-end md:h-[20vh]">
                <ul className='hidden md:h-[20vh] md:flex flex-1 items-center justify-end text-xl text-white' >
                    <li className='nav hover:border-b-2 hover:opacity-80 h-[100%] min-w-[100px] flex justify-center items-center'><NavLink to={'/'} className='nav h-[20vh] w-[100%] flex items-center justify-center '>Home</NavLink>  </li>
                    <li className='hover:border-b-2 hover:opacity-80  h-[100%] min-w-[130px] flex justify-center items-center px-'><NavLink to={'/About'} className='nav h-[20vh] w-[100%] flex items-center justify-center ' >About Prince</NavLink></li>
                    <li className='nav hover:border-b-2 hover:opacity-80 h-[100%] min-w-[100px] flex justify-center items-center'><NavLink to={'/Service'} className='nav h-[20vh] w-[100%] flex items-center justify-center ' >Services</NavLink></li>
                    <li className='nav hover:border-b-2 hover:opacity-80 h-[100%] min-w-[100px] flex justify-center items-center '><NavLink to={'/Skill'} className='nav h-[20vh] w-[100%] flex items-center justify-center ' >Skills</NavLink>  </li>
                    <li className='nav hover:border-b-2 hover:opacity-80 h-[100%] min-w-[100px] flex justify-center items-center '><NavLink to={'/Blog'} className='nav h-[20vh] w-[100%] flex items-center justify-center ' >Blog</NavLink></li>
                    <li className='hover:border-b-2 hover:opacity-80 h-[100%] flex min-w-[160px] justify-center items-center '><NavLink to={'/Contact'} className='nav h-[20vh] w-[100%] flex items-center justify-center ' >Contact Prince</NavLink></li>
                </ul>
                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div> */}
                <div className="dropdown dropdown-end block md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="MyProfilePicture" src={Picture}/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}  >Home</NavLink>  </li>
                        <li><NavLink to={'/About'} >About Prince</NavLink></li>
                        <li><NavLink to={'/Service'}>Services</NavLink></li>
                        <li><NavLink to={'/Skill'} >Skills</NavLink>  </li>
                        <li><NavLink to={'/Blog'}>Blog</NavLink></li>
                        <li><NavLink to={'/Contact'}>Contact Prince</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header