import MainLayout from '@/Layouts/MainLayout';
import * as React from 'react';
import {PropsWithChildren} from 'react';
import {columns} from "@/Components/Team/Columns"
import {DataTable} from "@/Components/DataTable"
import {Head} from '@inertiajs/react';
import TableFilters from "@/Components/TableFilters";
import Pagination from "@/Components/Pagination";
import ContentPanel from "@/Components/ContentPanel";

export default function Teams({teams, seasons, current_season, current_division, page, max_pages, total}: PropsWithChildren<{
    teams: Array<any>,
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
            <Head title="Teams"/>

            <div className='flex flex-col gap-4'>
                <ContentPanel>
                    <TableFilters collectionKey='teams' filters={filters} seasons={seasons} current_season={current_season}
                        current_division={current_division} />
                </ContentPanel>

                <div className='content rounded-lg pb-0'>
                    <DataTable columns={columns} data={teams}></DataTable>
                    <div>
                        <hr className='border-neutral-800 mt-5 mb-5' />
                        <Pagination collectionKey={'teams'} currentPage={page} maxPage={max_pages} total={total}></Pagination>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
