require("dotenv").config();
const mongoose = require("mongoose");

const connectDataBase = () => {
  console.log("Conectando ao mongoDB");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB conectado!"))
    .catch((err) => console.log(`Erro ao conectar com o MongoDB: ${err}`));
};

module.exports = connectDataBase;
