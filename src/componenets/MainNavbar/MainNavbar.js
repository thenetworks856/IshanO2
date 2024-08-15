import React from 'react'
import './MainNavbar.css';

export default function Navbar() {
    return (
        <>
            {/* top container */}
            <div className='nav-container top-container'>
                <div className='top-links-container'>
                    <a className='top-link top-nav-text' style={{ textDecoration: "underline" }}>Personal</a>
                    <span className=' pipe'>|</span>
                    <a href='https://www.o2.co.uk/business' className='top-link top-nav-text'>Business</a>
                </div>
                <div className='links-links-container'>
                    <a className='top-link top-nav-text'>Sign in</a>
                    <span className='top-nav-text'>or</span>
                    <a href='https://accounts.o2.co.uk/register' className='top-link top-nav-text'>Register</a>
                </div>
            </div>

            {/* bottom container */}
            <div className='nav-container bottom-container' style={{ height: "74px" }}>
                <div className='links-container'>
                    <a className='logo link' style={{ height: "50px", width: "50px" }}>
                        {/* LOGO svg */}
                        <svg className='svg-style' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="35px" viewBox="0 0 34 35" version="1.1">
                            <title>O2 Logo</title>
                            <desc>
                                Created with Sketch.
                            </desc>
                            <defs>
                                <polygon id="path-1" points="0 28.5963489 0 0.0563479784 26.7030678 0.0563479784 26.7030678 28.5963489 3.5407696e-15 28.5963489"></polygon>
                            </defs>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Artboard">
                                    <g id="o2-logo">
                                        <g id="Group-3" transform="translate(0.000000, 0.100063)">
                                            <mask id="mask-2" fill="white">
                                                <use xlinkHref="#path-1"></use>
                                            </mask>
                                            <g id="Clip-2"></g>
                                            <path d="M5.145108,14.3262702 C5.145108,9.14206862 8.18067295,4.11812414 13.3773169,4.11812414 C18.5223346,4.11812414 21.5578996,9.14206862 21.5578996,14.3262702 C21.5578996,19.1898012 19.0369417,24.5344163 13.3773169,24.5344163 C7.66621634,24.5344163 5.145108,19.1898012 5.145108,14.3262702 M-6.02055707e-05,14.3262702 C-6.02055707e-05,22.1294646 5.45381207,28.5963489 13.3773169,28.5963489 C21.249346,28.5963489 26.7030678,22.1294646 26.7030678,14.3262702 C26.7030678,6.04230441 21.352147,0.0563479784 13.3773169,0.0563479784 C5.35086054,0.0563479784 -6.02055707e-05,6.04230441 -6.02055707e-05,14.3262702" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path>
                                        </g>
                                        <path d="M33.9007041,34.809417 L33.9007041,32.9072819 L29.1563545,32.9072819 C31.0540342,30.9705938 33.5343532,28.6188005 33.5343532,26.0596892 C33.5343532,23.6906976 32.1028152,22.5321557 29.8889058,22.5321557 C28.7067694,22.5321557 27.4916705,22.8432891 26.4428894,23.3966062 L26.6260648,25.4025567 C27.3917292,24.8837926 28.3240125,24.4342908 29.3062664,24.4342908 C30.2549557,24.4342908 31.203946,24.9528986 31.203946,26.0596892 C31.203946,28.2729577 27.2585244,31.6968323 26.1766302,32.7862682 L26.1766302,34.809417 L33.9007041,34.809417 Z" id="Fill-4" fill="#FFFFFF"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href='https://www.o2.co.uk/shop' className='link only-desktop'>Shop</a>
                    <a href='https://www.o2.co.uk/why-o2' className='link only-desktop'>Why O2</a>
                    <a href='https://www.o2.co.uk/help' className='link only-desktop'>Help</a>
                </div>
                <div className='links-container'>
                    <a href='https://www.o2.co.uk/shop' className='link only-mobile'>Shop</a>
                    <a href='https://www.o2.co.uk/help' className='link only-mobile'>Help</a>
                    <a className='link' style={{ marginRight: "0" }}>My O2</a>
                    {/* <a className='link search'>Search</a> */}
                    <a href='https://www.o2.co.uk/shop/basket' className='link only-desktop last-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 20" width="28px" height="29px" version="1.1">
                            <title>Your Basket</title>
                            <desc>
                                Created with Sketch.
                            </desc>
                            <defs></defs>
                            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                <g id="desktop-tier-1-v1" transform="translate(-967.000000, -48.000000)" stroke="#FFFFFF" strokeWidth="1.2">
                                    <g id="Group-2" transform="translate(882.000000, 49.000000)">
                                        <g id="icons">
                                            <path d="M100.94933,7.29932475 L98.3505135,0.646655413 C98.1987114,0.278223254 97.8542023,0 97.4487906,0 L96.2125576,0 C95.783512,0.000949567419 95.4117331,0.276324119 95.2572039,0.666596328 L92.5583981,7.29932475 L106.617822,7.29932475 C107.201397,7.29932475 107.674074,7.79309981 107.674074,8.40177253 C107.674074,8.58503904 107.631351,8.75691074 107.556814,8.90884153 L104.440779,16.577548 C103.970829,17.4283604 103.090922,18 102.082847,18 L91.5848646,18 C90.5904242,18 89.7177891,17.4407048 89.2423848,16.606035 L86.1190783,8.9126398 C86.0427228,8.75975944 86,8.58693817 86,8.40177253 C86,7.79309981 86.4717683,7.29932475 87.0544341,7.29932475 L90.1741045,7.29932475" id="basket"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>

                </div>
            </div>
        </>
    )
}