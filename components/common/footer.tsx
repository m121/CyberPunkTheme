import React, { FC, useState } from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300 body-font ">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-7xl text-[#12b3a8]">Cityt</span>
          </a>
          <p></p>
          <span className="sm:ml-6 inline-flex  sm:mt-10 mt-8 justify-center sm:justify-start">
            <a href="#" className="ml-3 text-gray-300 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Marketplace
            </h2>
            <nav className="list-none mb-10">
              <ul>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  All NFTs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Art
                </a>
              </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Support
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Author Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Item Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Help & Support
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Resource
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Live Auctions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Activity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Road map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f8f8f9] text-[#9e9fae] text-base">
                  Discord community
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-[#9e9fae] text-sm text-center sm:text-center">
            © 2023 mateopps —
            <a
              href="https://twitter.com/mateom147"
              rel="noopener noreferrer"
              className="text-[#9e9fae] ml-1"
              target="_blank"
            >
              @mateom147
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
