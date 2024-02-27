import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from 'react';
import {columns} from "@/Components/Player/Columns"
import {DataTable} from "@/Components/DataTable"
import {Head} from '@inertiajs/react';
import TableFilters from "@/Components/TableFilters";
import Pagination from "@/Components/Pagination";
import * as React from "react";

export default function Home({players, seasons, current_season, current_division, page, max_pages, total}: PropsWithChildren<{
    players: Array<any>,
    seasons: Array<any>,
    current_season: number,
    current_division: number,
    page: number,
    max_pages: number,
    total: number
}>) {
    let filters: string[] = ['season', 'division', 'search']

    return (
        <MainLayout header={null}>
            <Head title="Players"/>

            <div className='content'>
                <TableFilters collectionKey='players' filters={filters} seasons={seasons} current_season={current_season} current_division={current_division}/>
            </div>

            <div className='content pb-0'>
                <DataTable columns={columns} data={players}></DataTable>
                <div>
                    <hr className='border-neutral-800 mt-5 mb-5'/>
                    <Pagination currentPage={page} maxPage={max_pages} total={total} collectionKey={'players'}></Pagination>
                </div>
            </div>
        </MainLayout>
    );
}
