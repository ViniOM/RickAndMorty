const mongoose = require("mongoose");
const personagemService = require("./personagens.service");

const findAllPersonagensController = async (req, res) => {
  const personagens = await personagemService.findAllPersonagensService();
  if (personagens.length === 0) {
    res.status(400).send({
      message: "Nenhum personagem cadastrado!",
    });
  }
  res.send(personagens);
};

const createPersonagensController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await personagemService.createPersonagensService(
    personagem
  );

  res.status(201).send(newPersonagem);
};

const findByIdPersonagensController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem = await personagemService.findByIdPersonagensService(
    idParam
  );

  if (!chosenPersonagem) {
    res.status(404).send({ message: "Personagem nao encontrado!" });
  }

  res.send(chosenPersonagem);
};

const deletePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  await personagemService.deletePersonagensService(idParam);

  return res.send({ message: "Personagem deletado com sucesso!" });
};

const updatePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  const personagemEdit = req.body;
  const updatedPersonagens = await personagemService.updatePersonagensService(
    idParam,
    personagemEdit
  );

  res.send(updatedPersonagens);
};

module.exports = {
  findAllPersonagensController,
  createPersonagensController,
  findByIdPersonagensController,
  deletePersonagensController,
  updatePersonagensController,
};
