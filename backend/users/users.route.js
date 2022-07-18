const router = require("express").Router();
const userController = require("./users.controller");

router.post("/", userController.createUserController);
router.get("/", userController.findAllUserController);
router.get("/find", userController.findByNameUserController)

module.exports = router;