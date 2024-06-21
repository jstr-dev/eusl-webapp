import ContentPanel from "@/Components/ContentPanel";
import { PropsWithChildren } from "react";

export default function Seasons({ children, teams }: PropsWithChildren<{ teams: PlayerToTeam[] }>) {
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
                            <span className='text-sm'>1st</span>
                            <span className='text-xs text-neutral-400'>Finished</span>
                        </div>
                    </a>
                ))}
            </div>
        </ContentPanel>
    </>);
}
