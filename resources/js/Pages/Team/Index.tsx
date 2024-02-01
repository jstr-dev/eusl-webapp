import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from 'react';
import { Team, columns } from "@/Components/Team/Columns"
import { DataTable } from "@/Components/Team/DataTable"

export default function Home({teams}: PropsWithChildren<{ teams: Array<any> }>) {
    return (
        <MainLayout header="Teams">
            <DataTable columns={columns} data={teams} />
        </MainLayout>
    );
}
