import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'p-3 inline-flex items-center border-b-4 leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-euslred text-neutral-100'
                    : 'border-transparent text-neutral-100 hover:border-euslred') +
                className
            }
        >
            {children}
        </Link>
    );
}
