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
}
