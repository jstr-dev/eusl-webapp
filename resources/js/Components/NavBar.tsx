import {Link} from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import NavLink from './NavLink';
import {Input} from "@/Components/ui/input";
import React from "react";

const burgerClick = () => {
    const navbar = document.getElementById('navbar-mobile');
    const body = document.body;

    if (navbar?.classList.contains('invisible')) {
        navbar?.classList.remove('invisible');
        body.classList.add('overflow-hidden');
    } else {
        navbar?.classList.add('invisible');
        body.classList.remove('overflow-hidden');
    }
}

const sectionClick = (id: string) => {
    const section = $("#" + id);
    if (section.css('display') === 'none') {
        section.stop().css('display', 'flex').hide().slideDown();
    } else {
        section.stop().css('display', 'none').show().slideUp();
    }
}

function MobileNavSection({children, name}: { children: React.ReactNode, name: string }) {
    return (
        <div className="flex flex-col">
            <div className="text-xl font-bold hover:cursor-pointer hover:text-neutral-300"
                 onClick={() => sectionClick("section-" + name.replace(' ', '-').toLowerCase())}>{name}</div>
            <div className='flex-col gap-2' id={"section-" + name.replace(' ', '-').toLowerCase()} style={{'display': 'none'}}>
                {children}
            </div>
        </div>
    );
}

function MobileNavOption({name, route}: { name: string, route: string }) {
    return (
        <a href={route} className="text-md font-medium first:pt-4 pl-5 hover:cursor-pointer hover:text-neutral-300">
            {name}
        </a>
    );
}

$(window).on('resize', function () {
    const width: number | undefined = $(window).width();
    if (width != null && width > 768) {
        document.getElementById('navbar-mobile')?.classList.add('invisible');
        document.body.classList.remove('overflow-hidden');
    }
});

export default function NavBar() {
    return (<>
        <div id="navbar-mobile" className="flex w-screen h-screen fixed z-20 bg-neutral-900 text-white pt-20 pl-5 pr-5 pb-5 invisible">
            <div className='flex flex-col gap-5 pt-[25px]'>
                <MobileNavSection name='League'>
                    <MobileNavOption name='Home' route='/'/>
                    <MobileNavOption name='Standings' route='/'/>
                    <MobileNavOption name='Fixtures' route='/'/>
                    <MobileNavOption name='Teams' route='teams'/>
                    <MobileNavOption name='Players' route='/'/>
                    <MobileNavOption name='Transfers' route='/'/>
                    <MobileNavOption name='Statistics' route='/'/>
                </MobileNavSection>

                <MobileNavSection name='Testing'>
                    <MobileNavOption name='Home' route='/'/>
                    <MobileNavOption name='Standings' route='/'/>
                    <MobileNavOption name='Fixtures' route='/'/>
                    <MobileNavOption name='Teams' route='/'/>
                    <MobileNavOption name='Players' route='/'/>
                    <MobileNavOption name='Transfers' route='/'/>
                    <MobileNavOption name='Statistics' route='/'/>
                </MobileNavSection>

                <MobileNavSection name='Testing 2'>
                    <MobileNavOption name='Home' route='/'/>
                    <MobileNavOption name='Standings' route='/'/>
                    <MobileNavOption name='Fixtures' route='/'/>
                    <MobileNavOption name='Teams' route='/'/>
                    <MobileNavOption name='Players' route='/'/>
                    <MobileNavOption name='Transfers' route='/'/>
                    <MobileNavOption name='Statistics' route='/'/>
                </MobileNavSection>
            </div>
        </div>

        <nav className="sticky top-0 z-20 bg-neutral-900 max-[1280px]:pl-2">
            <div className="flex justify-between items-center mx-auto max-w-7xl py-3 px-2">
                <div className='flex gap-10 items-center'>
                    <Link href="/">
                        <ApplicationLogo/>
                    </Link>

                    <ul className="hidden md:flex flex-row font-semibold text-white mt-0 gap-6 space-x-5 text-s">
                        <a>League</a>
                        <a>TSR</a>
                        <a>PUGs</a>
                        <a>News</a>
                        <a>More</a>
                    </ul>
                </div>

                <button onClick={burgerClick} type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-l">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/*<Input type="search" placeholder="Search"/>*/}
            </div>
        </nav>

        <nav className="hidden md:block bg-neutral-850 max-[1280px]:pl-2">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center">
                    <ul className="flex font-opensans flex-row font-semibold mt-0 space-x-5 text-xs text-neutral-600">
                        <NavLink href="/" active={route().current('home')}>
                            Home
                        </NavLink>

                        <NavLink href={route('standings')} active={route().current('standings')}>
                            Standings
                        </NavLink>

                        <NavLink href="/" active={route().current('/')}>
                            Fixtures
                        </NavLink>

                        <NavLink href={route('teams')} active={route().current('teams')}>
                            Teams
                        </NavLink>

                        <NavLink href={route('players')} active={route().current('players')}>
                            Players
                        </NavLink>

                        <NavLink href="/" active={route().current('/')}>
                            Transfers
                        </NavLink>

                        <NavLink href="/" active={route().current('/')}>
                            Statistics
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}
