import MainLayout from '@/Layouts/MainLayout';
import {Component, PropsWithChildren} from 'react';
import {Team, columns, columnData} from "@/Components/Standings/Columns"
import {DataTable} from "@/Components/DataTable"
import {Link, router, Head} from '@inertiajs/react';
import TableFilters from "@/Components/TableFilters";
import Pagination from "@/Components/Pagination";
import * as React from "react";

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

            <div className='content'>
                <TableFilters collectionKey='standings' filters={filters} seasons={seasons} current_season={current_season}
                              current_division={current_division}/>
            </div>

            <div className='content pb-0'>
                <DataTable columns={columns} data={standings} columnData={columnData}></DataTable>
            </div>
        </MainLayout>
    );
}
