import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";
import ContentPanel from "@/Components/ContentPanel";

export type allTimeStatistics = {
    goals: number,
    assists: number,
    saves: number,
    period_wins: number,
    period_losses: number,
    period_ties: number,
    periods: number
}

export type initialStatistics = {
    firstGame: Game | null,
    firstSeason: Season | null,
    lastGame: Game | null,
    lastSeason: Season | null,
    allTimeStatistics: allTimeStatistics;
}

const getFirstGameDate = (game: Game | null) => {
    if (game == null) return "Cannot find";
    const date = game.date_played;
    if (date == null) return "Cannot find";
    return date;
}

const getStatisticPerPeriod = (stats: allTimeStatistics, stat: keyof allTimeStatistics) => {
    return (stats[stat] / stats.periods).toFixed(2);
}

export default function Show({ player, current_team, initialStatistics }: PropsWithChildren<{
    player: Player,
    current_team: Team,
    initialStatistics: initialStatistics
}>) {
    console.log((initialStatistics.allTimeStatistics.periods));
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
                        <div className={'basic-stat-panel grid grid-cols-2 gap-4'}>
                            <div>
                                <span>First Game:</span>
                                <span>{getFirstGameDate(initialStatistics.firstGame)}</span>
                            </div>

                            <div>
                                <span>First Season:</span>
                                <span>{initialStatistics.firstSeason ? initialStatistics.firstSeason.number : 'N/A'}</span>
                            </div>

                            <div>
                                <span>Last Game:</span>
                                <span>{getFirstGameDate(initialStatistics.lastGame)}</span>
                            </div>

                            <div>
                                <span>Last Season:</span>
                                <span>{initialStatistics.lastSeason ? initialStatistics.lastSeason.number : 'N/A'}</span>
                            </div>

                            <div>
                                <span>Goals:</span>
                                <span>{initialStatistics.allTimeStatistics.goals}</span>
                            </div>

                            <div>
                                <span>Goals per period:</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'goals')}</span>
                            </div>

                            <div>
                                <span>Assists:</span>
                                <span>{initialStatistics.allTimeStatistics.assists}</span>
                            </div>

                            <div>
                                <span>Assists per period:</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'assists')}</span>
                            </div>

                            <div>
                                <span>Saves:</span>
                                <span>{initialStatistics.allTimeStatistics.saves}</span>
                            </div>

                            <div>
                                <span>Saves per period:</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'saves')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ContentPanel>
                </ContentPanel>
            </div>

        </MainLayout>
    );
}
