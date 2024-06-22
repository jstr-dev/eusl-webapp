import {PropsWithChildren} from "react";

export default function ContentPanel({ children, title }: PropsWithChildren<{ title: string | null | undefined }>) {
    return (<>
        <div className='content rounded-lg'>
            {title &&
                <div className={'flex flex-col w-full gap-2'}>
                    <h1 className='text-lg mb-2 font-semibold' style={{ marginTop: '-7px' }}>{title}</h1>
                    <hr className='mb-6 ignore-content-padding' />
                </div>}
            {children}
        </div>
    </>);
}
