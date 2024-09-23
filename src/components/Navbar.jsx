import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const navItems = ["Home", "Work", "About", "Contact"];

  return (
    <nav className="bg-none text-white fixed w-full z-20 top-0 start-0 px-1  sm:px-6 py-4">
      <div className="flex flex-wrap mx-16 items-center justify-between">
        <div className="flex items-center ">
          <a href="/" className="text-5xl font-bold mr-4">
            Wefo
          </a>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-10 border rounded-full ml-10 p-1">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block py-2 px-5 rounded-full  ${
                      selectedItem === item
                        ? 'bg-gray-700 text-white'
                        : 'text-white hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <button type="button" className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full text-md px-7 py-2 text-center ml-4">
            Start project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;