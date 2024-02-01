import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function Main({ children, header = null }: PropsWithChildren & {header : any}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar></NavBar>
            
            { header != null &&
                <div className="py-14 bg-neutral-300 text-4xl">
                    <div className="mx-auto max-w-7xl p-2">
                        <h1>{header}</h1>
                    </div>
                </div>
            }
            <br/>
            <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <br/> 
            <Footer></Footer>
        </div>
    );
}
