import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  return res.json([{ name: "Gabriel" }]);
});

app.listen(3333);
