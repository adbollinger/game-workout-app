import { AxiosResponse } from 'axios';
import express, { Request, Response } from 'express';
import { TFTService } from '../services/tft';

export const tftRouter = express.Router();

tftRouter.get('/:name', async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        TFTService.GetSummonerByName(name)
            .then((response: AxiosResponse<TFTAPI.Summoner.SummonerDto>) => {
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

tftRouter.get('/matches/:puuid', async (req: Request, res: Response) => {
    try {
        const { puuid } = req.params;
        console.log(puuid);
        TFTService.GetMatchList(puuid)
            .then((response: AxiosResponse<TFTAPI.MatchList.MatchListDto>) => {
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

tftRouter.get('/match/:match/:puuid', async (req: Request, res: Response) => {
    try {
        const { match, puuid } = req.params;
        TFTService.GetMatchById(match)
            .then((response: AxiosResponse<TFTAPI.Match.MatchDto>) => {
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
