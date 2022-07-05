const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId(idParam)) {
    return res.status(400).send({ message: "ID Invalido!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const personagem = req.body;

  if (!personagem.name || !personagem.image) {
    return res.status(400).send({ message: "Envie todos os campos do cadastro!"});
  }

  next();
};

module.exports = { validId, validObjectBody };
