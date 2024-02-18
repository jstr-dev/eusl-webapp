import {ColumnDef, flexRender} from "@tanstack/react-table"
import {ArrowUpDown, MoreHorizontal} from "lucide-react"
import {TableCell} from "@/Components/ui/table";
import ApplicationLogo from "@/Components/ApplicationLogo";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Team = {
    id: string
    name: number
    short: string
}

export const columns: ColumnDef<Team>[] = [
    {
        accessorKey: "name",
        header: "Team",
        cell: ({row}) => (
            <div className='flex gap-3'>
                <img src={"/storage/images/logo.png"} width="24px" height='24px' alt="EUSL Logo"/>
                {flexRender(row.getValue('name'), this)}
            </div>
            
        )
    },
]