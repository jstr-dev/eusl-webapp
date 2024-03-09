import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from 'react';
import {columns, columnData} from "@/Components/Standings/Columns"
import {DataTable} from "@/Components/DataTable"
import {Head} from '@inertiajs/react';
import TableFilters from "@/Components/TableFilters";
import * as React from "react";
import ContentPanel from "@/Components/ContentPanel";

export default function Standings({seasons, current_season, current_division, standings}: PropsWithChildren<{
    standings: Array<any>,
    seasons: Array<any>,
    current_season: number,
    current_division: number,
}>) {
    let filters: string[] = ['season', 'division']

    return (
        <MainLayout header={null}>
            <Head title="Standings"/>

            <ContentPanel>
                <TableFilters collectionKey='standings' filters={filters} seasons={seasons} current_season={current_season}
                              current_division={current_division}/>
            </ContentPanel>

            <ContentPanel className='content pb-0'>
                <DataTable columns={columns} data={standings} columnData={columnData}></DataTable>
            </ContentPanel>
        </MainLayout>
    );
}
