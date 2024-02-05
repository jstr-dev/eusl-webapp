import {PropsWithChildren} from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function Main({ children, header = null }: PropsWithChildren & {header : any}) {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Nav Bar */}
            <NavBar/>

            {/* Header */}
            { header != null && 
                <div>
                    <br/>

                    <div className="container px-4 max-w-7xl text-2xl font-opensans">
                        <div className="text-neutral-100">
                            <h1 className="">{header}</h1>
                        </div>
                    </div>
                </div>
            }

            {/* Main Content */}
            <br/>
            <main className="container px-4 max-w-7xl text-white">{children}</main>
            <br/>
            {/* Footer */}
            <Footer/>
        </div>
    );
}
