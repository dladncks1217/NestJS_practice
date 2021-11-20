const express = require("express");
const path = require("path");
const morgan = require("morgan");

require("dotenv").config();

const indexRouter = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 번 포트에서 서버 대기중`);
});
