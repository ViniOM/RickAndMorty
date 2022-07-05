const mongoose = require("mongoose");

const PersonagemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Personagem = mongoose.model("personagens", PersonagemSchema);

module.exports = Personagem;
