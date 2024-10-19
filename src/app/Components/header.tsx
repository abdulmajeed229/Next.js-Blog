"use client"

import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="h-[70px] w-full bg-[#1A73E8] text-[white] font-semibold flex justify-between items-center p-5 fixed">
        <Link href="/">
          <img
            className="h-[70px] w-[160px]"
            src="https://freepngimg.com/save/11527-blogging-picture/640x320"
            alt=""
          />
        </Link>

      
        <span className="sm:hidden text-[20px] cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </span>

  
        <ul className="hidden sm:flex gap-6">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/add-post">
            <li>Add Post</li>
          </Link>
        </ul>


        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-[#1A73E8] text-white p-5 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <button
            className="text-[30px] font-bold self-end mb-4"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <ul className="flex flex-col gap-4">
            <Link href="/" onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              <li>About</li>
            </Link>
            <Link href="/blog" onClick={toggleMenu}>
              <li>Blog</li>
            </Link>
            <Link href="/add-post" onClick={toggleMenu}>
              <li>Add Post</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
