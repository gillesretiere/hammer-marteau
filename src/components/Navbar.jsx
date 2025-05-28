// Navbar.js

import React, { useState } from 'react';
import LightDarkToggle from './LightDarkToggle';
import { NavbarData } from './NavbarData';
import { ListItem } from '@mui/material';
import { Link } from "react-router-dom";

const Navbar = ({ toggleLightDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const showNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav class="border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* LOGO */}
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://hammer-marteau.com/assets/hmrt_logo_red.png" class="h-8" alt="Hammer & Marteau Logo" />
                        <span class="self-center text-xl font-normal whitespace-nowrap dark:text-white">Hammer &amp; Marteau</span>
                    </a>
                    {/*
                        HAMBURGER */
                    }
                    <div class="relative inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
          </div>
        </div>
      </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
                    {/* Menu Options */}
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">

                        <ul class="font-articulat_cf font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {/*
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                            */}
                            {NavbarData.map((link, index) => {
                                return (
                                    <li key={index} className={link.cname}>
                                        <Link
                                            className="hover:text-sky-500"
                                            to={link.href}
                                            target="_blank"
                                            onClick={showNav}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <LightDarkToggle toggleLightDarkMode={toggleLightDarkMode} />
                </div>
            </nav>


        </>
    );
};

export default Navbar;