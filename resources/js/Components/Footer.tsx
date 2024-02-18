import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Footer() {
    return (
        <footer className="py-20 px-4 bg-neutral-900 sticky top-[100vh] text-white">
            <div className='container'>
                <div className='flex justify-center gap-8 items-center'>
                    <ApplicationLogo/>
                    <p>Footer :)</p>
                </div>
            </div>
        </footer>
    );
}
