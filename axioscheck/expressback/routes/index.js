const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ name: "ㅁㄴㅇㄹ" });
});

module.exports = router;
