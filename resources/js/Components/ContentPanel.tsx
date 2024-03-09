import {PropsWithChildren} from "react";

export default function ContentPanel({children}: PropsWithChildren<{}>) {
    return (
        <div className='content rounded-lg'>
            {children}
        </div>
    );
}
