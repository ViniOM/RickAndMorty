const router = require("express").Router();
const userController = require("./users.controller");

router.get("/", userController.findAllUserController);
router.post("/create", userController.createUserController);
router.get("/find", userController.findByNameUserController)
router.delete("/delete/:id", userController.deleteUserController);

module.exports = router;