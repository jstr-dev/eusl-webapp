import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from 'react';
import { Team, columns } from "@/Components/Team/Columns"
import { DataTable } from "@/Components/Team/DataTable"
import {Link, router, Head} from '@inertiajs/react';

function buttonOnClick() {
    router.reload({only: ['teams']});
}

export default function Home({teams}: PropsWithChildren<{ teams: Array<any> }>) {
    return (
        <MainLayout header="Teams">
            <Head title="Teams" />
            <DataTable columns={columns} data={teams} />

            <Link preserveScroll href="/teams?page=2" only={['teams']}>Page 2 test</Link>
        </MainLayout>
    );
}
