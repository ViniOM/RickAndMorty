const router = require('express').Router();
const personagensController = require('./personagens.controller');
const { validId, validObjectBody } = require('../middleware/personagem.middleware');

router.get('/', personagensController.findAllPersonagensController);
router.post('/create', validObjectBody, personagensController.createPersonagensController);
router.get('/find/:id', validId, personagensController.findByIdPersonagensController);
router.delete('/delete/:id', validId, personagensController.deletePersonagensController);
router.put('/update/:id', validId, validObjectBody, personagensController.updatePersonagensController);

module.exports = router;