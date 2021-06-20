declare namespace LOLAPI {
    namespace Summoner {
        interface SummonerDto {
            accountId: string,
            profileIconId: number,
            revisionDate: number,
            name: string,
            id: number,
            puuid: string,
            summonerLevel: number
        }
    }

    namespace MatchList {
        interface MatchListDto {
            matches: string[]
        }
    }

    namespace Match {
        export interface MatchDto {
            metadata: MetadataDto,
            info: InfoDto
        }

        export interface MetadataDto {
            data_version: string,
            match_id: string,
            participants: string[] // A list of participant PUUIDs
        }        
    
        export interface InfoDto {
            gameCreation: number;
            gameDuration: number;
            gameId: number;
            gameMode: string;
            gameName: string;
            gameStartTimestamp: number;
            gameType: string;
            gameVersion: string;
            mapId: number;
            participants: ParticipantDto[];
            platformId: string;
            queueId: number;
            teams: TeamDto[];
        }

        export interface ParticipantDto {
            assists: number;
            baronKills: number;
            bountyLevel: number;
            champExperience: number;
            champLevel: number;
            championId: number;
            championName: string;
            championTransform: number;
            consumablesPurchased: number;
            damageDealtToBuildings: number;
            damageDealtToObjectives: number;
            damageDealtToTurrets: number;
            damageSelfMitigated: number;
            deaths: number;
            detectorWardsPlaced: number;
            doubleKills: number;
            dragonKills: number;
            firstBloodAssist: boolean;
            firstBloodKill: boolean;
            firstTowerAssist: boolean;
            firstTowerKill: boolean;
            gameEndedInEarlySurrender: boolean;
            gameEndedInSurrender: boolean;
            goldEarned: number;
            goldSpent: number;
            individualPosition: string;
            inhibitorKills: number;
            inhibitorsLost: number;
            item0: number;
            item1: number;
            item2: number;
            item3: number;
            item4: number;
            item5: number;
            item6: number;
            itemsPurchased: number;
            killingSprees: number;
            kills: number;
            lane: string;
            largestCriticalStrike: number;
            largestKillingSpree: number;
            largestMultiKill: number;
            longestTimeSpentLiving: number;
            magicDamageDealt: number;
            magicDamageDealtToChampions: number;
            magicDamageTaken: number;
            neutralMinionsKilled: number;
            nexusKills: number;
            nexusLost: number;
            objectivesStolen: number;
            objectivesStolenAssists: number;
            participantId: number;
            pentaKills: number;
            perks: PerksDto;
            physicalDamageDealt: number;
            physicalDamageDealtToChampions: number;
            physicalDamageTaken: number;
            profileIcon: number;
            puuid: string;
            quadraKills: number;
            riotIdName: string;
            riotIdTagline: string;
            role: string;
            sightWardsBoughtInGame: number;
            spell1Casts: number;
            spell2Casts: number;
            spell3Casts: number;
            spell4Casts: number;
            summoner1Casts: number;
            summoner1Id: number;
            summoner2Casts: number;
            summoner2Id: number;
            summonerId: string;
            summonerLevel: number;
            summonerName: string;
            teamEarlySurrendered: boolean;
            teamId: number;
            teamPosition: string;
            timeCCingOthers: number;
            timePlayed: number;
            totalDamageDealt: number;
            totalDamageDealtToChampions: number;
            totalDamageShieldedOnTeammates: number;
            totalDamageTaken: number;
            totalHeal: number;
            totalHealsOnTeammates: number;
            totalMinionsKilled: number;
            totalTimeCCDealt: number;
            totalTimeSpentDead: number;
            totalUnitsHealed: number;
            tripleKills: number;
            trueDamageDealt: number;
            trueDamageDealtToChampions: number;
            trueDamageTaken: number;
            turretKills: number;
            turretsLost: number;
            unrealKills: number;
            visionScore: number;
            visionWardsBoughtInGame: number;
            wardsKilled: number;
            wardsPlaced: number;
            win: boolean;
        }
    
        export interface PerksDto {
            statPerks: StatPerksDto;
            styles: StyleDto[];
        }    

        export interface StatPerksDto {
            defense: number;
            flex: number;
            offense: number;
        }
        export interface StyleDto {
            description: string;
            selections: SelectionDto[];
            style: number;
        }
    
        export interface SelectionDto {
            perk: number;
            var1: number;
            var2: number;
            var3: number;
        }
    
        export interface TeamDto {
            bans: TeamBansDto[];
            objectives: ObjectiveDto;
            teamId: number;
            win: boolean;
        }        

        interface TeamBansDto {
            championId: number,
            pickTurn: number
        }
    
        export interface ObjectiveDto {
            baron: ObjectiveInfoDto;
            champion: ObjectiveInfoDto;
            dragon: ObjectiveInfoDto;
            inhibitor: ObjectiveInfoDto;
            riftHerald: ObjectiveInfoDto;
            tower: ObjectiveInfoDto;
        }
    
        export interface ObjectiveInfoDto {
            first: boolean;
            kills: number;
        }
    }

    namespace Match_V4 {
        interface MatchDto {
            gameId: number,
            participantIdentities: ParticipantIdentityDto[],
            queueId: number,
            gameType: string,
            gameDuration: number,
            teams: TeamStatsDto[],
            plateformId: string,
            seasonId: number,
            gameVersion: string,
            mapId: number,
            gameMode: string,
            participants: ParticipantDto[],
        }

        interface ParticipantIdentityDto {
            participantId: number,
            player: PlayerDto
        }

        interface PlayerDto {
            profileIcon: number,
            accountId: string,
            matchHistoryUri: string,
            currentAccountId: string,
            currentPlatformId: string,
            summonerName: string,
            summonerId: string,
            platformId: string
        }

        interface TeamStatsDto {
            towerKills: number,
            riftHeraldKills: number,
            firstBlood: boolean,
            inhibitorKills: number,
            bans: TeamBansDto[],
            firstBaron: boolean,
            firstDragon: boolean,
            baronKills: number,
            dominionVictoryScore: number,
            dragonKills: number,
            firstInhibitor: boolean,
            firstTower: boolean,
            vilemawKills: number,
            firstRiftHerald: boolean,
            teamId: number,
            winner: 'Fail' | 'Win'
        }

        interface TeamBansDto {
            championId: number,
            pickTurn: number
        }

        interface ParticipantDto {
            participantId: number,
            championId: number,
            runes: RuneDto[],
            stats: ParticipantStatsDto,
            teamId: 100 | 200, //100 for blue side. 200 for red side
            timeline: ParticipantTimelineDto
            spell1Id: number,
            spell2Id: number,
            highestAchievedSeasonTier: string,
            masteries: MasteryDto[],
        }

        interface RuneDto {
            runeId: number,
            rank: number
        }

        interface ParticipantStatsDto {
            item0: number,
            item2: number,
            totalUnitsHealed: number,
            item1: number,
            largestMultiKill: number,
            goldEarned: number,
            firstInhibitorKill: boolean,
            physicalDamageTaken: number,
            nodeNeutralizeAssist: number,
            totalPlayerScore: number,
            champLevel: number,
            damageDealtToObjectives: number,
            totalDamageTaken: number,
            neutralMinionsKilled: number,
            deaths: number,
            tripleKills: number,
            magicDamageDealtToChampions: number,
            wardsKilled: number,
            pentaKills: number,
            damageSelfMitigated: number,
            largestCriticalStrike: number,
            nodeNeutralize: number,
            totalTimeCrowdControlDealt: number,
            firstTowerKill: boolean,
            magicDamageDealt: number,
            totalScoreRank: number,
            nodeCapture: number,
            wardsPlaced: number,
            totalDamageDealt: number,
            timeCCingOthers: number,
            magicalDamageTaken: number,
            largestKillingSpree: number,
            totalDamageDealtToChampions: number,
            physicalDamageDealtToChampions: number,
            neutralMinionsKilledTeamJungle: number,
            totalMinionsKilled: number,
            firstInhibitorAssist: boolean,
            visionWardsBoughtInGame: number,
            objectivePlayerScore: number,
            kills: number,
            firstTowerAssist: boolean,
            combatPlayerScore: number,
            inhibitorKills: number,
            turretKills: number,
            participantId: number,
            trueDamageTaken: number,
            firstBloodAssist: boolean,
            nodeCaptureAssist: number,
            assists: number,
            teamObjective: number,
            altarsNeutralized: number,
            goldSpent: number,
            damageDealtToTurrets: number,
            altarsCaptured: number,
            win: boolean,
            totalHeal: number,
            unrealKills: number,
            visionScore: number,
            physicalDamageDealt: number,
            firstBloodKill: boolean,
            longestTimeSpentLiving: number,
            killingSprees: number,
            sightWardsBoughtInGame: number,
            trueDamageDealtToChampions: number,
            neutralMinionsKilledEnemyJungle: number,
            doubleKills: number,
            trueDamageDealt: number,
            quadraKills: number,
            item4: number,
            item3: number,
            item6: number,
            item5: number,
            playerScore0: number,
            playerScore1: number,
            playerScore2: number,
            playerScore3: number,
            playerScore4: number,
            playerScore5: number,
            playerScore6: number,
            playerScore7: number,
            playerScore8: number,
            playerScore9: number,
            perk0: number,
            perk0Var1: number,
            perk0Var2: number,
            perk0Var3: number,
            perk1: number,
            perk1Var1: number,
            perk1Var2: number,
            perk1Var3: number,
            perk2: number,
            perk2Var1: number,
            perk2Var2: number,
            perk2Var3: number,
            perk3: number,
            perk3Var1: number,
            perk3Var2: number,
            perk3Var3: number,
            perk4: number,
            perk4Var1: number,
            perk4Var2: number,
            perk4Var3: number,
            perk5: number,
            perk5Var1: number,
            perk5Var2: number,
            perk5Var3: number,
            perkPrimaryStyle: number,
            perkSubStyle: number,
            statPerk0: number,
            statPerk1: number,
            statPerk2: number,
        }

        interface ParticipantTimelineDto {
            participantId: number,
            csDiffPerMinDeltas: Map<String, number>,
            damageTakenPerMinDeltas: Map<String, number>,
            role: string,
            damageTakenDiffPerMinDeltas: Map<String, number>,
            xpPerMinDeltas: Map<String, number>,
            xpDiffPerMinDeltas: Map<String, number>,
            lane: string,
            creepsPerMinDeltas: Map<String, number>,
            goldPerMinDeltas: Map<String, number>,

        }

        interface MasteryDto {
            rank: number
            masteryId: number,
        }
    }
}

