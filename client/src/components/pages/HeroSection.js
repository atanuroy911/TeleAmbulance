import React, { useEffect, useRef, useState } from 'react';
import ambulance_logo from '../../assets/ambulance.jpeg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    
    return (
        <section className='text-center'>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Tele Medicine Project</h1>
                    {/* <h4>(Version 1.00)</h4> */}
                    <p class="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">Welcome to the beta version of the Tele-Medicine Project </p>
                    <Link to="/login" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black border-stone-900 border-2 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Login
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>

                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={ambulance_logo} className='rounded-md' alt="ambulance_logo"></img>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;