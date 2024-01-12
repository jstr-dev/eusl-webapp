import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';

export default function Main({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
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
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
    );
}
