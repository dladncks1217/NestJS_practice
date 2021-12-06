import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApirequestService {
  async getMatchUpdate(nickname) {
    try {
      const { data } = await axios.get(
        `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${encodeURIComponent(
          nickname,
        )}`,
        {
          headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
        },
      );
      return data;
    } catch (e) {
      return console.error(e);
    }
  }

  async getUpdatedRank() {
    try {
      const { data } = await axios.get(
        `https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=${process.env.RIOT_API_KEY}`,
      );
      return data;
    } catch (e) {
      return console.error(e);
    }
  }
}
