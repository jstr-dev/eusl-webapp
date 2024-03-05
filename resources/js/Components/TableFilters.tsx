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

const seasonChange = (season: string, key: string) => {
    router.reload({only: [key, 'page', 'total', 'max_pages'], data: {season: season, page: 1}})
}

const divisionChange = (division: string, key: string) => {
    router.reload({only: [key, 'page', 'total', 'max_pages'], data: {division: division, page: 1}})
}

export default function TableFilters({filters, seasons, current_season, current_division, collectionKey = 'teams'}: {
    filters: string[],
    seasons: Array<any>,
    current_season: number,
    current_division: number,
    collectionKey?: string
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
        <div className={'flex flex-col md:flex-row justify-between' + (filters.includes('search') ? ' gap-4' : '')}>
            <div className='flex flex-col min-[400px]:flex-row gap-4'>
                {filters.includes('season') &&
                    <Select onValueChange={(season: string) => seasonChange(season, collectionKey)}>
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
                    <Select onValueChange={(division: string) => divisionChange(division, collectionKey)}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder={divisionMap[current_division]}/>
                        </SelectTrigger>
                        <SelectContent>
                            {uniqueDivisions.map((division: string) => (
                                <SelectItem key={division}
                                            value={Object.keys(divisionMap).find(key => divisionMap[key] === division) ?? ''}>{division}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                }
            </div>

            <div>
                {filters.includes('search') &&
                    <Search placeholder={'Search all ' + collectionKey} collectionKey={collectionKey}/>
                }
            </div>
        </div>
    );
}
