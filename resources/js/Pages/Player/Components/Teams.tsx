import ContentPanel from "@/Components/ContentPanel";
import { PropsWithChildren } from "react";

const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

const getPlacement = (placements: any, season_id: number) => {
    if (placements.hasOwnProperty(season_id)) {
        return placements[season_id] + nthNumber(placements[season_id]);
    }

    return "N/A";
}

export default function Seasons({ children, teams, placements }: PropsWithChildren<{ teams: PlayerToTeam[], placements: Object }>) {
    return (<>
        <ContentPanel title={'Career'}>
            <div className="flex flex-col gap-2">
                {teams.map(team => (
                    <a className='flex justify-between hover:bg-neutral-800 p-2 rounded-sm' href='https://www.google.com/'>
                        <div className='flex gap-3 items-center'>
                            <img src={"/storage/images/logo.png"} width='32px' style={{marginRight: '10px'}}></img>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm'>{team.team?.name}</span>
                                <span className='text-xs text-neutral-400'>Season {team.season?.number} {team.season?.division}</span>
                            </div>
                        </div>

                        <div className='flex flex-col text-center gap-1'>
                            <span className='text-sm'>{getPlacement(placements, team.season_id)}</span>
                            <span className='font-semibold text-xs text-neutral-400'>Finished</span>
                        </div>
                    </a>
                ))}
            </div>
        </ContentPanel>
    </>);
}
