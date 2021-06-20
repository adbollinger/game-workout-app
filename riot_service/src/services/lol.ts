import axios, { AxiosResponse } from "axios";


export class LoLService {
    private static readonly urlPrefixV4: string = 'https://na1.api.riotgames.com';
    private static readonly urlPrefixV5: string = 'https://americas.api.riotgames.com';

    constructor() { }

    private static get GetApiKey(): string {
        return `?api_key=${process.env.RiotApiKey}`;
    }

    public static GetSummonerByName(name: string): Promise<AxiosResponse<LOLAPI.Summoner.SummonerDto>> {
        const path = `/lol/summoner/v4/summoners/by-name/${name}`
        return axios.get(LoLService.urlPrefixV4 + path + LoLService.GetApiKey)
    }

    public static GetMatchList(puuid: string): Promise<AxiosResponse<LOLAPI.MatchList.MatchListDto>> {
        const path = `/lol/match/v5/matches/by-puuid/${puuid}/ids`
        return axios.get(LoLService.urlPrefixV5 + path + LoLService.GetApiKey)
    }

    public static GetMatchById(matchId: string): Promise<AxiosResponse<LOLAPI.Match.MatchDto>> {
        const path = `/lol/match/v5/matches/${matchId}`
        return axios.get(LoLService.urlPrefixV5 + path + LoLService.GetApiKey)
    }
}