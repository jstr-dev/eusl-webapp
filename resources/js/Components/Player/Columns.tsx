import {ColumnDef} from "@tanstack/react-table"
import {Team} from "@/Components/Team/Columns";

export type Player = {
    id: string
    name: number,
}

export const columns: ColumnDef<Player>[] = [
    {
        accessorKey: "name",
        header: "Player",
        cell: ({row}) => {
            const name: string = row.getValue("name");
            return (
                <a href={'../player/' + row.original.id}>{name}</a>
            );
        }
    },

    {
        accessorKey: 'teams',
        header: 'Team',
        cell: ({row}) => {
            const teams: Array<Team> = row.getValue('teams');
            const teamName: string = teams[0]?.name ?? 'Unknown';
            return (
                <div>
                    {teamName}
                </div>
            );
        }
    }
]
