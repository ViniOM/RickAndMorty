require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDataBase = require("./database/database")
const personagensRoute = require("./personagens/personagens.route")

const port = process.env.PORT || 3003;
const app = express();

app.use(cors());
app.use(express.json());

connectDataBase();

app.use("/personagens", personagensRoute )

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
