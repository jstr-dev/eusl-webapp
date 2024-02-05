import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import NavLink from './NavLink';

export default function NavBar() {
    return (
        <div>
            <nav className="bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl py-3 px-2">
                    <Link href="/">
                        <ApplicationLogo/>
                    </Link>
                </div>
            </nav>

            <nav className="bg-gray-800">
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
