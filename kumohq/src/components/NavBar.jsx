"use client";

import React from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Logo from "./svg/Logo";
import "../App.css";

const menuItems = [
  { name: "Solutions and Services", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Switch to Mailchimp", href: "#" },
  { name: "Pricing", href: "#" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-4">
          <div className="inline-flex items-center space-x-2">
            <span>
              <Logo />
            </span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                    <span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
              <ul className="inline-flex items-center font-bold">
                <Search size={15} />
              </ul>
              <ul className="inline-flex items-center">
                <img
                  className="w-[20px]"
                  src="https://mailchimp.com/release/plums/cxp/images/global_nav/globe_icon.cb42f83a.1.svg"
                  alt=""
                />
                <p className="text-[10px] font-semibold">EN</p>
                <span>
                  <ChevronDown className="h-[10px] w-[10px]" />
                </span>
              </ul>
              <ul>
                <p className="font-semibold text-[15px]">
                  Sales: +1 (800) 315-5939
                </p>
              </ul>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <div className="flex justify-between">
              <div className="bg-black rounded-full mr-2">
                <button
                  type="button"
                  className="rounded-full bg-white hover:-translate-y-[4px] transition-all duration-300 border border-black px-5 py-3 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log In
                </button>
              </div>
              <div className="bg-black rounded-full">
                <button
                  type="button"
                  className="rounded-full hover:-translate-y-[4px] transition-all duration-300 border border-black px-5 py-3 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#FFE01B] focus-visible:outline-black"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <Logo />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
}

export default NavBar;
