import { SVGAttributes } from 'react';
import { usePage } from '@inertiajs/react'

export default function ApplicationLogo() {
    const {assets} : any = usePage().props;

    return (
        <img src={assets.logo} width="56px" alt="EUSL Logo" />
    );
}
