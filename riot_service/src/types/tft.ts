declare namespace TFTAPI {
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
        interface MatchDto {
            metadata: MetadataDto,
            info: InfoDto
        }

        interface MetadataDto {
            data_version: string,
            match_id: string,
            participants: string[] // A list of participant PUUIDs
        }

        interface InfoDto {
            game_datetime: number, // Unix timestamp.
            game_length: number, // Game length in seconds.
            game_variation: string,
            game_version: string,
            participants: ParticipantDto[],
            queue_id: number,
            tft_set_number: number
        }

        interface ParticipantDto {
            companion: CompanionDto,
            gold_left: number,
            last_round: number,
            level: number,
            placement: number,
            players_eliminated: number,
            puuid: string
            time_eliminated: number,
            total_damage_to_players: number,
            traits: TraitDto[],
            units: UnitDto[]
        }

        interface TraitDto {
            name: string,
            num_units: number,
            style: number,
            tier_current: number,
            tier_total: number,
        }

        interface UnitDto {
            items: number[],
            character_id: string,
            chosen: string,
            name: string,
            rarity: number,
            tier: number,
        }

        interface CompanionDto {
            content_ID: string,
            skin_ID: number,
            species: string
        }
    }
}