import {PropsWithChildren} from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function Main({children, header = null}: PropsWithChildren & { header: any | null }) {
    return (
        <div className="min-h-screen bg-black">
            {/* Nav Bar */}
            <NavBar/>

            {/* Header */}
            {header != null &&
                <div>
                    <br/>

                    <div className="container px-0 max-w-7xl text-2xl font-opensans">
                        <h1>{header}</h1>
                    </div>
                </div>
            }

            {/* Main Content */}
            <br/>
            <main className="container text-white px-0 max-w-7xl">{children}</main>
            <br/>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
