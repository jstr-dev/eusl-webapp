import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Footer() {
    return (
        <footer className="py-10 px-4 bg-neutral-900 sticky top-[100vh] text-white">
            <div className='container'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-20 items-start justify-center'>
                        <ApplicationLogo/>

                        <div className='flex flex-col gap-1'>
                            <span className={'font-semibold text-sm text-neutral-400 mb-2'}>Sitemap</span>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={'/'}>League</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>TSR</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>PUGs</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>News</a>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className={'font-semibold text-sm text-neutral-400 mb-2'}>Support</span>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={'https://eusl.notion.site/European-Slapshot-League-f9ac4030f7ec4782bd92e4d02d289fc1'}>Notion</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={'https://eusl.notion.site/c284f34b4fdf4eac8cc54ad332c84696?v=c8559707b53f4982915de3a023cb8e02'}>Rules</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>FAQ</a>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className={'font-semibold text-sm text-neutral-400 mb-2'}>Socials</span>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>YouTube</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>Twitch</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>Discord</a>
                            <a className={'text-sm text-neutral-200 font-semibold'}
                               href={''}>X</a>
                        </div>
                    </div>

                    <hr className={'border-neutral-800 mt-5 mb-5'}/>

                    <div className='flex gap-3 justify-center'>
                        <span className='text-sm text-neutral-400'>© 2024 <span
                            className='font-semibold'>European Slapshot League</span></span>
                        <span className='text-sm'>&#x2022;</span>
                        <span className={'text-sm text-neutral-400'}>Created by <a
                            className={'text-neutral-200 font-semibold'} href={'https://www.github.com/jstr-dev'}>jstr-dev</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
