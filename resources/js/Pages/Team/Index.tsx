import MainLayout from '@/Layouts/MainLayout';
import {Component, PropsWithChildren} from 'react';
import {Team, columns} from "@/Components/Team/Columns"
import {DataTable} from "@/Components/Team/DataTable"
import {Link, router, Head} from '@inertiajs/react';
import TableFilters from "@/Components/Team/TableFilters";

function buttonOnClick() {
    router.reload({only: ['teams']});
}

export default function Home({teams, seasons, current_season, current_division}: PropsWithChildren<{
    teams: Array<any>,
    seasons: Array<any>,
    current_season: number,
    current_division: number
}>) {
    let filters: string[] = ['season', 'division']

    return (
        <MainLayout>
            <Head title="Teams"/>

            <div className='content'>
                <TableFilters filters={filters} seasons={seasons} current_season={current_season} current_division={current_division}/>
            </div>

            <div className='content pb-0'>
                <DataTable columns={columns} data={teams}/>
            </div>
        </MainLayout>
    );
}
