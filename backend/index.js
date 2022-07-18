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

app.use("/characters", personagensRoute )
app.use("/users", usuariosRoute )
app.use("/auth", authRoute );
// app.use("/api-docs", swaggerRoute );

app.listen(port, () => {
  console.log(`Rodando na porta lhttps://localhost:${port}`);
});
