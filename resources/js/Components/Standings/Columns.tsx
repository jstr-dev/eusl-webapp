import {ColumnDef, Row} from "@tanstack/react-table"
import {Team} from "@/Components/Team/Columns";

export type Standing = {
    team_id: number
    team_name: string,
    games: number,
    points: number,
    wins: number,
    ot_wins: number,
    ot_losses: number,
    losses: number,
    forfeits: number,
    goals_for: number,
    goals_against: number,
    goal_difference: number
}

export const columns: ColumnDef<Standing>[] = [
    {
        accessorKey: "",
        header: "#",

        cell: ({row}) => {
            return (
                <div className='relative'>
                    {/*<div className={'positionIndicator w-1 h-1 bg-eusl-red rounded-full'}></div>*/}
                    <a>{parseInt(row.id) + 1}</a>
                </div>
            );
        }
    },

    {
        accessorKey: 'team_name',
        header: "Team",
        size: 800,
        minSize: 150,
        cell: ({row}) => {
            return (
                <div className='flex gap-3' style={{minWidth: '250px'}}>
                    <img src={"/storage/images/logo.png"} width="24px" height='24px' alt="EUSL Logo"/>
                    <a href={"/team/" + row.original.team_id} className={"hover:underline"}>{row.getValue('team_name')}</a>
                </div>
            )
        }
    },

    {
        accessorKey: 'games',
        header: 'GP',
    },

    {
        accessorKey: 'points',
        header: 'Pts',
    },

    {
        accessorKey: 'wins',
        header: 'W',
    },

    {
        accessorKey: 'ot_wins',
        header: 'OW',
    },

    {
        accessorKey: 'ot_losses',
        header: 'OL',
    },

    {
        accessorKey: 'losses',
        header: 'L',
    },

    {
        accessorKey: 'forfeits',
        header: 'FF',
    },

    {
        accessorKey: 'goals_for',
        header: 'GF',
    },

    {
        accessorKey: 'goals_against',
        header: 'GA',
    },

    {
        accessorKey: 'goal_difference',
        header: 'GD',
    },
]

export const columnData = {
    minSize: 1,
    maxSize: Number.MAX_SAFE_INTEGER,
    size: 70
}
