const router = require('express').Router();
const personagensController = require('./personagens.controller');
const { validId, validObjectBody } = require('../middleware/personagem.middleware');

router.get('/', personagensController.findAllPersonagensController);
router.post('/', validObjectBody, personagensController.createPersonagensController);
router.get('/:id', validId, personagensController.findByIdPersonagensController);
router.delete('/:id', validId, personagensController.deletePersonagensController);
router.put('/:id', validId, validObjectBody, personagensController.updatePersonagensController);

module.exports = router;