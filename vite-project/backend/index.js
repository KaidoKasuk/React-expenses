import express from "express";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Acsess-Control-Allow-Origin", "*");
  res.setHeader("Acsess-Control-Allow-Methods", "GET");
  res.setHeader("Acsess-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(5000, () => {
  console.log("backend server connected");
});
