
import { ColumnDef } from "@tanstack/react-table"
 
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
  },
  {
    accessorKey: "short",
    header: "Short",
  },
]