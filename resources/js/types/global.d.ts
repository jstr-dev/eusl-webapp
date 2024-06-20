import {AxiosInstance} from 'axios';
import ziggyRoute from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;

    export type Player = {
        id: number,
        name: string,
        position: string,
    }

    export type Team = {
        id: number,
        name: string,
        short: string,
        home_primary_color: string,
        home_secondary_color: string,
        away_primary_color: string,
        away_secondary_color: string,
    }

    export type Game = {
        id: number,
        date_played: string | null,
        home_team: Team,
        away_team: Team,
        home_score: number,
        away_score: number,
        is_overtime: number,
        is_forfeit: number,
        periods_played: number
    }

    export type Season = {
        id: number,
        number: number,
        division: string,
        short: string
    }
}
