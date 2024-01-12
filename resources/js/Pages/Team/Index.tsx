import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from 'react';

export default function Home({teams}: PropsWithChildren<{ teams: Array<any> }>) {
    return (
        <MainLayout>
            Hello!
        </MainLayout>
    );
}
