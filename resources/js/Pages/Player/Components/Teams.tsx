import ContentPanel from "@/Components/ContentPanel";
import { PropsWithChildren } from "react";

export default function Seasons({ children, teams }: PropsWithChildren<{ teams: PlayerToTeam[] }>) {
    return (<>
        <ContentPanel title={'Career'}>
            {teams.map(team => (
                <div>
                    <p>{team.team?.name} - {team.season?.number}</p>
                </div>
            ))}
        </ContentPanel>
    </>);
}
