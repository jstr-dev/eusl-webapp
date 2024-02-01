import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'p-3 inline-flex items-center border-b-2 leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-euslred text-gray-900 focus:border-indigo-700 '
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
