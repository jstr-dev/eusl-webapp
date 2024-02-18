import {Link} from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import NavLink from './NavLink';
import {Input} from "@/Components/ui/input";
import React from "react";

export default function NavBar() {
    return (
        <div>
            <nav className="bg-neutral-900">
                <div className="flex justify-between items-center mx-auto max-w-7xl py-3 px-2">
                    <div className='flex gap-10 items-center'>
                        <Link href="/">
                            <ApplicationLogo/>
                        </Link>

                        <ul className="flex flex-row font-semibold text-white mt-0 gap-6 space-x-5 text-s">
                            <a>League</a>
                            <a>TSR</a>
                            <a>PUGs</a>
                            <a>News</a>
                            <a>More</a>
                        </ul>
                    </div>

                    <Input type="search" onKeyDown='' placeholder="Search"/>
                </div>
            </nav>

            <nav className="bg-neutral-850">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <ul className="flex font-opensans flex-row font-semibold mt-0 space-x-5 text-xs text-neutral-600">
                            <NavLink href="/" active={route().current('home')}>
                                Home
                            </NavLink>

                            <NavLink href="/" active={route().current('/')}>
                                Standings
                            </NavLink>

                            <NavLink href="/" active={route().current('/')}>
                                Fixtures
                            </NavLink>

                            <NavLink href={route('teams')} active={route().current('teams')}>
                                Teams
                            </NavLink>

                            <NavLink href="/" active={route().current('/')}>
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
        </div>
    );
}
