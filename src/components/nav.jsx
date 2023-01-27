import React from "react";
import { useState, useEffect } from "react"
import logo from './logo.svg'
const Nav = () => {
    let menuLinks = [
        { name: "Home", link: "/" },
        { name: "New", link: "/" },
        { name: "Popular", link: "/" },
        { name: "Trending", link: "/" },
        { name: "Categories", link: "/" }
    ];
    const [sticky, setSticky] = useState(false);
    let [open, setOpen] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector('nav')
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    })
    return (
        <nav className={`w-full  left-0 top-0 z-[999] container md:mx-auto   ${sticky ? 'bg-white/60  text-gray-900' : 'text-white'}`}>
        <div className="flex items-center justify-between md:mx-12">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <div className={` ${sticky ? 'md:bg-white/0  bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
                <ul className="flex items-center gap-1 py-2 text-lg">

                    {menuLinks?.map((menu, i) => (
                        <li key={i} className="px-6 hover:text-orange-500" >
                            <a href={menu?.link}>{menu?.name}</a>
                        </li>
                    ))}

                </ul>
            </div>

            <div onClick={() => setOpen(!open)} className={`z-[999] text-6xl ${open ? "text-gray-900" : "text-gray-900"} md:hidden m-5`}>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
            <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? 'right-0' : 'right-[-100%]'}`}>
                <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                    {menuLinks.map((menu, i) => (
                        <li key={i} className="px-6 hover:text-orange-500" >
                            <a href={menu?.link}>{menu?.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;
