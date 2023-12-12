import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { FC, useState } from "react";


const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="p-4 sm:block md:hidden text-gray-200 hover:text-gray-200 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <svg
          aria-haspopup="true"
          aria-label="open Main Menu"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden icon icon-tabler icon-tabler-menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <line x1="4" y1="8" x2="20" y2="8"></line>
          <line x1="4" y1="16" x2="20" y2="16"></line>
        </svg>
      </button>
      <header className="text-gray-600 body-font md:block lg:block hidden">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-6xl text-[#12b3a8]">Cityt</span>
          </a>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="sm:block md:hidden text-gray-200 hover:text-gray-200 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              aria-haspopup="true"
              aria-label="open Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden icon icon-tabler icon-tabler-menu"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
          </button>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
            <AnchorLink
              href="#home"
              className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae] cursor-pointer"
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#aboutus"
              className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae]"
            >
              About Us
            </AnchorLink>
            <AnchorLink
              href="#collection"
              className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae]"
            >
              Collection
            </AnchorLink>
            <AnchorLink
              href="#artists"
              className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae]"
            >
              Top Artists
            </AnchorLink>
          </nav>
          <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none   text-base mt-4 md:mt-0 shadow-lg hover:bg-opacity-40">
            Connect Wallet
          </button>
        </div>
      </header>

      <div className={!navbarOpen ? "hidden" : " inline"}>
        <nav className="md:ml-auto md:mr-auto flex flex-col items-center text-lg justify-center">
          <AnchorLink
            href="#home"
            className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae] cursor-pointer"
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#aboutus"
            className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae]"
          >
            About Us
          </AnchorLink>
          <AnchorLink
            href="#collection"
            className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae]"
          >
            Collection
          </AnchorLink>
          <AnchorLink
            href="#artists"
            className="mr-5 hover:text-[#f8f8f9] text-[#9e9fae]"
          >
            Top Artists
          </AnchorLink>
          <button className=" mx-auto items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none   text-base mt-4 md:mt-0 shadow-lg hover:bg-opacity-40">
            Connect Wallet
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
