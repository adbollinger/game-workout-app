import { AxiosResponse } from 'axios';
import express, { Request, Response } from 'express';
import { LoLService } from '../services/lol';

export const lolRouter = express.Router();

lolRouter.get('/:name', async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        LoLService.GetSummonerByName(name)
            .then((response: AxiosResponse<LOLAPI.Summoner.SummonerDto>) => {
                console.log(response.data);
                res.status(200).json(response.data);
            })
            .catch((e) => {
                res.status(500).send(e.message);
            });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

lolRouter.get('/matches/:puuid', async (req: Request, res: Response) => {
    try {
        const { puuid } = req.params;
        console.log(puuid);
        LoLService.GetMatchList(puuid)
            .then((response: AxiosResponse<LOLAPI.MatchList.MatchListDto>) => {
                console.log(response.data);
                res.status(200).json(response.data);
            })
            .catch((e) => {
                res.status(500).send(e.message);
            });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

lolRouter.get('/match/:match/:puuid', async (req: Request, res: Response) => {
    try {
        const { match, puuid } = req.params;
        LoLService.GetMatchById(match)
            .then((response: AxiosResponse<LOLAPI.Match.MatchDto>) => {
                const participant = response.data.info.participants.find(x => x.puuid == puuid);

                if (participant != undefined) {
                    console.log(participant);
                    res.status(200).json(participant);
                } else {
                    res.status(500).send(`puuid: ${puuid} was not found in this match`);
                }
            })
            .catch((e) => {
                res.status(500).send(e.message);
            });
    } catch (e) {
        res.status(500).send(e.message);
    }
});
