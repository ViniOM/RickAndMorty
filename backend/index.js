require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDataBase = require("./database/database");
const personagensRoute = require("./personagens/personagens.route");
const usuariosRoute = require("./users/users.route"); 
const authRoute = require("./auth/auth.route");

const port = process.env.PORT || 3003;
const app = express();

app.use(cors());
app.use(express.json());

connectDataBase();

app.use("/personagens", personagensRoute )
app.use("/usuarios", usuariosRoute )
app.use("/auth", authRoute );

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
