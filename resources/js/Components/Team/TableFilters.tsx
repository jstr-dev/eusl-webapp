import Dropdown from "@/Components/Dropdown";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"
import {router} from "@inertiajs/react";
import Search from "@/Components/Search";

const seasonChange = (season: string) => {
    router.reload({only: ['teams', 'page', 'total', 'max_pages'], data: {season: season, page: 1}})
}

const divisionChange = (division: string) => {
    router.reload({only: ['teams', 'page', 'total', 'max_pages'], data: {division: division, page: 1}})
}

export default function TableFilters({filters, seasons, current_season, current_division}: {
    filters: string[],
    seasons: Array<any>,
    current_season: number,
    current_division: number
}) {
    const uniqueNumbers: number[] = Array.from(new Set(seasons.map(season => season.number)));
    const uniqueDivisions: string[] = Array.from(new Set(seasons.map(season => season.division)));
    const divisionMap: any = {
        1: 'Professional',
        2: 'Challenger',
        3: 'Intermediate',
        4: 'Entry'
    }

    return (
        <div className='flex gap-4 flex-col md:flex-row justify-between'>
            <div className='flex flex-col min-[400px]:flex-row gap-4'>
                {filters.includes('season') &&
                    <Select onValueChange={(season: string) => seasonChange(season)}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder={"Season " + current_season}/>
                        </SelectTrigger>
                        <SelectContent>
                            {uniqueNumbers.map((number: number) => (
                                <SelectItem
                                    value={String(number)} key={number}>{"Season " + number}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                }

                {filters.includes('division') &&
                    <Select onValueChange={(division: string) => divisionChange(division)}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder={divisionMap[current_division]}/>
                        </SelectTrigger>
                        <SelectContent>
                            {uniqueDivisions.map((division: string) => (
                                <SelectItem key={division} value={Object.keys(divisionMap).find(key => divisionMap[key] === division) ?? ''}>{division}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                }
            </div>

            <div>
                {filters.includes('search') &&
                    <Search/>
                }
            </div>
        </div>
    );
}
