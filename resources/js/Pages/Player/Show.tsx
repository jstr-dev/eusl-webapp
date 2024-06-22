import MainLayout from '@/Layouts/MainLayout';
import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";
import ContentPanel from "@/Components/ContentPanel";
import Teams from './Components/Teams';

export type allTimeStatistics = {
    goals: number,
    assists: number,
    saves: number,
    period_wins: number,
    period_losses: number,
    period_ties: number,
    periods: number,
    points: number
}

export type initialStatistics = {
    firstGame: Game | null,
    firstSeason: Season | null,
    lastGame: Game | null,
    lastSeason: Season | null,
    allTimeStatistics: allTimeStatistics;
}

const getFirstGameDate = (game: Game | null) => {
    if (game == null) return "N/A";
    const date = game.date_played;
    if (date == null) return "N/A";
    return date;
}

const getStatisticPerPeriod = (stats: allTimeStatistics, stat: keyof allTimeStatistics) => {
    return (stats[stat] / stats.periods).toFixed(2);
}

const getSeason = (season: Season | null) => {
    if (season == null) return "N/A";
    return season.number + " " + season.short;
}

export default function Show({ player, current_team, initialStatistics, teams, placements }: PropsWithChildren<{
    player: Player,
    current_team: Team,
    initialStatistics: initialStatistics,
    teams: PlayerToTeam[],
    placements: Object
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
                        <div className={'basic-stat-panel grid grid-cols-4 gap-4 u-grid'}>
                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>First Game</span>
                                <span>{getFirstGameDate(initialStatistics.firstGame)}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Last Game</span>
                                <span>{getFirstGameDate(initialStatistics.lastGame)}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>First Season</span>
                                <span>{getSeason(initialStatistics.firstSeason)}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Last Season</span>
                                <span>{getSeason(initialStatistics.lastSeason)}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Goals</span>
                                <span>{initialStatistics.allTimeStatistics.goals}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Points</span>
                                <span>{initialStatistics.allTimeStatistics.points}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Assists</span>
                                <span>{initialStatistics.allTimeStatistics.assists}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Saves</span>
                                <span>{initialStatistics.allTimeStatistics.saves}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Goals per period</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'goals')}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Points per period</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'points')}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Assists per period</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'assists')}</span>
                            </div>

                            <div className={'u-grid_item flex flex-col'}>
                                <span className={'text-xs font-semibold'}>Saves per period</span>
                                <span>{getStatisticPerPeriod(initialStatistics.allTimeStatistics, 'saves')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Teams teams={teams} placements={placements} />
            </div>

        </MainLayout>
    );
}
