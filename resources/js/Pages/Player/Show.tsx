import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";
import ContentPanel from "@/Components/ContentPanel";

export default function Show({player, current_team}: PropsWithChildren<{
    players: Player,
    current_team: Team
}>) {
    return (
        <MainLayout header={null}>
            <Head title={player.name}/>

            <div className='contentGrid'>
                <div>
                    <div
                        className={'flex rounded-t-lg gap-5'}
                        style={{backgroundColor: "#" + current_team.home_primary_color, padding: '25px'}}>

                        <img alt='Team logo' src={"/storage/images/logo_oga.png"} width='64px' height='64px'/>

                        <div>
                            <p className='text-3xl'>{player.name}</p>
                            <a className='text-xl' href={'../team/' + current_team.id}>{current_team.name}</a>
                        </div>
                    </div>

                    <div className={'rounded-b-lg bg-neutral-900'} style={{padding: '25px'}}>
                        sanem big booty.
                    </div>
                </div>

                <ContentPanel>
                    <p>
                        Sanem has a really great booty and a nice smile c:
                    </p>
                </ContentPanel>
            </div>

        </MainLayout>
    );
}
