const router = require("express").Router();
const axios = require("axios");

require("dotenv").config();

router.get("/", (req, res, next) => {
  res.json({ name: "ㅁㄴㅇㄹ" });
});

router.get("/summonercheck/:id", (req, res, next) => {
  return axios.get(
    `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${req.params.id}`,
    {
      headers: { "X-Riot-Token": process.env.RIOT_API_KEY },
    }
  );
});

module.exports = router;
