import axios, { AxiosResponse } from "axios";


export class TFTService {
    private static readonly urlPrefixV4: string = 'https://na1.api.riotgames.com';
    private static readonly urlPrefixV5: string = 'https://americas.api.riotgames.com';

    constructor() { }

    private static get GetApiKey(): string {
        return `?api_key=${process.env.RiotApiKey}`;
    }

    public static GetSummonerByName(name: string): Promise<AxiosResponse<TFTAPI.Summoner.SummonerDto>> {
        const path = `/tft/summoner/v1/summoners/by-name/${name}`
        return axios.get(TFTService.urlPrefixV4 + path + TFTService.GetApiKey)
    }

    public static GetMatchList(puuid: string): Promise<AxiosResponse<TFTAPI.MatchList.MatchListDto>> {
        const path = `/tft/match/v1/matches/by-puuid/${puuid}/ids`
        return axios.get(TFTService.urlPrefixV5 + path + TFTService.GetApiKey)
    }

    public static GetMatchById(matchId: string): Promise<AxiosResponse<TFTAPI.Match.MatchDto>> {
        const path = `/tft/match/v1/matches/${matchId}`
        return axios.get(TFTService.urlPrefixV5 + path + TFTService.GetApiKey)
    }
}