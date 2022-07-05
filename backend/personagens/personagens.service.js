const Personagem = require('./Personagens');

const findAllPersonagensService = async () => {
    const personagens = Personagem.find();
    return personagens;
}

const createPersonagensService = async (newPersonagem) => {
    const personagemCriado = await Personagem.create(newPersonagem);
    return personagemCriado;
}

const findByIdPersonagensService = async (id) => {
    const personagem = await Personagem.findById(id);
    return personagem;
}

const deletePersonagensService = async (id) => {
   return await Personagem.findByIdAndDelete(id);
}

const updatePersonagensService = async(id, personagemEdited) => {
    const personagemAtualizado = await Personagem.findByIdAndUpdate(id, personagemEdited);
    return personagemAtualizado;
}

module.exports = { findAllPersonagensService, createPersonagensService, findByIdPersonagensService, deletePersonagensService, updatePersonagensService };